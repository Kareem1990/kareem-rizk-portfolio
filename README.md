# Personal Portfolio Website

A modern, responsive portfolio website to showcase your GitHub projects and skills.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Project Showcase**: Dedicated section for your 7 main GitHub projects
- **Interactive Elements**: Hover effects, smooth scrolling, and animations
- **Contact Form**: Functional contact form for potential clients/employers
- **SEO Friendly**: Optimized for search engines
- **Fast Loading**: Optimized performance with minimal dependencies

## Quick Start

1. **Customize Your Information**:
   - Open `config.js` and update with your personal details
   - Replace placeholder project information with your actual GitHub projects
   - Update social media links and contact information

2. **Update Content**:
   - Edit `index.html` to match your personal branding
   - Modify the hero section with your name and title
   - Update the about section with your background

3. **Customize Styling** (Optional):
   - Modify `styles.css` to match your preferred color scheme
   - Update the theme colors in `config.js`
   - Add your own fonts or styling preferences

4. **Test Locally**:
   ```bash
   # Simple HTTP server with Python
   python -m http.server 8000
   
   # Or with Node.js (if you have it installed)
   npx http-server
   
   # Or with PHP
   php -S localhost:8000
   ```

5. **Open in Browser**:
   Navigate to `http://localhost:8000` to view your portfolio

## Customization Guide

### Adding Your Projects

Edit the `projects` array in `config.js`:

```javascript
{
    title: "Your Project Name",
    description: "Brief description of your project",
    technologies: ["React", "Node.js", "MongoDB"],
    githubUrl: "https://github.com/yourusername/project",
    liveUrl: "https://your-live-demo.com", // Optional
    icon: "🚀", // Emoji or Font Awesome class
    featured: true
}
```

### Updating Personal Information

Modify the `personal` object in `config.js`:

```javascript
personal: {
    name: "Your Full Name",
    title: "Your Professional Title",
    description: "Your elevator pitch",
    email: "your.email@example.com",
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourprofile"
}
```

### Customizing Colors

Update the theme colors in `config.js`:

```javascript
theme: {
    primary: "#your-primary-color",
    secondary: "#your-secondary-color",
    accent: "#your-accent-color"
}
```

## Deployment Options

### GitHub Pages
1. Push your code to a GitHub repository
2. Go to repository Settings > Pages
3. Select source branch (usually `main`)
4. Your site will be available at `https://yourusername.github.io/repository-name`

### Netlify
1. Connect your GitHub repository to Netlify
2. Deploy automatically on every push
3. Custom domain support available

### Vercel
1. Import your GitHub repository to Vercel
2. Automatic deployments and preview URLs
3. Excellent performance optimization

### AWS S3 + CloudFront
1. Upload files to S3 bucket
2. Configure bucket for static website hosting
3. Use CloudFront for CDN and custom domain

## File Structure

```
portfolio-site/
├── index.html          # Main HTML file
├── styles.css          # CSS styles
├── script.js           # JavaScript functionality
├── config.js           # Configuration file
├── README.md           # This file
└── assets/             # Images and other assets (create as needed)
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance Tips

1. **Optimize Images**: Compress images before adding them
2. **Minimize HTTP Requests**: Keep external dependencies minimal
3. **Use CDN**: Consider using CDN for Font Awesome and other libraries
4. **Enable Compression**: Configure gzip compression on your server

## SEO Optimization

- Update the `<title>` and meta tags in `index.html`
- Add relevant keywords to your content
- Include alt text for images
- Create a sitemap.xml file
- Add Google Analytics (optional)

## Contact Form Integration

The contact form currently shows an alert. To make it functional:

1. **Backend Integration**: Connect to your backend API
2. **Email Services**: Use services like EmailJS, Formspree, or Netlify Forms
3. **Serverless Functions**: Use AWS Lambda, Vercel Functions, or Netlify Functions

Example with EmailJS:
```javascript
// Add EmailJS SDK and configure in script.js
emailjs.send('service_id', 'template_id', formData)
    .then(() => alert('Message sent successfully!'));
```

## Contributing

Feel free to fork this project and customize it for your own use. If you make improvements that could benefit others, consider submitting a pull request.

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you have questions or need help customizing your portfolio:
1. Check the documentation above
2. Look at the code comments for guidance
3. Create an issue in the repository
4. Reach out via the contact information in your portfolio

---

**Happy coding! 🚀**
