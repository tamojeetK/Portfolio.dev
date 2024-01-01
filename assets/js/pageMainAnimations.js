Splitting();
gsap.registerPlugin(ScrollTrigger);

paceOptions = {
    ajax: true, //checks AJAX requests 
    document: true, //document is ready
  }
  Pace.on('done', () => {
    gsap.timeline()
        .add('p')
        .to('.pace', {
            transform: 'scale(10,1)',
            duration: 4
        }, "+=.2")
        .to('.pace', {
            duration: 1,
            height: "100%",
            opacity: 0
        }, "-=2.5")
        .to('.loading-text', {
            delay: .2,
            duration: 3,
            opacity: -1,
            yPercent: -400,
            ease: "BezierEasing(0.19, 1,0.22,1)"
        }, 'p')
        .to('#main', {
            // y: -1,
            opacity: 1,
            ease: Expo.easeInOut,
        }, "-=2.5");
  });
  window.onload = function () {
    Pace.on('done', function () {
        // Your GSAP animations go here
        headerAnimation()
        logoAnimation();
        introContainerAnimation();
        landingFrameAnimation()
    });
  }
  
  

// ------------------------------INTRO-PAGE Animations------------------------------

function headerAnimation() {
    gsap.fromTo("#header .nav-item",
        {
            y: -100,
            opacity: 0,
            filter: "blur(50px)",

        },
        {
            y: 0,
            duration: 0.8,
            stagger: 0.2,
            filter: "blur(0px)",
            delay: 2,
            opacity: 1,
            ease: "SlowMo.easeinOut"
        }
    );

}
// headerAnimation()
// ---------------Logo Animation---------------
function logoAnimation() {
    gsap.from("#header .nav-branding", {
        // y: -100,
        // scale: 0,
        filter: "blur(40px)",
        duration: 0.4,
        delay: 2.2,
        opacity: 1
    })
}
// logoAnimation();

// --------------------------------Intro-container Animation--------------------------------
let introSet = gsap.timeline();
function introContainerAnimation() {
    introSet.from("#intro .landing-frame h2, #intro .landing-frame .text-1, #intro .landing-frame .text-2", {
        x: -100,
        duration: 1,
        filter: "blur(40px)",
        stagger: 0.3, // Stagger time
        delay: 2, // Add delay equal to the stagger time of the previous animation
        opacity: -5
    });
    introSet.from("#intro .intro-line", {
        duration: 1,
        opacity: -5,
        delay: 1 // Add delay equal to the stagger time of the previous animation
    })
    introSet.from("#intro .landing-frame .text-2-card", {
        // scale: 0,
        duration: 1,
        stagger: 0.1, // Stagger time
        transformOrigin: "center center",
        opacity: 0,
        // filter: "blur(80px)",
        delay: -2 // Add delay equal to the stagger time of the previous animation
    });

    let imgAnimate = gsap.timeline();

    if (window.matchMedia("(max-width: 767px)").matches) {
        // The viewport is less than 767 pixels wide
        imgAnimate.from("#intro .intro-img", {
            opacity: 0,
            filter: "hue-rotate(80deg)",
            duration: 5,
            delay: 2,
        })
            .from("#intro .intro-img", {
                y: -20,
                repeat: -1,
                duration: 2.5,
                yoyo: true,
                ease: "power1.inOut"
            });
        imgAnimate.from("#intro .intro-img.coding", {
            // filter: "hue-rotate(100deg)",
            duration: 5,
            delay: 2,
        });
    } else {
        imgAnimate.from("#intro .intro-img", {
            opacity: 0,
            filter: "hue-rotate(80deg)",
            duration: 5,
            delay: 2,

        })
            .from("#intro .intro-img", {
                y: -200,
                repeat: -1,
                duration: 2.5,
                yoyo: true,
                delay: 1,
                ease: "power1.inOut"
            });
        imgAnimate.from("#intro .intro-img.coding", {
            // filter: "hue-rotate(80deg)",
            duration: 5,
            delay: 1,
        })
    }




    gsap.from("#intro .tag-line .word .char", {
        // delay: 0.4,
        transformOrigin: "top bottom",
        duration: 1,
        stagger: 0.4,
        opacity: -1,
        // filter: "blur(40px)",
        filter: "hue-rotate(80deg)",
        ease: "SlowMo.easeinOut",

        delay:2 // Add delay equal to the stagger time of the previous animation
    })
    gsap.from("#intro .scroll-down-button", {
        duration: 2,
        delay: 2,
        filter: "blur(40px)",
        scale: 0,
        opacity: 0
    })
}
// introContainerAnimation();



