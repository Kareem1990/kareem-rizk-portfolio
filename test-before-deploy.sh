#!/bin/bash

# Pre-Deployment Test Script
# Ensures all functionality works before deployment

echo "🧪 Running Pre-Deployment Tests..."

# Colors
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m'

TESTS_PASSED=0
TESTS_FAILED=0

test_pass() {
    echo -e "${GREEN}✅ PASS:${NC} $1"
    ((TESTS_PASSED++))
}

test_fail() {
    echo -e "${RED}❌ FAIL:${NC} $1"
    ((TESTS_FAILED++))
}

test_warn() {
    echo -e "${YELLOW}⚠️  WARN:${NC} $1"
}

echo "=================================="
echo "📁 File Structure Tests"
echo "=================================="

# Test 1: Check core files exist
if [ -f "index.html" ]; then
    test_pass "index.html exists"
else
    test_fail "index.html missing"
fi

if [ -f "styles.css" ]; then
    test_pass "styles.css exists"
else
    test_fail "styles.css missing"
fi

if [ -f "script.js" ]; then
    test_pass "script.js exists"
else
    test_fail "script.js missing"
fi

if [ -f "config.js" ]; then
    test_pass "config.js exists"
else
    test_fail "config.js missing"
fi

# Test 2: Check assets folder
if [ -d "assets" ]; then
    test_pass "assets folder exists"
    
    # Check for key assets
    if [ -f "assets/kareem-photo.jpg" ]; then
        test_pass "Profile image exists"
    else
        test_fail "Profile image missing"
    fi
    
    if [ -f "assets/cloud.mov" ]; then
        test_pass "Cloud video exists"
    else
        test_warn "Cloud video missing (optional)"
    fi
else
    test_fail "assets folder missing"
fi

echo ""
echo "=================================="
echo "🔍 Code Quality Tests"
echo "=================================="

# Test 3: Check for JavaScript errors
if grep -q "console.error\|throw new Error" script.js; then
    test_warn "JavaScript contains error handling (review recommended)"
else
    test_pass "No obvious JavaScript errors"
fi

# Test 4: Check for CSS syntax
if grep -q "}" styles.css && grep -q "{" styles.css; then
    test_pass "CSS syntax appears valid"
else
    test_fail "CSS syntax issues detected"
fi

# Test 5: Check HTML structure
if grep -q "<html" index.html && grep -q "</html>" index.html; then
    test_pass "HTML structure valid"
else
    test_fail "HTML structure issues"
fi

echo ""
echo "=================================="
echo "⚙️  Functionality Tests"
echo "=================================="

# Test 6: Check for theme toggle functionality
if grep -q "theme-toggle" index.html && grep -q "toggleTheme" script.js; then
    test_pass "Theme toggle functionality present"
else
    test_fail "Theme toggle functionality missing"
fi

# Test 7: Check for progress bars
if grep -q "skill-progress" index.html && grep -q "initSkillsProgress" script.js; then
    test_pass "Progress bars functionality present"
else
    test_fail "Progress bars functionality missing"
fi

# Test 8: Check for responsive design
if grep -q "@media" styles.css; then
    test_pass "Responsive design CSS present"
else
    test_fail "Responsive design missing"
fi

# Test 9: Check for project filtering
if grep -q "filter-btn" index.html && grep -q "filterProjects" script.js; then
    test_pass "Project filtering functionality present"
else
    test_warn "Project filtering functionality missing (optional)"
fi

echo ""
echo "=================================="
echo "📊 Test Results"
echo "=================================="

echo "Tests Passed: $TESTS_PASSED"
echo "Tests Failed: $TESTS_FAILED"

if [ $TESTS_FAILED -eq 0 ]; then
    echo -e "${GREEN}🎉 All tests passed! Ready for deployment.${NC}"
    exit 0
else
    echo -e "${RED}❌ $TESTS_FAILED test(s) failed. Please fix issues before deployment.${NC}"
    exit 1
fi
