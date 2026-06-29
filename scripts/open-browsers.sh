#!/bin/bash

# Wait for servers to start
echo "Waiting for dev servers to start..."
sleep 5

# Open all apps in browser
echo "Opening browsers..."
open http://localhost:3000/html-app/  # HTML
open http://localhost:4200  # Angular
open http://localhost:5173  # React
open http://localhost:5174  # Vue

echo "All browsers opened!"