function landingFrameAnimation() {
    gsap.from("#intro p span", {
        duration: 1,
        delay: 0.2,
        opacity: 0,
        filter: "blur(40px)",

        stagger: 0.06,
        ease: "power1.inOut"
    })


}
// landingFrameAnimation()


// ------------------------------Main Code for front-text animations------------------------------ 
const sections = ['.about', '.projects', '.skills', '.connect'];

const t3 = gsap.timeline({
    defaults: { ease: "SlowMo.easeinOut" }
});

sections.forEach(section => {
    t3.fromTo(`${section} .front-text .word`,
        {   // From
            y: '100%',
            opacity: 0
        },
        {   // To
            y: '0%',
            duration: 0.4,
            delay: 0.2,
            stagger: 0.2,
            opacity: 1,
            scrollTrigger: {
                trigger: section, // Trigger is the section itself
                start: "top center",
                end: "20% center",
                // markers: true,
                scrub: 1
            }
        }
    );
});

// ------------------------------------------------------------------------------------

// Here need to write GSAp code for Navbar and Landing


function buttonAnimation(buttonSelector, triggerSelector) {
    gsap.fromTo(buttonSelector,
        {   // From
            opacity: 0
        },
        {   // To
            scrollTrigger: {
                trigger: triggerSelector,
                start: "10% center",
                end: "20% center",
                // markers: true,
                scrub: 1,
            },
            delay: 0.8,
            stagger: 0.5,
            scrub: 0.9,
            duration: 4,
            opacity: 1
        }
    );
}

// Applying the animation to all buttons
buttonAnimation("#about .about-button", ".about .about-para");
buttonAnimation(".projects-button", ".projects .project-wrapper");
buttonAnimation(".connect-button", ".connect-hand2");

// --------------------------------ABOUT-SECTION--------------------------------
// *************Main Code for back-text animations************* 

let backTextSections = ['.about', '.projects', '.skills', '.connect'];

backTextSections.forEach(section => {
    let sectionControl = gsap.timeline();

    // let originalX = parseFloat(window.getComputedStyle(document.querySelector(`${section} .back-text`)).getPropertyValue('transform').split(',')[4].trim());
    gsap.set(`${section} .back-text`, { x: -400 }); // Set initial position
    sectionControl.fromTo(`${section} .back-text`,
        {   // From
            opacity: 0
        },
        {   // To
            scrollTrigger: {
                trigger: `${section} .back-text`,
                start: "-150% center",
                end: "bottom center",
                scrub: 0.8,
                toggleActions: "play reverse play reverse"
            },
            x: "-1%", // Animate to original position
            duration: 2,
            opacity: 0.15
        }
    );
});
// ***************************************************************
let aboutSectionControl = gsap.timeline();

aboutSectionControl
    .fromTo("#about .about-image",
        {   // From
            opacity: 0
        },
        {   // To
            scrollTrigger: {
                trigger: ".about .about-img",
                start: "top center",
                end: "top center",
                // markers: true,
                scrub: 1,
            },
            duration: 2,
            opacity: 1
        }
    )

// ------------------------------------------------------------------------------------------------

// --------------------------------PROJECTS-SECTION--------------------------------

function animateProjectItems() {
    let scrollTriggerSettings = {
        trigger: "#projects .project-wrapper",
        start: "-10% center",
        end: "20% center",
        // markers: true,
        scrub: 2,
    };
    gsap.fromTo("#projects .project-item a",
        {   // From
            opacity: 0
        },
        {   // To
            scrollTrigger: scrollTriggerSettings,
            duration: 2,
            delay: 0.6,
            opacity: 1
        }
    )
}
animateProjectItems();


function animateArrow() {
    let scrollTriggerSettings = {
        trigger: "#projects .project-wrapper",
        start: "-10% center",
        end: "20% center",
        // markers: true,
        scrub: 5
    };

    gsap.fromTo("#projects .project-item .arrow",
        {
            x: -500,
        },
        {
            scrollTrigger: scrollTriggerSettings,
            x: 0,
            duration: 2,
            stagger: 0.6,
            delay: 0.6,
            opacity: 1,
            ease: "SlowMo.easeinOut"
        }
    );
}
animateArrow();

// ------------------------------------------------------------------------------------------------

