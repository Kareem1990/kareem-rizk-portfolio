// Mobile Scroll Lock - Prevent Horizontal Scrolling
document.addEventListener('DOMContentLoaded', function() {
    // Prevent horizontal scrolling on mobile devices
    function preventHorizontalScroll() {
        // Lock horizontal scroll position
        let scrollLeft = 0;
        
        window.addEventListener('scroll', function() {
            if (window.scrollX !== scrollLeft) {
                window.scrollTo(scrollLeft, window.scrollY);
            }
        });
        
        // Prevent horizontal touch scrolling
        document.addEventListener('touchstart', function(e) {
            // Store initial touch position
            this.startX = e.touches[0].clientX;
            this.startY = e.touches[0].clientY;
        }, { passive: true });
        
        document.addEventListener('touchmove', function(e) {
            if (!this.startX || !this.startY) return;
            
            let diffX = Math.abs(e.touches[0].clientX - this.startX);
            let diffY = Math.abs(e.touches[0].clientY - this.startY);
            
            // If horizontal movement is greater than vertical, prevent default
            if (diffX > diffY && diffX > 10) {
                e.preventDefault();
            }
        }, { passive: false });
        
        // Reset touch tracking
        document.addEventListener('touchend', function() {
            this.startX = null;
            this.startY = null;
        });
    }
    
    // Apply mobile scroll lock on touch devices
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
        preventHorizontalScroll();
    }
});

// Theme Toggle Functionality with Layout Switching

document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    if (!themeToggle) return; // Safety check
    
    const themeIcon = themeToggle.querySelector('i');

    // Check for saved theme preference or default to light mode
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);

    // Update icon based on current theme
    if (currentTheme === 'dark') {
        themeIcon.classList.replace('fa-moon', 'fa-sun');
        switchToVideoLayout();
    } else {
        switchToOriginalLayout();
    }

    // Theme toggle event listener
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        // Update theme
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        // Update icon
        if (newTheme === 'dark') {
            themeIcon.classList.replace('fa-moon', 'fa-sun');
            switchToVideoLayout();
        } else {
            themeIcon.classList.replace('fa-sun', 'fa-moon');
            switchToOriginalLayout();
        }
        
        // Scroll to top smoothly to showcase the theme transition
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        
        // Reinitialize Kareem zoom effect for new theme
        initKareemZoomEffect();
    });
});

// Function to switch to video layout (dark mode)
function switchToVideoLayout() {
    const heroSection = document.getElementById('home');
    
    // Create video hero layout
    heroSection.innerHTML = `
        <!-- Background Video -->
        <div class="hero-video">
            <video autoplay muted loop playsinline>
                <source src="assets/AdobeStock_325825244.mov" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        </div>
        
        <!-- Hero Content Overlay -->
        <div class="hero-overlay"></div>
        
        <!-- Hero Text Overlay -->
        <div class="hero-text-overlay">
            <h1 class="hero-main-text">Ready to take you to the Cloud?</h1>
        </div>
    `;
    
    // Add video hero classes
    heroSection.className = 'hero video-hero';
}

// Function to switch to original layout (light mode)
function switchToOriginalLayout() {
    const heroSection = document.getElementById('home');
    
    // Create original hero layout
    heroSection.innerHTML = `
        <div class="hero-content">
            <h1>Hi, I'm <span class="highlight">Kareem</span></h1>
            <h2 class="rotating-title">
                <span class="title-text">Data Engineer</span>
            </h2>
            <p>I specialize in building scalable data pipelines, ETL systems, and cloud infrastructure using modern data engineering tools and AWS services.</p>
            <div class="hero-buttons">
                <a href="#projects" class="btn btn-primary">View My Work</a>
                <a href="assets/Kareem-Rizk-Cloud-DevOps-Data-engineer.pdf" class="btn btn-resume" download>Download Resume</a>
                <a href="#contact" class="btn btn-secondary">Get In Touch</a>
            </div>
            <div class="social-links">
                <a href="https://github.com/Kareem1990" target="_blank"><i class="fab fa-github"></i></a>
                <a href="https://www.linkedin.com/in/kareem-rizk/" target="_blank"><i class="fab fa-linkedin"></i></a>
                <a href="mailto:kareem.magdy5@gmail.com"><i class="fas fa-envelope"></i></a>
            </div>
        </div>
    `;
    
    // Add original hero classes
    heroSection.className = 'hero original-hero';
}

