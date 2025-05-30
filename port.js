// Header Scroll Effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 0);
    
    // Back to top button show/hide
    const backToTop = document.querySelector('.back-to-top');
    backToTop.classList.toggle('active', window.scrollY > 500);
});

// Mobile Menu Toggle
const menuBtn = document.querySelector('.menu-btn');
const navbar = document.querySelector('.navbar');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    navbar.classList.toggle('active');
    
    // Toggle menu button animation
    const bars = menuBtn.querySelectorAll('.bar');
    if (menuBtn.classList.contains('active')) {
        bars[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        bars[1].style.opacity = '0';
        bars[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
    } else {
        bars.forEach(bar => {
            bar.style.transform = 'rotate(0) translate(0, 0)';
            bar.style.opacity = '1';
        });
    }
});

// Close mobile menu when clicking a link
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
        menuBtn.classList.remove('active');
        navbar.classList.remove('active');
        
        // Reset menu button animation
        const bars = menuBtn.querySelectorAll('.bar');
        bars.forEach(bar => {
            bar.style.transform = 'rotate(0) translate(0, 0)';
            bar.style.opacity = '1';
        });
    });
});

// Typing Animation
const animatedText = document.querySelector('.animated-text');
if (animatedText) {
    const text = animatedText.textContent;
    animatedText.textContent = '';
    
    let i = 0;
    const typingEffect = setInterval(() => {
        if (i < text.length) {
            animatedText.textContent += text.charAt(i);
            i++;
        } else {
            clearInterval(typingEffect);
            animatedText.style.borderRight = 'none';
        }
    }, 100);
}

// Skill Animation
const skillPercents = document.querySelectorAll('.skill-per');
skillPercents.forEach(skill => {
    const percent = skill.getAttribute('per');
    skill.style.width = percent;
    
    // Animate skill bar
    setTimeout(() => {
        skill.style.opacity = '1';
    }, 500);
});

// Portfolio Filter (if you add filter buttons later)
// const filterButtons = document.querySelectorAll(‘.portfolio-filter button’);
// filterButtons.forEach(button => {
//     button.addEventListener(‘click’, () => {
//         // Filter logic would go here
//     });
// });

// Testimonial Slider
let currentSlide = 0;
const slides = document.querySelectorAll('.testimonial-slide');
const dots = document.querySelectorAll('.dot');

function showSlide(n) {
    // Reset all slides and dots
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    // Handle wrap-around for slides
    if (n >= slides.length) currentSlide = 0;
    if (n < 0) currentSlide = slides.length - 1;
    
    // Show current slide and dot
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

// Next/previous controls
document.querySelector('.slider-next').addEventListener('click', () => {
    currentSlide++;
    showSlide(currentSlide);
});

document.querySelector('.slider-prev').addEventListener('click', () => {
    currentSlide--;
    showSlide(currentSlide);
});

// Dot controls
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlide = index;
        showSlide(currentSlide);
    });
});

// Auto-advance slides
setInterval(() => {
    currentSlide++;
    showSlide(currentSlide);
}, 5000);

// Initialize slider
showSlide(currentSlide);

// Form Submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', e => {
        e.preventDefault();
        
        // Get form values
        const formData = new FormData(contactForm);
        const data = object.fromEntries(formData);
        
        // Here you would typically send the data to a server
        console.log('Form submitted:', data);
        
        // Show success message
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });
}

// Animate elements on scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.service-box, .portfolio-box, .about-img, .about-text');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// Set initial state for animated elements
document.querySelectorAll('.service-box, .portfolio-box, .about-img, .about-text').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
});

// Run animation check on scroll and load
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Back to top button functionality
document.querySelector('.back-to-top').addEventListener('click', e => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

