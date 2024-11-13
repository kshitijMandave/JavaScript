const passwordInput = document.getElementById('password');
const toggleButton = document.getElementById('toggleButton');

toggleButton.addEventListener('click', () => {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleButton.textContent = 'Hide Password';
    } else {
        passwordInput.type = 'password';
        toggleButton.textContent = 'Show Password';
    }
});



