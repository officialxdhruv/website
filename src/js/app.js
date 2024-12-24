let toggleButton = document.querySelector('.switch');
let body = document.body;
let header = document.querySelector('header');
let seachInput = document.querySelector('.search');

toggleButton.addEventListener('click', function() {
    toggleButton.classList.toggle('active');
    body.classList.toggle('dark-mode');
    header.classList.toggle('dark-mode');
    seachInput.classList.toggle('dark-mode');
});