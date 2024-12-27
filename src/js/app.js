let toggleButton = document.querySelector('.switch');
let body = document.body;
let header = document.querySelector('header');
let seachInput = document.querySelector('.search');
let cardCircles = document.querySelectorAll('.card-circle');
let inlineCode = document.querySelectorAll('.inline-code');
let codeCpp = document.querySelector(".code-cpp")


toggleButton.addEventListener('click', function() {
    toggleButton.classList.toggle('active');
    body.classList.toggle('dark-mode');
    header.classList.toggle('dark-mode');
    seachInput.classList.toggle('dark-mode');
    cardCircles.forEach(function(cardCircle) {
        cardCircle.classList.toggle('dark-mode');
    });
    inlineCode.forEach(function(inlineCode) {
        inlineCode.classList.toggle('dark-mode');
    });
    codeCpp.classList.toggle('dark-mode');
});