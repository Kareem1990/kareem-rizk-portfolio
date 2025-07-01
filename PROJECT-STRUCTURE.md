# 📁 Project Structure

This document outlines the organization of the portfolio website codebase.

## 🏗️ Root Directory Structure

```
portfolio-site/
├── 📄 index.html              # Main HTML file
├── 🎨 styles.css              # Main stylesheet
├── ⚡ script.js               # Main JavaScript file
├── ⚙️  config.js              # Configuration settings
├── 📋 README.md               # Project documentation
├── 🏗️ ARCHITECTURE.md         # Technical architecture details
├── 🚀 DEPLOYMENT-GUIDE.md     # Deployment instructions
├── 📁 PROJECT-STRUCTURE.md    # This file
├── 🖼️ portfolio_architecture.png # Architecture diagram
├── 📁 assets/                 # Static assets (images, videos, docs)
├── 📁 scripts/                # Deployment and utility scripts
└── 📁 docs/                   # Development documentation
```

## 📂 Directory Details

### `/assets/` - Static Assets
- **Purpose**: Contains all static files (images, videos, documents)
- **Structure**: Organized by content type
- **Note**: Do not modify - optimized for performance

### `/scripts/` - Deployment Scripts
- **`deploy.sh`**: AWS deployment automation
- **`test-before-deploy.sh`**: Pre-deployment testing
- **`deploy-config.json`**: Deployment configuration

### `/docs/` - Development Documentation
- **Setup guides**: Development environment setup
- **Templates**: Project information templates
- **Architecture notes**: Additional technical documentation

## 🎯 Core Files

### Essential Files (Do Not Remove)
- `index.html` - Main website structure
- `styles.css` - All styling and responsive design
- `script.js` - Interactive functionality and animations
- `config.js` - Site configuration and project data
- `README.md` - Project overview and documentation

### Architecture & Documentation
- `ARCHITECTURE.md` - Detailed technical specifications
- `DEPLOYMENT-GUIDE.md` - AWS deployment instructions
- `portfolio_architecture.png` - Visual architecture diagram

## 🔧 Configuration

### `config.js`
Contains all site configuration including:
- Project information and descriptions
- Contact details and social links
- Feature toggles and settings
- External service configurations

## 🚀 Deployment

All deployment-related files are organized in the `/scripts/` directory:
- Automated AWS S3 deployment
- Pre-deployment testing
- Configuration management

## 📱 Responsive Design

The website is built with a mobile-first approach:
- Single CSS file with media queries
- Touch-optimized interactions
- Progressive enhancement

---

*This structure follows modern web development best practices and maintains clean separation of concerns.*
