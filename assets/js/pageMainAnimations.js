Splitting();
gsap.registerPlugin(ScrollTrigger);


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

var t1 = gsap.timeline();
t1.from("#intro .landing-frame ", {
    y: -200,
    duration: 1,
    delay: 0.5,
    opacity: 0,
    stagger: 0.5
})
    .from("#intro .intro-line", {
        y: 800,
        duration: 1,
        delay: 0.5,
        opacity: 0,
        stagger: 0.5
    })
    .from("#intro .tag-line", {
        right: -200,
        duration: 1,
        delay: 0.5,
        opacity: 0,
        stagger: 0.5
    })

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
    
    // Apply the animation to all buttons
    buttonAnimation("#about .about-button", ".about .about-para");
    buttonAnimation(".projects-button", ".projects .project-wrapper");
    buttonAnimation(".connect-button", ".connect-hand2");
    
// --------------------------------ABOUT-SECTION--------------------------------
// *************Main Code for front-text animations************* 

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

