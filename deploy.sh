#!/bin/bash
# Push to GitHub - Run this manually when token works

cd /Users/shaidzindzihashvili/.openclaw/workspace/content-site

echo "Pushing to GitHub..."
git remote add origin https://github.com/shaidzindzihashvili/affiliate-content.git 2>/dev/null
git push -u origin main --force

echo "Done! Now deploy on Vercel:"
echo "1. Go to https://vercel.com/import"
echo "2. Select 'affiliate-content' repo"
echo "3. Deploy!"
