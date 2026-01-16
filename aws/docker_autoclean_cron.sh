#!/bin/bash

# Stop the script on any error
set -e
# Variables
AWS_USER="admin"
AWS_HOST="15.237.53.234"
SSH_KEY="~/.ssh/cris_portfolio.pem"
FILE_TO_COPY="./docker_autoclean.sh"
REMOTE_DIR="/home/admin"

SMTP_HOST="gmail"
SMTP_USER="arcusi.cristina95@gmail.com"
SMTP_PASS="eexkjdmejtevfeag"

CONTACT_TO="arcusi.cristina95@gmail.com"
# Copy autoclean script to server
scp -i $SSH_KEY $FILE_TO_COPY $AWS_USER@$AWS_HOST:$REMOTE_DIR/docker_autoclean.sh

echo "Setting up Docker autoclean cron job"

ssh -i $SSH_KEY $AWS_USER@$AWS_HOST << EOF
    sudo chmod +x $REMOTE_DIR/docker_autoclean.sh

    sudo apt-get update
    sudo apt-get install -y cron
    sudo systemctl enable cron
    sudo systemctl start cron

    # Run autoclean every 3 months
    (sudo crontab -l 2>/dev/null; echo "0 0 1 * * $REMOTE_DIR/docker_autoclean.sh >> /var/log/docker_autoclean.log 2>&1") | sudo crontab -

EOF

# Start / update containers
ssh -i $SSH_KEY $AWS_USER@$AWS_HOST << EOF
    export SMTP_HOST="$SMTP_HOST"
    export SMTP_USER="$SMTP_USER"
    export SMTP_PASS="$SMTP_PASS"
    export CONTACT_TO="$CONTACT_TO"

    docker-compose up -d
EOF

echo "Deployment complete!"
