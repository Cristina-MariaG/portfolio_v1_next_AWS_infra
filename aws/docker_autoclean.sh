#!/bin/bash

# Remove stopped containers
docker container prune -f

# Remove unused images
docker image prune -af

# Remove unused networks
docker network prune -f

# Optional: remove build cache
docker builder prune -af
