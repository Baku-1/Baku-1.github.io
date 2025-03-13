#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

# Step 1: Build the Client
echo "Building the client..."
cd client
npm install
npm run build
cd ..

# Step 2: Deploy the Server
echo "Starting the server..."
cd server
npm install
npm start &
cd ..

# Step 3: Deploy the Smart Contracts
echo "Deploying smart contracts..."
cd contracts
forge build
forge deploy
cd ..

echo "Deployment completed successfully!"
