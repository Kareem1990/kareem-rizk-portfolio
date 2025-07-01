#!/bin/bash

# Portfolio Deployment Verification Script
# Verifies that the website is properly deployed and accessible

echo "🔍 Verifying Portfolio Deployment..."
echo "=================================="

# Check if custom domain is accessible
echo "📡 Testing custom domain accessibility..."
if curl -s -I https://kareemrizk.tech | grep -q "200 OK"; then
    echo "✅ kareemrizk.tech is accessible"
else
    echo "❌ kareemrizk.tech is not accessible"
fi

if curl -s -I https://www.kareemrizk.tech | grep -q "200 OK"; then
    echo "✅ www.kareemrizk.tech is accessible"
else
    echo "❌ www.kareemrizk.tech is not accessible"
fi

# Check SSL certificate
echo ""
echo "🔒 Testing SSL certificate..."
if curl -s -I https://kareemrizk.tech | grep -q "HTTP/2 200"; then
    echo "✅ SSL certificate is working (HTTP/2 enabled)"
else
    echo "⚠️  SSL certificate may have issues"
fi

# Check response time
echo ""
echo "⚡ Testing response time..."
response_time=$(curl -o /dev/null -s -w '%{time_total}' https://kareemrizk.tech)
echo "📊 Response time: ${response_time}s"

if (( $(echo "$response_time < 2.0" | bc -l) )); then
    echo "✅ Response time is excellent (< 2s)"
elif (( $(echo "$response_time < 5.0" | bc -l) )); then
    echo "⚠️  Response time is acceptable (< 5s)"
else
    echo "❌ Response time is slow (> 5s)"
fi

echo ""
echo "🎉 Deployment verification complete!"
echo "🌐 Visit your portfolio: https://kareemrizk.tech"