// Function to switch to video layout (dark mode)
function switchToVideoLayout() {
    const heroSection = document.getElementById('home');
    
    // Create video hero layout
    heroSection.innerHTML = `
        <!-- Background Video -->
        <div class="hero-video">
            <video autoplay muted loop playsinline>
                <source src="assets/AdobeStock_325825244.mov" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        </div>
        
        <!-- Hero Content Overlay -->
        <div class="hero-overlay"></div>
        
        <!-- Hero Text Overlay -->
        <div class="hero-text-overlay">
            <h1 class="hero-main-text">Ready to take you to the Cloud?</h1>
        </div>
    `;
    
    // Add video hero classes
    heroSection.className = 'hero video-hero';
}

// Function to switch to original layout (light mode)
function switchToOriginalLayout() {
    const heroSection = document.getElementById('home');
    
    // Create original hero layout
    heroSection.innerHTML = `
        <div class="hero-content">
            <h1>Hi, I'm <span class="highlight">Kareem</span></h1>
            <h2 class="rotating-title">
                <span class="title-text">Data Engineer</span>
            </h2>
            <p>I specialize in building scalable data pipelines, ETL systems, and cloud infrastructure using modern data engineering tools and AWS services.</p>
            <div class="hero-buttons">
                <a href="#projects" class="btn btn-primary">View My Work</a>
                <a href="assets/Kareem-Rizk-Cloud-DevOps-Data-engineer.pdf" class="btn btn-resume" download>Download Resume</a>
                <a href="#contact" class="btn btn-secondary">Get In Touch</a>
            </div>
            <div class="social-links">
                <a href="https://github.com/Kareem1990" target="_blank"><i class="fab fa-github"></i></a>
                <a href="https://www.linkedin.com/in/kareem-rizk/" target="_blank"><i class="fab fa-linkedin"></i></a>
                <a href="mailto:kareem.magdy5@gmail.com"><i class="fas fa-envelope"></i></a>
            </div>
        </div>
    `;
    
    // Add original hero classes
    heroSection.className = 'hero original-hero';
    
    // Clear any existing typewriter timeout
    if (typewriterTimeout) {
        clearTimeout(typewriterTimeout);
    }
    
    // Reset typewriter variables
    currentTitleIndex = 0;
    currentCharIndex = 0;
    isDeleting = false;
    
    // Restart typewriter effect for light mode
    setTimeout(typewriterEffect, 1000);
}

// Certifications Carousel Functionality
document.addEventListener('DOMContentLoaded', function() {
    const certifications = [
        {
            id: 'aws',
            title: 'AWS Certified Developer – Associate',
            description: 'Validates expertise in developing, deploying, and debugging cloud-based applications using AWS services.'
        },
        {
            id: 'ibm',
            title: 'IBM Data Engineering Professional Certificate',
            description: 'Comprehensive program covering data engineering fundamentals, ETL processes, and big data technologies.'
        },
        {
            id: 'udacity',
            title: 'Udacity Data Engineering Nanodegree Certificate',
            description: 'Advanced program focusing on data modeling, data warehousing, and data pipeline orchestration.'
        }
    ];

    let currentCertIndex = 0;
    
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const certTitle = document.getElementById('certTitle');
    const certDescription = document.getElementById('certDescription');
    const certImages = document.querySelectorAll('.cert-image');

    function updateCertification(index) {
        // Fade out current image first
        certImages.forEach(img => {
            img.classList.remove('active');
        });

        // Small delay then fade in new image
        setTimeout(() => {
            certImages[index].classList.add('active');
        }, 150);

        // Update text content with slight delay for smoother transition
        setTimeout(() => {
            certTitle.textContent = certifications[index].title;
            certDescription.textContent = certifications[index].description;
        }, 100);
    }

    function nextCertification() {
        currentCertIndex = (currentCertIndex + 1) % certifications.length;
        updateCertification(currentCertIndex);
    }

    function prevCertification() {
        currentCertIndex = (currentCertIndex - 1 + certifications.length) % certifications.length;
        updateCertification(currentCertIndex);
    }

    // Event listeners
    nextBtn.addEventListener('click', nextCertification);
    prevBtn.addEventListener('click', prevCertification);

    // Auto-advance every 5 seconds
    setInterval(nextCertification, 5000);
});

