#!/bin/bash

# Build the application
npm run build

# Create a temporary directory for deployment
mkdir -p tmp_deploy

# Copy the built files to the temporary directory
cp -r dist/public/* tmp_deploy/

# Create or update the gh-pages branch
cd tmp_deploy
git init
git checkout -b gh-pages
git add .
git commit -m "Deploy to GitHub Pages"
git remote add origin https://github.com/kalyugwasi/gccp-qa-platform.git
git push -f origin gh-pages

# Clean up
cd ..
rm -rf tmp_deploy

echo "Deployed to GitHub Pages successfully!"