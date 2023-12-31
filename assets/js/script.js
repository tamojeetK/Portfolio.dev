// ------------------------------------------------Code for mobile view Nav menu--------------------------------------------------
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

// -----------------------------------Code for Desktop Navbar Blur filter-----------------------------------
window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("scrolled", window.scrollY > 0);
});



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



// Get the button element by its id
var buttons = document.querySelectorAll(".about-button, .projects-button, .connect-button");

function toggleHoverClass(event) {
  // Check if the event type is mouseover or mouseout
  if (event.type == "mouseover") {
    // Add the .onHover class to the button element
    this.classList.add("onHover");
    this.querySelector('.about-button a').textContent = "Know More"; // Change the text to "Check out"
    // Add GSAP animation with ease
    gsap.to(this, {
      duration: 0.5,
      scale: 1.05,
      ease: "power1.out"
    });
  } else if (event.type == "mouseout") {
    // Remove the .onHover class from the button element
    this.classList.remove("onHover");
    this.querySelector('.about-button a').textContent = "More Curious?"; // Change the text back to the original text
    // Revert GSAP animation
    gsap.to(this, {
      duration: 0.5,
      ease: "power1.out" 
    });
  }
}

// Attach the function to the button element as an event handler for mouseover and mouseout events
buttons.forEach(function (button) {
  button.addEventListener("mouseover", toggleHoverClass);
  button.addEventListener("mouseout", toggleHoverClass);
});


// -----------===========GLITCH EFFECT==============----------------
const text2 = document.querySelector(".text-2");

let animationDone = false;

// Start the animation
text2.classList.add("glitch");
text2.classList.add("paths");
text2.classList.add("layers");

// Use setTimeout to remove the classes after 4 seconds
setTimeout(function () {
  text2.classList.remove("glitch");
  text2.classList.remove("paths");
  text2.classList.remove("layers");
  animationDone = true; // Set the flag to true after the initial animation is done
}, 4000); // 6000 milliseconds = 4 seconds

function toggleGlitchEffect(event) {
  if (!animationDone) return; // If the initial animation is not done, do nothing
  if (event.type == "mouseover") {
    text2.classList.add("glitch");
    text2.classList.add("layers");
  } else if (event.type == "mouseout") {
    text2.classList.remove("glitch");
    text2.classList.remove("layers");
  }
}

text2.addEventListener("mouseover", toggleGlitchEffect);
text2.addEventListener("mouseout", toggleGlitchEffect);



// ----------------================PROJECT-HOVER-IMG-EFFECT================----------------
const projects = document.querySelectorAll(".project-title, .project-link");
const hoverImage = document.querySelector(".hover-image");

projects.forEach(project => {
  project.addEventListener("mouseenter", () => {
    let img = project.getAttribute("data-image");
    let w = project.getAttribute("data-width");
    let h = project.getAttribute("data-height");
    hoverImage.style.backgroundImage = `url(${img})`;
  });

  project.addEventListener("mouseleave", () => {
    hoverImage.style.backgroundImage = '';

  });

  window.addEventListener("mousemove", (event) => {
    hoverImage.style.left = `${event.clientX - 100}px`;
    hoverImage.style.top = `${event.clientY - 150}px`;
  });
});
