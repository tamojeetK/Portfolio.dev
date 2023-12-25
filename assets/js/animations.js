// ------------===========SCROLL-DOWN-BUTTON===========-----------
var t1 = gsap.timeline();
t1.to(".scroll-down-button path", {
  y: -15,
  repeat: -1,
  duration: 1,
  yoyo: true,
  ease: "power1.inOut"
})

var t2 = gsap.timeline({ repeat: -1 });

t2.to(".scroll-down-button path:nth-child(1)", {
  duration: 1,
  stroke: "#2419A1",
  repeat: 1,
  yoyo: true
})
  .to(".scroll-down-button path:nth-child(2)", {
    duration: 0.5,
    stroke: "#5329FC",
    repeat: 1,
    yoyo: true
  }, "-=1")


// ------------===========SPLIT-TEXT-INTRO==========-----------
// A function to split a text into multiple lines and wrap each line in a span element
function splitText (text) {
  // Split the text by line breaks
  let lines = text.split (/\n/);
  // Create an empty string to store the result
  let result = "";
  // Loop through each line
  for (let line of lines) {
    // Wrap the line in a span element with a class name 'line'
    result += `<span class='line'>${line}</span>\n`;
  }
  // Return the result
  return result;
}


// ------------==============ABOUT-PARA==============------------
// Get the element with the class name 'about-para'
let element = document.querySelector (".about-para");
// Get the original text of the element
let originalText = element.textContent;
// Split the text into multiple lines and wrap each line in a span element
let newText = splitText (originalText);
// Replace the original text with the new text
element.innerHTML = newText;

// Get all the span elements with the class name 'line'
let spans = document.querySelectorAll (".line");
// Loop through each span element
for (let span of spans) {
  // Apply baffle.js to each span element
  let b = baffle (span);
  b.set ( {
    characters: "░▒█ ░▒█>▓ ▒<░█▒ >!@#$%^&*()vc </▓░ ▒▒█ ▓░▒░ ▒▒▓█",
    speed: 80
  });
  b.start ();
  b.reveal (3000);
}


// ------------==============LENIS SCROLL==============------------
const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)