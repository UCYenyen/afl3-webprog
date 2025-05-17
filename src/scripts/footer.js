gsap.registerPlugin(ScrollTrigger);

gsap.from(".footer-icon", {
    scrollTrigger: {
        trigger: "#footer",
        start: "top 80%",
        toggleActions: "play reverse play reverse"
    },
    opacity: 0,
    y: 40,
    duration: 0.7,
    stagger: 0.15,
    ease: "power2.out"
});

gsap.from(".footer-copyright", {
    scrollTrigger: {
        trigger: "#footer",
        toggleActions: "play reverse play reverse"
    },
    opacity: 0,
    duration: 0.8,
    delay: 0.5,
    ease: "power2.out"
});