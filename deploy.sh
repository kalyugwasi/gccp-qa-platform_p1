#!/bin/bash

# Generate the static data
node scripts/generate-data.js

# Build the application
npm run build

# Create a temporary directory for deployment
mkdir -p tmp_deploy

# Copy the built files to the temporary directory
cp -r dist/public/* tmp_deploy/

# Navigate to the temporary directory
cd tmp_deploy

# Create necessary git files
git init
git add .
git config --global user.email "deploy@example.com"
git config --global user.name "GitHub Pages Deploy"
git commit -m "Deploy to GitHub Pages"

# Force push to the gh-pages branch
git remote add origin https://github.com/kalyugwasi/gccp-qa-platform.git
git checkout -b gh-pages
git push -f origin gh-pages

# Clean up
cd ..
rm -rf tmp_deploy

echo "Deployed to GitHub Pages successfully!"