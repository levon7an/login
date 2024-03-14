const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
registerBtn.addEventListener('clik', () => {
    container.classList.add('active');
})

loginBtn.addEventListener('click', () => {
    container.classList.remove(active);
})
