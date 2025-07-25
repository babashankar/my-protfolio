#!/bin/bash

echo "🚀 Quick GitHub Setup Commands"
echo "================================"
echo ""

read -p "Enter your GitHub username: " USERNAME
read -p "Enter repository name (default: batman-portfolio): " REPO_NAME

# Set default repo name if empty
if [ -z "$REPO_NAME" ]; then
    REPO_NAME="batman-portfolio"
fi

echo ""
echo "Run these commands to push to GitHub:"
echo "======================================"
echo ""
echo "git remote add origin https://github.com/$USERNAME/$REPO_NAME.git"
echo "git push -u origin main"
echo ""
echo "🌐 Your portfolio will be available at:"
echo "GitHub: https://github.com/$USERNAME/$REPO_NAME"
echo "GitHub Pages: https://$USERNAME.github.io/$REPO_NAME"
echo ""
echo "📋 To create the repository on GitHub:"
echo "1. Go to: https://github.com/new"
echo "2. Repository name: $REPO_NAME"
echo "3. Description: Batman-themed personal portfolio"
echo "4. Public repository"
echo "5. Don't initialize with README"
echo "6. Click 'Create repository'"
echo ""
echo "🔧 After pushing, enable GitHub Pages:"
echo "1. Go to repository Settings → Pages"
echo "2. Source: Deploy from a branch → gh-pages"
echo "3. The GitHub Action will automatically deploy"
echo ""
echo "🚀 Alternative: Deploy to Vercel (Recommended):"
echo "1. Go to: https://vercel.com"
echo "2. Import from GitHub"
echo "3. Select your repository"
echo "4. Deploy automatically!"
