var t1 = gsap.timeline();
t1.to(".scroll-down-button path",{
    y:-15,
    repeat: -1,
    duration: 1,
    yoyo: true,
    ease: "power1.inOut"
})

var t2 = gsap.timeline({repeat: -1});

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

// var scrollDownButton = document.querySelector('.scroll-down-button');
// var t3 = gsap.timeline({paused: true});
// t3.to(scrollDownButton, {
//   duration: 1,
//   opacity: 0
// });

// window.addEventListener('scroll', function() {
//   if (window.scrollY > 0) {
//     t3.play();
//   } else {
//     t3.reverse();
//   }
// });







                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            