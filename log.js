// Get the login form elements
const loginForm = document.querySelector('form');
const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');
const loginButton = document.querySelector('#login-btn');

// Function to validate login credentials
function validateLogin(username, password) {
    // For demonstration purposes, assume the username and password are correct
    // In a real-world scenario, you would validate the credentials against a database or API
    if (username === 'admin' && password === 'password') {
        return true;
    } else {
        return false;
    }
}

// Add event listener to login button
loginButton.addEventListener('click', (e) => {
    e.preventDefault();
    const username = usernameInput.value;
    const password = passwordInput.value;

    // Validate login credentials
    if (validateLogin(username, password)) {
        // Login successful, redirect to home page
        window.location.href = 'index.html';
    } else {
        alert('Invalid username or password!');
    }
});