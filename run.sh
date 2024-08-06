#!/bin/bash

# Install Node
curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
sudo apt-get update
sudo apt-get install -y nodejs

# Init a project
mkdir city-data-app
cd city-data-app
npm init -y

# Install necessary dependencies
npm install csv-parser