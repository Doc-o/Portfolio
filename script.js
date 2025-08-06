// Enhanced loading screen with smooth animations
window.addEventListener('load', () => {
  const loading = document.getElementById('loading');
  if (loading) {
    setTimeout(() => {
      loading.classList.add('hidden');
      setTimeout(() => {
        loading.style.display = 'none';
        // Trigger initial animations after loading
        triggerInitialAnimations();
      }, 500);
    }, 1000);
  }
});

// Initial page load animations
function triggerInitialAnimations() {
  // Hero section animations
  const heroContent = document.querySelector('.hero-content');
  const profileImg = document.querySelector('.profile-img');
  const heroText = document.querySelector('.hero h1');
  const heroSubtext = document.querySelector('.hero h2');
  const heroDesc = document.querySelector('.hero p');

  if (heroContent) {
    setTimeout(() => {
      if (profileImg) profileImg.classList.add('scale-in');
    }, 200);
    
    setTimeout(() => {
      if (heroText) heroText.classList.add('fade-in-up');
    }, 400);
    
    setTimeout(() => {
      if (heroSubtext) heroSubtext.classList.add('fade-in-up');
    }, 600);
    
    setTimeout(() => {
      if (heroDesc) heroDesc.classList.add('fade-in-up');
    }, 800);
  }
}

// Mobile menu toggle with enhanced animations
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  // Add animation to menu items
  const menuItems = navLinks.querySelectorAll('li');
  menuItems.forEach((item, index) => {
    if (navLinks.classList.contains('open')) {
      item.style.animation = `slideInRight 0.3s ease-out ${index * 0.1}s forwards`;
    } else {
      item.style.animation = 'none';
    }
  });
});

// Close menu on link click (mobile)
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});

// Enhanced scroll-triggered animations with IntersectionObserver
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px"
};

// Section animations
const sections = document.querySelectorAll('.section');
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      
      // Trigger staggered animations for child elements
      const animatedElements = entry.target.querySelectorAll('.fade-in, .project-card, .service-card, .exp-card, .skill-category');
      animatedElements.forEach((el, index) => {
        setTimeout(() => {
          el.classList.add('visible');
        }, index * 100);
      });
    }
  });
}, observerOptions);

sections.forEach(section => {
  sectionObserver.observe(section);
});

// Enhanced fade-in animations
const faders = document.querySelectorAll('.fade-in');
const appearOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    appearOnScroll.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// Enhanced typing effect for hero tagline
const taglines = [
  "Protecting the digital world with innovative cybersecurity solutions.",
  "Cybersecurity Enthusiast | Ethical Hacker | Analyst",
  "Turning passion into protection for the digital age."
];
let taglineIndex = 0, charIndex = 0, typingTimeout;
const typedText = document.getElementById('typed-text');

function typeTagline() {
  if (!typedText) return;
  const tagline = taglines[taglineIndex];
  if (charIndex < tagline.length) {
    typedText.textContent = tagline.slice(0, charIndex + 1);
    charIndex++;
    typingTimeout = setTimeout(typeTagline, 40);
  } else {
    setTimeout(() => {
      charIndex = 0;
      taglineIndex = (taglineIndex + 1) % taglines.length;
      typedText.textContent = '';
      setTimeout(typeTagline, 600);
    }, 1800);
  }
}

// Start typing effect only if element exists
if (typedText) {
  setTimeout(typeTagline, 1500); // Delay start for better UX
}

// Enhanced animated skill bars with smooth transitions
function animateSkillBars() {
  document.querySelectorAll('.skill-bar').forEach((bar, index) => {
    const fill = bar.querySelector('.skill-bar-fill');
    const percent = bar.getAttribute('data-skill');
    if (fill && percent) {
      setTimeout(() => {
        fill.style.width = percent + '%';
      }, index * 200); // Staggered animation
    }
  });
}

// Observe both old and new skill sections
const skillSections = document.querySelectorAll('.skills-list, .skills-section');
skillSections.forEach(section => {
  if (section) {
    const skillObserver = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateSkillBars();
          obs.disconnect();
        }
      });
    }, { threshold: 0.3 });
    skillObserver.observe(section);
  }
});

// Enhanced animated cyber grid background
const cyberBg = document.getElementById('cyber-bg');
if (cyberBg) {
  const canvas = document.createElement('canvas');
  cyberBg.appendChild(canvas);
  const ctx = canvas.getContext('2d');
  
  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);
  
  // Enhanced grid params
  const gridSize = 60, pointRadius = 2, speed = 0.2;
  let t = 0;
  
  function drawGrid() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.save();
    ctx.globalAlpha = 0.18;
    
    for (let y = 0; y < canvas.height; y += gridSize) {
      for (let x = 0; x < canvas.width; x += gridSize) {
        // Enhanced animated points
        const dx = Math.sin((t + x) * 0.01) * 4;
        const dy = Math.cos((t + y) * 0.01) * 4;
        
        ctx.beginPath();
        ctx.arc(x+dx, y+dy, pointRadius, 0, 2*Math.PI);
        ctx.fillStyle = '#00ADB5';
        ctx.shadowColor = '#00ADB5';
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
        
        // Draw enhanced lines
        if (x + gridSize < canvas.width) {
          ctx.beginPath();
          ctx.moveTo(x+dx, y+dy);
          ctx.lineTo(x+gridSize+Math.sin((t + x + gridSize) * 0.01) * 4, y+dy);
          ctx.strokeStyle = '#00ADB544';
          ctx.lineWidth = 1;
          ctx.stroke();
        }
        if (y + gridSize < canvas.height) {
          ctx.beginPath();
          ctx.moveTo(x+dx, y+dy);
          ctx.lineTo(x+dx, y+gridSize+Math.cos((t + y + gridSize) * 0.01) * 4);
          ctx.strokeStyle = '#00ADB544';
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    }
    ctx.restore();
    t += speed;
    requestAnimationFrame(drawGrid);
  }
  drawGrid();
}

// Feedback form handling
const feedbackForm = document.getElementById('feedback-form');
if (feedbackForm) {
  feedbackForm.addEventListener('submit', function(e) {
    const submitBtn = this.querySelector('.submit-btn');
    const btnText = submitBtn.querySelector('.btn-text');
    const btnLoading = submitBtn.querySelector('.btn-loading');
    
    // Show loading state
    btnText.style.display = 'none';
    btnLoading.style.display = 'inline';
    submitBtn.disabled = true;
    
    // FormSubmit.co will handle the submission and redirect
    // The form will submit normally and redirect to LinkedIn as configured
  });
}

// Enhanced scroll to top functionality
const scrollTopBtn = document.getElementById('scroll-top');
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    scrollTopBtn.classList.add('visible');
  } else {
    scrollTopBtn.classList.remove('visible');
  }
});

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Enhanced hover effects for interactive elements
document.querySelectorAll('.project-card, .service-card, .exp-card, .skill-category').forEach(card => {
  card.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-8px) scale(1.02)';
  });
  
  card.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0) scale(1)';
  });
});

// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Add CSS classes for enhanced animations
document.addEventListener('DOMContentLoaded', () => {
  // Add animation classes to elements
  const animatedElements = document.querySelectorAll('.project-card, .service-card, .exp-card, .skill-category');
  animatedElements.forEach((el, index) => {
    el.classList.add('fade-in');
    el.style.animationDelay = `${index * 0.1}s`;
  });
});