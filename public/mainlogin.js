const logregBox = document.querySelector('.logreg-box');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const signUp = document.querySelector('.btn');

registerLink.addEventListener('click', () => {
    logregBox.classList.add('active');
});
loginLink.addEventListener('click', () => {
    logregBox.classList.remove('active');
});