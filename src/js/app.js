let toggleButton = document.querySelector('.switch');
let body = document.body;
let header = document.querySelector('header');
let seachInput = document.querySelector('.search');
let cardCircles = document.querySelectorAll('.card-circle');
let inlineCode = document.querySelectorAll('.inline-code');
let codeCpp = document.querySelector(".code-cpp");
let li1 = document.querySelectorAll(".docs-aside-right ul li");
let li2 = document.querySelectorAll(".docs-aside-left ul li");


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

    li1.forEach(function(li1) {
        li1.classList.toggle('dark-mode');
    });
    li2.forEach(function(li2) {
        li2.classList.toggle('dark-mode');
    });
});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".docs-aside-right ul li a");

// console.log(sections); // Debugging: Verify sections
// console.log(navLinks); // Debugging: Verify links

window.addEventListener("scroll", () => {
  let current = "";

  // Determine the currently active section
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 70; // Adjust for any fixed header height
    const sectionHeight = section.clientHeight;

    // Ensure only one section is "current"
    if (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionTop + sectionHeight
    ) {
      current = section.getAttribute("id");
    }
  });

  // Update the active class on links
  navLinks.forEach((link) => {
    link.classList.remove("active"); // Clear active state
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});