// Cloud Video Speed Control
document.addEventListener('DOMContentLoaded', function() {
    // Set cloud video to 0.5x speed
    const cloudVideo = document.querySelector('.cloud-video');
    if (cloudVideo) {
        cloudVideo.addEventListener('loadedmetadata', function() {
            this.playbackRate = 0.5;
        });
    }
});

// Typewriter effect for hero section
const titles = [
    "Data Engineer",
    "Cloud Engineer", 
    "DevOps Engineer",
    "Tech Savvy",
    "Full-stack Web Developer",
    "Tech Journalist",
    "Content Creator",
    "Storyteller",
    "Writer"
];

let currentTitleIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;
let typewriterTimeout;

function typewriterEffect() {
    const titleElement = document.querySelector('.title-text');
    if (!titleElement) return;
    
    const currentTitle = titles[currentTitleIndex];
    
    if (isDeleting) {
        // Backspace effect
        titleElement.textContent = currentTitle.substring(0, currentCharIndex - 1);
        currentCharIndex--;
        
        if (currentCharIndex === 0) {
            isDeleting = false;
            currentTitleIndex = (currentTitleIndex + 1) % titles.length;
            typewriterTimeout = setTimeout(typewriterEffect, 200); // Short pause before typing next
        } else {
            typewriterTimeout = setTimeout(typewriterEffect, 50); // Backspace speed
        }
    } else {
        // Typing effect
        titleElement.textContent = currentTitle.substring(0, currentCharIndex + 1);
        currentCharIndex++;
        
        if (currentCharIndex === currentTitle.length) {
            // Finished typing, pause then start deleting
            typewriterTimeout = setTimeout(() => {
                isDeleting = true;
                typewriterEffect();
            }, 1500); // Pause for 1.5 seconds
        } else {
            typewriterTimeout = setTimeout(typewriterEffect, 100); // Typing speed
        }
    }
}

// Start typewriter effect
setTimeout(typewriterEffect, 1000); // Initial delay

// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Simple smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Project data will be loaded from config.js
// This is a fallback if config.js is not available
const fallbackProjects = [
    {
        title: "E-Commerce Platform",
        description: "A full-stack e-commerce application built with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.",
        technologies: ["React", "Node.js", "MongoDB", "Stripe", "JWT"],
        githubUrl: "https://github.com/yourusername/ecommerce-platform",
        liveUrl: "https://your-ecommerce-demo.com",
        icon: "🛒"
    },
    {
        title: "Task Management App",
        description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
        technologies: ["Vue.js", "Express", "Socket.io", "PostgreSQL"],
        githubUrl: "https://github.com/yourusername/task-manager",
        liveUrl: "https://your-task-app.com",
        icon: "📋"
    },
    {
        title: "Weather Dashboard",
        description: "A responsive weather application that provides current conditions and forecasts using multiple weather APIs with beautiful data visualizations.",
        technologies: ["JavaScript", "Chart.js", "Weather API", "CSS3"],
        githubUrl: "https://github.com/yourusername/weather-dashboard",
        liveUrl: "https://your-weather-app.com",
        icon: "🌤️"
    },
    {
        title: "Social Media Analytics",
        description: "A data analytics platform for social media metrics with interactive dashboards, automated reporting, and trend analysis.",
        technologies: ["Python", "Django", "D3.js", "Redis", "Celery"],
        githubUrl: "https://github.com/yourusername/social-analytics",
        liveUrl: "https://your-analytics-demo.com",
        icon: "📊"
    },
    {
        title: "Recipe Finder App",
        description: "A mobile-first recipe application with ingredient-based search, meal planning, and shopping list generation features.",
        technologies: ["React Native", "Firebase", "Recipe API", "Redux"],
        githubUrl: "https://github.com/yourusername/recipe-finder",
        liveUrl: "https://your-recipe-app.com",
        icon: "🍳"
    },
    {
        title: "Portfolio Website",
        description: "A responsive portfolio website showcasing projects and skills with modern design, smooth animations, and contact functionality.",
        technologies: ["HTML5", "CSS3", "JavaScript", "GSAP"],
        githubUrl: "https://github.com/yourusername/portfolio-site",
        liveUrl: "https://your-portfolio.com",
        icon: "💼"
    },
    {
        title: "Chat Application",
        description: "A real-time chat application with multiple rooms, file sharing, emoji support, and user presence indicators.",
        technologies: ["React", "Socket.io", "Node.js", "MongoDB"],
        githubUrl: "https://github.com/yourusername/chat-app",
        liveUrl: "https://your-chat-app.com",
        icon: "💬"
    },
    {
        title: "API Gateway Service",
        description: "A microservices API gateway with authentication, rate limiting, and request routing capabilities.",
        technologies: ["Node.js", "Express", "Redis", "JWT", "Docker"],
        githubUrl: "https://github.com/yourusername/api-gateway",
        liveUrl: null,
        icon: "⚡"
    }
];

