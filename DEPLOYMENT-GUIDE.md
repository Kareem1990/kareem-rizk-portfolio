# 🚀 Portfolio Deployment Guide

## Quick Deployment (Recommended)

### Prerequisites
1. **AWS CLI installed** - [Download here](https://aws.amazon.com/cli/)
2. **AWS credentials configured** - Run `aws configure`
3. **Bash terminal** (Git Bash on Windows, Terminal on Mac/Linux)

### One-Command Deployment
```bash
# Test first (recommended)
./scripts/test-before-deploy.sh

# Deploy to AWS
./scripts/deploy.sh
```

## Manual Deployment Steps

### Step 1: Create S3 Bucket
```bash
aws s3 mb s3://kareem-portfolio-site --region us-east-1
```

### Step 2: Enable Static Website Hosting
```bash
aws s3 website s3://kareem-portfolio-site \
    --index-document index.html \
    --error-document index.html
```

### Step 3: Set Bucket Policy
```bash
aws s3api put-bucket-policy --bucket kareem-portfolio-site --policy '{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::kareem-portfolio-site/*"
        }
    ]
}'
```

### Step 4: Upload Files
```bash
# Upload HTML
aws s3 cp index.html s3://kareem-portfolio-site/ --content-type "text/html"

# Upload CSS
aws s3 cp styles.css s3://kareem-portfolio-site/ --content-type "text/css"

# Upload JavaScript
aws s3 cp script.js s3://kareem-portfolio-site/ --content-type "application/javascript"
aws s3 cp config.js s3://kareem-portfolio-site/ --content-type "application/javascript"

# Upload Assets
aws s3 sync assets/ s3://kareem-portfolio-site/assets/
```

## ✅ Functionality Verification

After deployment, test these features:

### Core Features
- [ ] **Theme Toggle** - Dark/Light mode switching
- [ ] **Progress Bars** - Scroll-triggered animations
- [ ] **Smooth Scrolling** - Navigation links
- [ ] **Project Filtering** - Category buttons
- [ ] **Contact Form** - Form submission
- [ ] **Mobile Responsive** - All screen sizes

### Visual Elements
- [ ] **Profile Images** - Loading correctly
- [ ] **Cloud Video** - Playing in background
- [ ] **Icons & Fonts** - FontAwesome and Google Fonts
- [ ] **Animations** - Hover effects and transitions

## 🌐 Access Your Site

### S3 Website URL
```
http://kareem-portfolio-site.s3-website-us-east-1.amazonaws.com
```

### CloudFront URL (after distribution deploys)
```
https://[distribution-id].cloudfront.net
```

## 🔧 Troubleshooting

### Common Issues

**1. Files not loading**
- Check bucket policy is public
- Verify file paths are correct
- Clear browser cache

**2. CSS/JS not working**
- Check content-type headers
- Verify file uploads completed
- Check browser console for errors

**3. Images not displaying**
- Verify assets folder uploaded
- Check image file names match code
- Test image URLs directly

**4. CloudFront not updating**
- Wait 15-20 minutes for deployment
- Create invalidation if needed:
```bash
aws cloudfront create-invalidation --distribution-id [ID] --paths "/*"
```

## 📞 Support

If you encounter issues:
1. Check the browser console for errors
2. Verify AWS credentials and permissions
3. Test locally first with `python -m http.server 8000`
4. Review deployment logs

## 🎉 Success!

Your portfolio is now live with:
- ✅ **Zero breaking changes**
- ✅ **All functionality preserved**
- ✅ **Global CDN delivery**
- ✅ **HTTPS security**
- ✅ **Fast loading times**
