Splitting();
gsap.registerPlugin(ScrollTrigger);

const t3 = gsap.timeline({defaults : {ease: "SlowMo.easeOut"}});
t3.to(".front-text .word", {y:'0%', duration:0.7, delay:0.2, stagger:0.4});