// Get projects from config or use fallback
const projects = (typeof portfolioConfig !== 'undefined' && portfolioConfig.projects) 
    ? portfolioConfig.projects 
    : fallbackProjects;

// Get articles from config
const articles = (typeof portfolioConfig !== 'undefined' && portfolioConfig.articles) 
    ? portfolioConfig.articles 
    : [];

// Function to create article cards with proper file handling
function createArticleCard(article) {
    const isExternal = article.link.startsWith('http');
    const isPDF = article.link.toLowerCase().includes('.pdf');
    const isPowerPoint = article.link.toLowerCase().includes('.pptx') || article.link.toLowerCase().includes('.ppt');
    
    // Determine link text and icon based on file type
    let linkText, iconClass;
    if (isExternal) {
        linkText = 'Read Article';
        iconClass = 'fa-external-link-alt';
    } else if (isPDF) {
        linkText = 'View PDF';
        iconClass = 'fa-file-pdf';
    } else if (isPowerPoint) {
        linkText = 'View Presentation';
        iconClass = 'fa-file-powerpoint';
    } else {
        linkText = 'View Document';
        iconClass = 'fa-file';
    }
    
    const linkClass = isExternal ? 'article-link' : 'article-link document';
    const categoryClass = article.category === 'forbes' ? 'forbes' : 'academic';
    const categoryText = article.category === 'forbes' ? 'Forbes' : 'UMGC';
    
    return `
        <div class="article-card">
            <div class="article-thumbnail">
                <img src="${article.thumbnail}" alt="${article.title}" loading="lazy">
                <div class="article-category ${categoryClass}">${categoryText}</div>
            </div>
            <div class="article-content">
                <div class="article-type">${article.type}</div>
                <h3 class="article-title">${article.title}</h3>
                <div class="article-publication">${article.publication}</div>
                <a href="${article.link}" target="_blank" rel="noopener noreferrer" class="${linkClass}">
                    <i class="fas ${iconClass}"></i> ${linkText}
                </a>
            </div>
        </div>
    `;
}

// Load articles into the grid
function loadArticles() {
    // Get articles directly from config to avoid timing issues
    const articlesData = (typeof portfolioConfig !== 'undefined' && portfolioConfig.articles) 
        ? portfolioConfig.articles 
        : [];
    
    const articlesGrid = document.getElementById('articles-grid');
    
    if (articlesGrid && articlesData && articlesData.length > 0) {
        articlesGrid.innerHTML = articlesData.map(article => createArticleCard(article)).join('');
    }
}

