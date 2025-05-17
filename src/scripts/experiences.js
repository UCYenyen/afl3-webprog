// Set initial state immediately so elements are hidden before DOM is painted
gsap.set("nav", { opacity: 0 });
gsap.set(".texts-left h1", { y: 50, opacity: 0 });
gsap.set(".card", { y: 100, opacity: 0 });
gsap.set(".squares-bg", { opacity: 0 , scale: 1.2 });

setupCertificateAnimations();
// Add scroll reveal animations for certificates
function setupCertificateAnimations() {
    // Set initial state for all certificate images
    gsap.set(".grid div", { autoAlpha: 0, y: 80 });

    // Animate grid certificates with fade in/out on scroll
    document.querySelectorAll(".grid div").forEach((img) => {
        gsap.to(img, {
            scrollTrigger: {
                trigger: img,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play reverse play reverse",
                scrub: false,
                markers: false
            },
            autoAlpha: 1,
            y: 0,
            duration: 0.75,
            ease: "power3.out"
        });
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const heroTl = gsap.timeline();

    heroTl
        .to("nav", { 
            opacity: 1, 
            duration: 1.,
            ease: "power2.out" 
        })
        .to(".squares-bg", { 
            opacity: 0.8, 
            scale: 1, 
            duration: 0.7, 
            ease: "power2.out" 
        }, "-=0.3")
        .to(".card", { 
            y: 0, 
            opacity: 1, 
            duration: 0.7, 
            ease: "power2.out" 
        }, "-=0.5")
        .to(".texts-left h1", { 
            y: 0, 
            opacity: 1, 
            duration: 0.6, 
            stagger: 0.07, 
            ease: "power2.out" 
        }, "-=0.4")
});