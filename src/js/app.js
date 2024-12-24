let toggleButton = document.querySelector('.switch');
let body = document.body;
let header = document.querySelector('header');

toggleButton.addEventListener('click', function() {
    toggleButton.classList.toggle('active');
    body.classList.toggle('dark-mode');
    header.classList.toggle('dark-mode')
});