// Function to create project cards
function createProjectCard(project) {
    return `
        <div class="project-card">
            <!-- Project signature logo -->
            <div class="project-signature">
                <a href="#home" class="logo-link">
                    <span class="logo-text">
                        <span class="logo-letter">K</span>
                        <span class="logo-letter">R</span>
                    </span>
                </a>
            </div>
            <div class="project-image">
                ${project.thumbnail ? 
                    `<img src="${project.thumbnail}" alt="${project.title}" loading="lazy">` :
                    `<span>${project.icon}</span>`
                }
            </div>
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tech">
                    ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
                <div class="project-links">
                    ${project.githubUrl ? `<a href="${project.githubUrl}" target="_blank" class="project-link">
                        <i class="fab fa-github"></i> Code
                    </a>` : ''}
                    ${project.liveUrl ? `<a href="${project.liveUrl}" target="_blank" class="project-link">
                        <i class="fas fa-external-link-alt"></i> Live Demo
                    </a>` : ''}
                </div>
            </div>
        </div>
    `;
}

// Load projects into the grid with debugging
function loadProjects() {
    console.log('=== LOADING PROJECTS ===');
    console.log('portfolioConfig available:', typeof portfolioConfig !== 'undefined');
    
    // Get projects directly from config to avoid timing issues
    const projectsData = (typeof portfolioConfig !== 'undefined' && portfolioConfig.projects) 
        ? portfolioConfig.projects 
        : [];
    
    console.log('Projects data:', projectsData);
    console.log('Projects count:', projectsData.length);
    
    const projectsGrid = document.getElementById('projects-grid');
    console.log('Projects grid found:', !!projectsGrid);
    
    if (projectsGrid) {
        if (projectsData && projectsData.length > 0) {
            console.log('Creating project cards...');
            const projectCards = projectsData.map((project, index) => {
                console.log(`Project ${index + 1}:`, project.title);
                return createProjectCard(project);
            });
            projectsGrid.innerHTML = projectCards.join('');
            console.log('✅ Projects loaded successfully');
            
            // Check if project cards are in DOM
            const cards = projectsGrid.querySelectorAll('.project-card');
            console.log('Project cards found:', cards.length);
        } else {
            console.log('❌ No projects data found');
            projectsGrid.innerHTML = '<div style="text-align: center; padding: 2rem;"><p>Projects loading...</p></div>';
        }
    } else {
        console.log('❌ Projects grid element not found');
    }
    console.log('=== END LOADING PROJECTS ===');
}

// EmailJS Configuration
(function() {
    // Initialize EmailJS with your public key
    emailjs.init("pagdokbzUI30JEaOV");
})();

// Contact form handling with EmailJS
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Show loading state
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        // Get form data
        const formData = new FormData(this);
        const templateParams = {
            from_name: formData.get('name'),
            from_email: formData.get('email'),
            message: formData.get('message'),
            to_email: 'kareem.magdy5@gmail.com'
        };
        
        // Send email using EmailJS with your actual credentials
        emailjs.send('service_w4bo21i', 'template_ls201bu', templateParams)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                alert(`Thank you ${templateParams.from_name}! Your message has been sent successfully. I'll get back to you soon.`);
                contactForm.reset();
            })
            .catch(function(error) {
                console.log('FAILED...', error);
                alert('Sorry, there was an error sending your message. Please try again or contact me directly at kareem.magdy5@gmail.com');
            })
            .finally(function() {
                // Reset button state
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            });
    });
}

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    loadProjects();
    loadArticles();
    
    // Retry loading after a delay in case config.js is slow
    setTimeout(() => {
        console.log('Retrying projects and articles loading...');
        loadProjects();
        loadArticles();
    }, 500);
    
    // Initialize fade-in animations
    initFadeInAnimations();
    
    // Initialize Kareem section zoom effect for dark mode
    initKareemZoomEffect();
    
    // Observe elements for animations
    const animateElements = document.querySelectorAll('.project-card, .article-card, .about-content, .contact-content, .education-item');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Kareem section zoom effect on scroll (dark mode only)
