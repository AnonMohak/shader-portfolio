const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

const toggleTheme = () => {
    body.classList.toggle('dark-mode');
    themeToggle.textContent = body.classList.contains('dark-mode') ? '☀️' : '🌙';
    localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
};

const loadTheme = () => {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
        body.classList.add('dark-mode');
        themeToggle.textContent = '☀️';
    }
};

const smoothScroll = (e) => {
    if (e.target.hash) {
        e.preventDefault();
        const targetElement = document.querySelector(e.target.hash);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    }
};

const handleContactForm = (e) => {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value;
    const message = e.target.querySelector('textarea').value;
    
    if (email && message) {
        console.log('Form submitted:', { email, message });
        e.target.reset();
    }
};

document.addEventListener('DOMContentLoaded', () => {
    loadTheme();
    themeToggle.addEventListener('click', toggleTheme);
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', smoothScroll);
    });
    document.getElementById('contact-form').addEventListener('submit', handleContactForm);
});


const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

const ctaButton = document.querySelector('.cta-button');
ctaButton.addEventListener('click', () => {
    document.querySelector('#contact').scrollIntoView({
        behavior: 'smooth'
    });
}); 