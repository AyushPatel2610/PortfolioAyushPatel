// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Project Toggle Functionality
document.querySelectorAll('.project-header').forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        content.classList.toggle('active');
        header.querySelector('i').classList.toggle('active');
    });
});

// Mobile Menu Toggle (Add this new functionality)
const hamburger = document.createElement('button');
hamburger.className = 'hamburger';
hamburger.innerHTML = `
    <span class="bar"></span>
    <span class="bar"></span>
    <span class="bar"></span>
`;

const menu = document.querySelector('.menu');
hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

document.querySelector('nav').appendChild(hamburger);