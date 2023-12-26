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

gsap.from(".nav-container .nav-branding, .nav-menu", {
    y: -100,
    delay: 0.2,
    duration: 1,
    opacity: 0,
    stagger: 0.3
})

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

// --------------------------------ABOUT-SECTION--------------------------------
// *************Main Code for front-text animations************* 

let backTextSections = ['#about', '#projects', '#skills', '#connect'];

backTextSections.forEach(section => {
    let sectionControl = gsap.timeline();

    sectionControl.fromTo(`${section} .heading-container .back-text`,
        {   // From
            x: -400,
            opacity: 0
        },
        {   // To
            scrollTrigger: {
                trigger: `${section} .back-text`,
                start: "-150% center",
                end: "bottom center",
                scrub: 0.8,
                // markers: true,
                toggleActions: "play reverse play reverse"
            },
            x: '-1%',
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
    .fromTo("#about .about-button",
        {   // From
            opacity: 0
        },
        {   // To
            scrollTrigger: {
                trigger: ".about .about-para",
                start: "10% center",
                end: "20% center",
                scrub: 1,
            },
            duration: 2,
            opacity: 1
        }
    );
// ------------------------------------------------------------------------------------------------