function initKareemZoomEffect() {
    const kareemSection = document.querySelector('.kareem-profile-section');
    
    if (kareemSection) {
        const kareemObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const currentTheme = document.documentElement.getAttribute('data-theme');
                
                if (currentTheme === 'dark') {
                    if (entry.isIntersecting) {
                        // Trigger zoom out when user reaches the section
                        entry.target.classList.add('in-view');
                        console.log('Kareem section reached - triggering zoom out');
                    } else {
                        // Reset when leaving section
                        entry.target.classList.remove('in-view');
                    }
                }
            });
        }, {
            threshold: 0.5, // Trigger when 50% of the section is visible
            rootMargin: '0px 0px -20% 0px' // Trigger when section is more centered in viewport
        });
        
        kareemObserver.observe(kareemSection);
    }
}

// Fade-in animations on scroll for Technologies section
function initFadeInAnimations() {
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    fadeElements.forEach(element => {
        fadeObserver.observe(element);
    });
}

// Add some interactive effects
document.addEventListener('mousemove', (e) => {
    const cursor = document.querySelector('.cursor');
    if (cursor) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    }
});

// Typing effect for hero section (optional enhancement)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Rotating skills text for Kareem profile section (Dark mode only)
document.addEventListener('DOMContentLoaded', function() {
    const skillsTexts = [
        "Cloud, Data and DevOps",
        "AWS and Azure platforms", 
        "Data Engineering and Analytics",
        "Infrastructure as Code",
        "CI/CD and Automation",
        "Scalable Cloud Solutions"
    ];
    
    let currentSkillIndex = 0;
    const rotatingSkillsElement = document.querySelector('.rotating-skills');
    
    if (rotatingSkillsElement) {
        function rotateSkills() {
            // Only rotate if in dark mode
            const currentTheme = document.documentElement.getAttribute('data-theme');
            if (currentTheme === 'dark') {
                rotatingSkillsElement.style.opacity = '0';
                
                setTimeout(() => {
                    currentSkillIndex = (currentSkillIndex + 1) % skillsTexts.length;
                    rotatingSkillsElement.textContent = skillsTexts[currentSkillIndex];
                    rotatingSkillsElement.style.opacity = '1';
                }, 300);
            }
        }
        
        // Start rotation
        setInterval(rotateSkills, 3000);
        
        // Set initial opacity and transition
        rotatingSkillsElement.style.transition = 'opacity 0.3s ease-in-out';
        rotatingSkillsElement.style.opacity = '1';
    }
});
// Sticky Theme Toggle Button Functionality
document.addEventListener('DOMContentLoaded', function() {
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    const themeIcon = document.getElementById('theme-icon');
    const themeText = document.getElementById('theme-text');
    
    // Update button appearance based on current theme
    function updateThemeButton() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        
        if (currentTheme === 'dark') {
            // In dark mode, show option to go to light
            themeIcon.className = 'theme-icon fas fa-sun';
            themeText.textContent = 'Experience Light';
        } else {
            // In light mode, show option to go to dark
            themeIcon.className = 'theme-icon fas fa-moon';
            themeText.textContent = 'Embrace the Void';
        }
    }
    
    // Smooth icon transition
    function animateIconChange(newIconClass, newText) {
        themeIcon.classList.add('rotate-out');
        
        setTimeout(() => {
            themeIcon.className = newIconClass;
            themeText.textContent = newText;
            themeIcon.classList.remove('rotate-out');
            themeIcon.classList.add('rotate-in');
            
            setTimeout(() => {
                themeIcon.classList.remove('rotate-in');
            }, 400);
        }, 200);
    }
    
    // Handle theme toggle
    themeToggleBtn.addEventListener('click', function() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        
        // Add pulse effect
        themeToggleBtn.style.animation = 'themePulse 0.6s ease-out';
        
        if (currentTheme === 'dark') {
            // Switch to light mode
            animateIconChange('theme-icon fas fa-moon', 'Embrace the Void');
            switchToOriginalLayout();
            document.documentElement.setAttribute('data-theme', 'light');
        } else {
            // Switch to dark mode
            animateIconChange('theme-icon fas fa-sun', 'Experience Light');
            switchToVideoLayout();
            document.documentElement.setAttribute('data-theme', 'dark');
        }
        
        // Scroll to top smoothly to showcase the theme transition
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        
        // Remove pulse effect
        setTimeout(() => {
            themeToggleBtn.style.animation = '';
        }, 600);
        
        // Save theme preference
        localStorage.setItem('theme', document.documentElement.getAttribute('data-theme'));
    });
    
    // Initialize button appearance
    updateThemeButton();
    
    // Add subtle floating animation on page load
    setTimeout(() => {
        themeToggleBtn.style.animation = 'themePulse 2s ease-in-out';
        setTimeout(() => {
            themeToggleBtn.style.animation = '';
        }, 2000);
    }, 3000);
});
// Smooth Hero to Cloud Section Transition
document.addEventListener('DOMContentLoaded', function() {
    const heroSection = document.getElementById('home');
    const cloudSection = document.getElementById('cloud-intro');
    
    function handleHeroCloudTransition() {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        const heroHeight = heroSection.offsetHeight;
        
        // Calculate transition progress (0 to 1)
        const transitionStart = heroHeight * 0.3; // Start transition at 30% of hero height
        const transitionEnd = heroHeight * 0.8;   // End transition at 80% of hero height
        const progress = Math.max(0, Math.min(1, (scrollY - transitionStart) / (transitionEnd - transitionStart)));
        
        // Hero fade out
        const heroOpacity = 1 - progress;
        const heroTransform = progress * -30; // Move up slightly
        heroSection.style.opacity = heroOpacity;
        heroSection.style.transform = `translateY(${heroTransform}px)`;
        
        // Cloud section fade in
        const cloudOpacity = progress;
        const cloudTransform = (1 - progress) * 50; // Move up from below
        cloudSection.style.opacity = cloudOpacity;
        cloudSection.style.transform = `translateY(${cloudTransform}px)`;
        
        // Add/remove classes for additional styling
        if (progress > 0.1) {
            heroSection.classList.add('fade-out-scroll');
            cloudSection.classList.add('fade-in-scroll');
        } else {
            heroSection.classList.remove('fade-out-scroll');
            cloudSection.classList.remove('fade-in-scroll');
        }
    }
    
    // Throttle scroll events for better performance
    let ticking = false;
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(handleHeroCloudTransition);
            ticking = true;
            setTimeout(() => { ticking = false; }, 16); // ~60fps
        }
    }
    
    // Listen for scroll events
    window.addEventListener('scroll', requestTick);
    
    // Initial call
    handleHeroCloudTransition();
});
// Clean Skills Progress Bar Animation - No Hover Effects
document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize skills progress bars with scroll animation
    function initSkillsProgress() {
        const skillItems = document.querySelectorAll('.skill-item');
        
        const skillsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const skillItem = entry.target;
                    const progressBar = skillItem.querySelector('.skill-progress');
                    const percentage = skillItem.getAttribute('data-level');
                    
                    // Animate progress bar
                    setTimeout(() => {
                        progressBar.style.width = percentage + '%';
                        
                        // Animate percentage counter
                        animateCounter(skillItem, percentage);
                    }, 200);
                    
                    // Unobserve after animation
                    skillsObserver.unobserve(skillItem);
                }
            });
        }, {
            threshold: 0.5,
            rootMargin: '0px 0px -100px 0px'
        });
        
        skillItems.forEach(item => {
            skillsObserver.observe(item);
        });
    }
    
    // Animate percentage counter
    function animateCounter(skillItem, targetPercentage) {
        const percentageElement = skillItem.querySelector('.skill-percentage');
        const startValue = 0;
        const endValue = parseInt(targetPercentage);
        const duration = 2000; // 2 seconds
        const startTime = performance.now();
        
        function updateCounter(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function for smooth animation
            const easeOutCubic = 1 - Math.pow(1 - progress, 3);
            const currentValue = Math.floor(startValue + (endValue - startValue) * easeOutCubic);
            
            percentageElement.textContent = currentValue + '%';
            
            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            } else {
                percentageElement.textContent = endValue + '%';
            }
        }
        
        requestAnimationFrame(updateCounter);
    }
    
    // Initialize skills progress bars
    initSkillsProgress();
});

