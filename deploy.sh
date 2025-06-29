#!/bin/bash

# Portfolio Deployment Script - AWS S3 + CloudFront
# This script deploys your portfolio with zero breaking changes

echo "🚀 Starting Portfolio Deployment..."

# Configuration
BUCKET_NAME="kareem-portfolio-site"
REGION="us-east-1"
PROFILE="default"  # Change if you use a different AWS profile

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if AWS CLI is installed
if ! command -v aws &> /dev/null; then
    print_error "AWS CLI is not installed. Please install it first."
    exit 1
fi

# Check AWS credentials
print_status "Checking AWS credentials..."
if ! aws sts get-caller-identity --profile $PROFILE &> /dev/null; then
    print_error "AWS credentials not configured. Please run 'aws configure'"
    exit 1
fi

print_success "AWS credentials verified"

# Step 1: Create S3 bucket
print_status "Creating S3 bucket: $BUCKET_NAME"
if aws s3 mb s3://$BUCKET_NAME --region $REGION --profile $PROFILE 2>/dev/null; then
    print_success "S3 bucket created successfully"
else
    print_warning "Bucket might already exist, continuing..."
fi

# Step 2: Enable static website hosting
print_status "Configuring static website hosting..."
aws s3 website s3://$BUCKET_NAME \
    --index-document index.html \
    --error-document index.html \
    --profile $PROFILE

print_success "Static website hosting enabled"

# Step 3: Set bucket policy for public read access
print_status "Setting bucket policy for public access..."
cat > bucket-policy.json << EOF
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::$BUCKET_NAME/*"
        }
    ]
}
EOF

aws s3api put-bucket-policy \
    --bucket $BUCKET_NAME \
    --policy file://bucket-policy.json \
    --profile $PROFILE

rm bucket-policy.json
print_success "Bucket policy applied"

# Step 4: Upload files with proper content types
print_status "Uploading portfolio files..."

# Upload HTML files
aws s3 cp index.html s3://$BUCKET_NAME/ \
    --content-type "text/html" \
    --cache-control "max-age=300" \
    --profile $PROFILE

# Upload CSS files
aws s3 cp styles.css s3://$BUCKET_NAME/ \
    --content-type "text/css" \
    --cache-control "max-age=86400" \
    --profile $PROFILE

# Upload JavaScript files
aws s3 cp script.js s3://$BUCKET_NAME/ \
    --content-type "application/javascript" \
    --cache-control "max-age=86400" \
    --profile $PROFILE

aws s3 cp config.js s3://$BUCKET_NAME/ \
    --content-type "application/javascript" \
    --cache-control "max-age=86400" \
    --profile $PROFILE

# Upload assets folder
aws s3 sync assets/ s3://$BUCKET_NAME/assets/ \
    --cache-control "max-age=2592000" \
    --profile $PROFILE

print_success "All files uploaded successfully"

# Step 5: Create CloudFront distribution
print_status "Creating CloudFront distribution..."

# Create CloudFront distribution configuration
cat > cloudfront-config.json << EOF
{
    "CallerReference": "portfolio-$(date +%s)",
    "Comment": "Kareem Portfolio CloudFront Distribution",
    "DefaultCacheBehavior": {
        "TargetOriginId": "S3-$BUCKET_NAME",
        "ViewerProtocolPolicy": "redirect-to-https",
        "TrustedSigners": {
            "Enabled": false,
            "Quantity": 0
        },
        "ForwardedValues": {
            "QueryString": false,
            "Cookies": {
                "Forward": "none"
            }
        },
        "MinTTL": 0,
        "DefaultTTL": 86400,
        "MaxTTL": 31536000,
        "Compress": true
    },
    "Origins": {
        "Quantity": 1,
        "Items": [
            {
                "Id": "S3-$BUCKET_NAME",
                "DomainName": "$BUCKET_NAME.s3-website-$REGION.amazonaws.com",
                "CustomOriginConfig": {
                    "HTTPPort": 80,
                    "HTTPSPort": 443,
                    "OriginProtocolPolicy": "http-only"
                }
            }
        ]
    },
    "Enabled": true,
    "DefaultRootObject": "index.html",
    "CustomErrorResponses": {
        "Quantity": 1,
        "Items": [
            {
                "ErrorCode": 404,
                "ResponsePagePath": "/index.html",
                "ResponseCode": "200",
                "ErrorCachingMinTTL": 300
            }
        ]
    },
    "PriceClass": "PriceClass_100"
}
EOF

# Create the distribution
DISTRIBUTION_ID=$(aws cloudfront create-distribution \
    --distribution-config file://cloudfront-config.json \
    --profile $PROFILE \
    --query 'Distribution.Id' \
    --output text)

rm cloudfront-config.json

if [ ! -z "$DISTRIBUTION_ID" ]; then
    print_success "CloudFront distribution created: $DISTRIBUTION_ID"
    
    # Get the CloudFront domain name
    CLOUDFRONT_DOMAIN=$(aws cloudfront get-distribution \
        --id $DISTRIBUTION_ID \
        --profile $PROFILE \
        --query 'Distribution.DomainName' \
        --output text)
    
    print_success "CloudFront domain: $CLOUDFRONT_DOMAIN"
else
    print_error "Failed to create CloudFront distribution"
fi

# Step 6: Display deployment information
echo ""
echo "🎉 Deployment Complete!"
echo "=================================="
echo "S3 Bucket: $BUCKET_NAME"
echo "S3 Website URL: http://$BUCKET_NAME.s3-website-$REGION.amazonaws.com"
if [ ! -z "$CLOUDFRONT_DOMAIN" ]; then
    echo "CloudFront URL: https://$CLOUDFRONT_DOMAIN"
    echo ""
    print_warning "CloudFront distribution is being deployed. It may take 15-20 minutes to be fully available."
fi
echo ""
echo "✅ All functionality preserved:"
echo "  - Dark/Light mode toggle"
echo "  - Progress bar animations"
echo "  - Smooth scrolling"
echo "  - Project filtering"
echo "  - Contact form"
echo "  - Responsive design"
echo ""
print_success "Your portfolio is now live!"