// --------------------------------SKILLS-SECTION--------------------------------
function animateSkillsHeader() {
    let scrollTriggerSettings = {
        trigger: "#skills .skills-wrapper",
        start: "-10% center",
        end: "20% center",
        // markers: true,
        scrub: 2,
    };
    gsap.fromTo("#skills .skills-heading",
        {   // From
            opacity: 0
        },
        {   // To
            scrollTrigger: scrollTriggerSettings,
            duration: 2,
            stagger: 1,
            delay: 0.6,
            opacity: 1
        }
    )
}
animateSkillsHeader();

function animateSkillCards() {
    let scrollTriggerSettings = {
        trigger: "#skills .skills-wrapper",
        start: "-10% center",
        end: "30% center",
        // markers: true,
        scrub: 6
    };

    gsap.fromTo("#skills .card-set .cards",
        {
            x: -100,
            opacity: 0
        },
        {
            scrollTrigger: scrollTriggerSettings,
            x: 0,
            duration: 2,
            stagger: 1,
            delay: 0.4,
            opacity: 1,
            ease: "SlowMo.easeinOut"
        }
    );
}
animateSkillCards();

// --------------------------------CONNECT-SECTION--------------------------------
function animateConnectHands() {
    ScrollTrigger.matchMedia({
        "(min-width: 1024px)": function () {
            gsap.fromTo("#connect .connect-hand1",
                {   // From
                    x: "-100vw"
                },
                {   // To
                    scrollTrigger: {
                        trigger: ".connect .heading-container",
                        start: "top center",
                        end: "bottom center",
                        scrub: 2,
                        // markers: true,
                        toggleActions: "play reverse play reverse"
                    },
                    x: "0%", // Animate to original position
                    duration: 2,
                    delay: 0.6
                });

            gsap.fromTo("#connect .connect-hand2",
                {   // From
                    x: "100vw"
                },
                {   // To
                    scrollTrigger: {
                        trigger: ".connect .heading-container",
                        start: "top center",
                        end: "bottom center",
                        scrub: 2,
                        // markers: true,
                        toggleActions: "play reverse play reverse"
                    },
                    x: '190%', // Animate to original position
                    duration: 4,
                    delay: 0.6
                });
        }
    });
}
animateConnectHands();

function animateConnectHandsMoBL() {
    ScrollTrigger.matchMedia({
        "(max-width: 767px)": function () {
            gsap.fromTo("#connect .connect-hand1",
                {   // From
                    x: "-100vw",
                    y: "100vh"
                },
                {   // To
                    scrollTrigger: {
                        trigger: ".connect .heading-container",
                        start: "top center",
                        end: "180vw center",
                        scrub: 2,
                        // markers: true,
                        toggleActions: "play reverse play reverse"
                    },
                    x: "0%",
                    y: "0%",
                    stagger: 0.4,
                    duration: 2,
                    delay: 0.6
                });

            gsap.fromTo("#connect .connect-hand2",
                {   // From
                    x: "100vw",
                    y: "-100vh"
                },
                {   // To
                    scrollTrigger: {
                        trigger: ".connect .heading-container",
                        start: "top center",
                        end: "bottom center",
                        scrub: 2,
                        // markers: true,
                        toggleActions: "play reverse play reverse"
                    },
                    x: '-5%', // Animate to original position
                    y: '0%', // Animate to original position
                    duration: 4,
                    delay: 0.6
                });
        }
    });
}
animateConnectHandsMoBL();

// -------------------------------------------------------------------
// Intro-Text animation =========================---------------
const texts = ['Web Developer', 'JAVA Developer', 'UI / UX', 'Creative Designer', '3D Designing', 'Open Source'];
let index = 0;

const t13 = gsap.timeline({
    defaults: { ease: "SlowMo.easeinOut" },
    repeat: -1, // This will make the timeline repeat indefinitely
    onRepeat: function () {
        index = (index + 1) % texts.length; // This will cycle through the texts array
    }
});

t13.to('.intro-text-3', {
    duration: 1,
    onComplete: function () {
        document.querySelector('.intro-text-3').textContent = texts[index]; // This will change the text
        if (texts[index] === '3D Designing' || texts[index] === 'Open Source' || texts[index] === 'UI / UX') {
            document.querySelector('.intro-text-2').textContent = ' into ';
        } else {
            document.querySelector('.intro-text-2').textContent = ' a ';
        }
    }
})
    .fromTo('.intro-text-3, .intro-text-2',
        {   // From
            y: '100%',
            opacity: 0,

        },
        {   // To
            y: '0%',
            duration: 3,
            // delay: 0.3,
            stagger: 0.6,
            opacity: 1,
            ease: "power1.inOut"
        }
    );
