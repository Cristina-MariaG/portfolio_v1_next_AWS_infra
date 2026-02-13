#!/bin/bash

# Stop the script on any error
set -e

# Variables
AWS_USER="admin"
AWS_HOST="15.237.53.234"
SSH_KEY="~/.ssh/..."
DOCKER_COMPOSE_FILE="./docker-compose-test.yml"
REMOTE_DIR="/home/admin"
EMAIL_ADDRESS="mail@mail.com"

# Connect to AWS instance and create nginx folder
echo "Connecting to AWS instance and creating folder nginx"
ssh -i $SSH_KEY $AWS_USER@$AWS_HOST << EOF
    mkdir -p  $REMOTE_DIR/nginx/conf
    exit
EOF


# Copy the docker-compose.yml file to the AWS instance
echo "Copying docker-compose file to AWS instance..."
scp -i $SSH_KEY $DOCKER_COMPOSE_FILE $AWS_USER@$AWS_HOST:$REMOTE_DIR/docker-compose.yml
scp -i $SSH_KEY ./www.iamcristinadev.xyz1.conf  $AWS_USER@$AWS_HOST:$REMOTE_DIR/nginx/conf/www.iamcristinadev.conf

# Connect to the AWS instance, start Docker Compose, and generate SSL certificate
echo "Connecting to AWS instance and starting Docker Compose..."
ssh -i $SSH_KEY $AWS_USER@$AWS_HOST << EOF
    docker compose up -d
    docker compose run --rm certbot certonly --webroot --webroot-path /var/www/certbot/ -d iamcristinadev.xyz www.iamcristinadev.xyz --email $EMAIL_ADDRESS --agree-tos
    exit
EOF

# Copy the updated nginx config and the SSL renewal script to the AWS instance
scp -i $SSH_KEY ./www.iamcristinadev.xyz2.conf $AWS_USER@$AWS_HOST:$REMOTE_DIR/nginx/conf/www.iamcristinadev.conf
scp -i $SSH_KEY ./renew_certif.sh $AWS_USER@$AWS_HOST:$REMOTE_DIR/renew_certif.sh

# Restart Docker, install cron, and set up cron job for SSL certificate renewal
echo "Restart Docker, install cron, and add SSL renewal script to cron job every 3 months"
ssh -i $SSH_KEY $AWS_USER@$AWS_HOST << EOF
    docker-compose restart
    sudo apt-get update
    sudo apt-get install -y cron
    sudo systemctl enable cron
    sudo systemctl start cron
    (crontab -l 2>/dev/null; echo "0 0 1 */3 * $REMOTE_DIR/renew_certif.sh") | crontab -
    echo "SSL renewal script and cron job setup complete!"
    exit
EOF

# Set environment variables and start Docker Compose with the necessary variables
ssh -i $SSH_KEY $AWS_USER@$AWS_HOST << EOF
    export SMTP_HOST="$SMTP_HOST"
    export SMTP_USER="$SMTP_USER"
    export SMTP_PASS="$SMTP_PASS"
    export CONTACT_TO="$CONTACT_TO"

    docker-compose up -d
EOF
# Deployment complete
echo "Deployment complete!"

