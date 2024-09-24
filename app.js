// Mobile Menu Toggle
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

// Initialize Sign Up Counter
const initializeSignUpCounter = () => {
    let signUpCount = localStorage.getItem('signupCount') || 0;
    const counter = document.getElementById('signup-counter');
    if (counter) {
        counter.textContent = `Total Sign Ups: ${signUpCount}`;
    }
};

initializeSignUpCounter();

// Modal Open and Close
const modal = document.getElementById('email-modal');
const openBtn = document.querySelector('.main-btn');
const closeBtn = document.querySelector('.close-btn');
const signUpNavBtn = document.querySelector('.nav-links-btn'); 

openBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Open the signup modal when the Sign Up button in the navbar is clicked
signUpNavBtn.addEventListener('click', (e) => {
    e.preventDefault();
    modal.style.display = 'block';
});

// Handle form submission
document.getElementById('form').addEventListener('submit', function (e) {
    e.preventDefault();  // Prevent form submission for validation
    let valid = true;

    // Clear previous error messages
    document.querySelectorAll('.error-message').forEach(el => el.style.display = 'none');

    // Name validation
    const name = document.getElementById('name').value;
    if (name.trim() === "") {
        document.getElementById('nameError').style.display = 'block';
        valid = false;
    }

    // Email validation
    const email = document.getElementById('email').value;
    const emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').style.display = 'block';
        valid = false;
    }

    // Password validation
    const password = document.getElementById('password').value;
    if (password.length < 8) {
        document.getElementById('passwordError').style.display = 'block';
        valid = false;
    }

    // Confirm Password validation
    const confirmPassword = document.getElementById('password-confirm').value;
    if (confirmPassword !== password) {
        document.getElementById('confirmPasswordError').style.display = 'block';
        valid = false;
    }

    // If form is valid, allow submission
    if (valid) {
        incrementSignupCounter();  // Increment the counter

        // Show success message
        alert(`Form submitted successfully! Total signups: ${localStorage.getItem('signupCount')}`);

        // Delay redirect by 3 seconds (3000 milliseconds)
        setTimeout(function() {
            window.location.href = 'index.html';  // Redirect to the home page after 3 seconds
        }, 3000);
    }
});

// Increment signup counter
function incrementSignupCounter() {
    let count = parseInt(localStorage.getItem('signupCount')) || 0;
    count++;
    localStorage.setItem('signupCount', count);
    initializeSignUpCounter(); // Update counter display immediately
}
