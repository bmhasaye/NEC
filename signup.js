const signupForm = document.querySelector('.signup-box form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const confirmPasswordInput = document.querySelector('#confirm-password');

signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = nameInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    // TO DO: implement registration logic here
    // For now, just alert the user details
    alert(`Name: ${name}, Email: ${email}, Password: ${password}, Confirm Password: ${confirmPassword}`);
});