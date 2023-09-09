const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  // as soon as we click, we want to activate the following classes
  // 1. that is going to show the X, 2. that is going to show the links
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    setTimeout(() => {
      navMenu.classList.remove("active");
    }, 500);
  })
);




document.querySelectorAll(".nav-link").forEach(n => {
  n.addEventListener("mouseover", (event) => {
    event.target.classList.add("hover-effect");
  });
  n.addEventListener("mouseout", (event) => {
    event.target.classList.remove("hover-effect");
  });
  n.addEventListener("touchstart", (event) => {
    event.target.classList.add("hover-effect");
  });
  n.addEventListener("touchend", (event) => {
    event.target.classList.remove("hover-effect");
  });
});


// Intro-Text animation =========================---------------
const texts = [
  ['a', 'Web Developer'],
  ['a', 'JAVA programmer'],
  ['a', 'Creative Designer'],
  ['into', 'UI/UX'],
  ['into', 'Open Source']
];

let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type() {
  if (count === texts.length) {
    count = 0;
  }
  currentText = texts[count][1];
  letter = currentText.slice(0, ++index);

  document.querySelector('.intro-text-2').textContent = texts[count][0];
  document.querySelector('.intro-text-3').textContent = letter;
  if (letter.length === currentText.length) {
    count++;
    index = 0;
  }
  setTimeout(type, 400);
})();



// Get the button element by its id
var buttons = document.querySelectorAll(".about-button, .projects-button");

// Define a function that can add or remove the .onHover class
function toggleHoverClass(event) {
  // Check if the event type is mouseover or mouseout
  if (event.type == "mouseover") {
    // Add the .onHover class to the button element
    this.classList.add("onHover");
  } else if (event.type == "mouseout") {
    // Remove the .onHover class from the button element
    this.classList.remove("onHover");
  }
}

// Attach the function to the button element as an event handler for mouseover and mouseout events
buttons.forEach(function(button) {
  button.addEventListener("mouseover", toggleHoverClass);
  button.addEventListener("mouseout", toggleHoverClass);
});



const text2 = document.querySelector(".text-2");



// -----------===========GLITCH EFFECT==============----------------
// function toggleGlitchEffect(event) {
//   if (event.type == "mouseover") {
//     text2.classList.add("glitch");
//     text2.classList.add("layers");
//   } else if (event.type == "mouseout") {
//     text2.classList.remove("glitch");
//     text2.classList.remove("layers");
//   }
// }

// text2.addEventListener("mouseover", toggleGlitchEffect);
// text2.addEventListener("mouseout", toggleGlitchEffect);
text2.classList.add("glitch");
text2.classList.add("paths");
text2.classList.add("layers");
