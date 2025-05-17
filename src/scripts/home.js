gsap.set(".navbar", { autoAlpha: 0 });
gsap.set(".texts-left h1", { y: 50, autoAlpha: 0 });
gsap.set(".card", { y: 100, autoAlpha: 0 });
gsap.set(".skillset img", { y: 30, autoAlpha: 0 });
gsap.set(".squares-bg", { autoAlpha: 0 , scale: 1.2 });

document.addEventListener("DOMContentLoaded", () => {
    const heroTl = gsap.timeline();

    heroTl
        .to(".navbar", { 
            autoAlpha: 1, 
            duration: 1.,
            ease: "power2.out" 
        })
        .to(".squares-bg", { 
            autoAlpha: 0.8, 
            scale: 1, 
            duration: 0.7, 
            ease: "power2.out" 
        }, "-=0.3")
        .to(".card", { 
            y: 0, 
            autoAlpha: 1, 
            duration: 0.7, 
            ease: "power2.out" 
        }, "-=0.5")
        .to(".texts-left h1", { 
            y: 0, 
            autoAlpha: 1, 
            duration: 0.6, 
            stagger: 0.07, 
            ease: "power2.out" 
        }, "-=0.4")
        .to(".skillset img", { 
            y: 0, 
            autoAlpha: 1, 
            duration: 0.5, 
            stagger: 0.05, 
            ease: "power2.out" 
        }, "-=0.4");
});

gsap.registerPlugin(ScrollTrigger);

// Set up scroll reveal animations
function setupScrollReveal() {
    // Projects section
    gsap.from("#projects h1", {
        scrollTrigger: {
            trigger: "#projects",
            start: "top 80%", // Start when top of projects section reaches 80% down the viewport
            toggleActions: "play none none none" // play on enter, no other actions
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
    });

    // Project cards with staggered reveal
    gsap.from("#projects .project-card", {
        scrollTrigger: {
            trigger: "#projects .infinite-scroll",
            start: "top 80%",
            toggleActions: "play none none none"
        },
        y: 80,
        opacity: 0,
        stagger: 0.1, // Staggered animation for each card
        duration: 0.7,
        ease: "back.out(1.2)" // Slight bounce effect
    });

    // Certificates section
    gsap.from("#certificates h1", {
        scrollTrigger: {
            trigger: "#certificates",
            start: "top 80%",
            toggleActions: "play none none none"
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
    });

    // Certificate cards
    gsap.from("#certificates .project-card", {
        scrollTrigger: {
            trigger: "#certificates .infinite-scroll",
            start: "top 80%",
            toggleActions: "play none none none"
        },
        y: 80,
        opacity: 0,
        stagger: 0.1,
        duration: 0.7,
        ease: "back.out(1.2)"
    });

    // Experiences section
    gsap.from("#experiences h1", {
        scrollTrigger: {
            trigger: "#experiences",
            start: "top 80%",
            toggleActions: "play none none none"
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
    });

    // Experience cards - different animation for variety
    gsap.from("#experiences .project-card", {
        scrollTrigger: {
            trigger: "#experiences .infinite-scroll",
            start: "top 80%",
            toggleActions: "play none none none"
        },
        y: 50,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out"
    });
}
    
//  <!-- Script infinite scroll -->
    // Infinite horizontal scroll with pause on hover
function setupInfiniteScroll(container, speed = 0.25) {
    let scrollAmount = 0;
    let paused = false;
    // Duplicate children for seamless infinite scroll
    const children = Array.from(container.children);
    children.forEach(child => {
        container.appendChild(child.cloneNode(true));
    });

    function loopScroll() {
        if (!paused) {
            scrollAmount += speed;
            if (scrollAmount >= container.scrollWidth / 2) {
                scrollAmount = 0;
            }
            container.scrollLeft = Math.floor(scrollAmount);
        }
        requestAnimationFrame(loopScroll);
    }
    loopScroll();

    // Pause on hover of any project-card (not just img)
    container.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mouseenter', () => { paused = true; card.classList.add('selected'); });
        card.addEventListener('mouseleave', () => { paused = false; card.classList.remove('selected'); });
    });
}

// Wait for GSAP animation to finish before starting infinite scroll and nav
document.addEventListener('DOMContentLoaded', () => {
    // Wait for GSAP timeline to finish (duration: ~2.2s)
    setTimeout(() => {
        document.querySelectorAll('.infinite-scroll').forEach(container => {
            setupInfiniteScroll(container);
        });
        // Hamburger menu functionality
        const hamburgerBtn = document.getElementById('hamburger-btn');
        const mobileNav = document.getElementById('mobile-nav');
        let navOpen = false;

        function closeMobileNav() {
            mobileNav.classList.add('hidden');
            mobileNav.classList.remove('flex');
            hamburgerBtn.classList.remove('open');
            navOpen = false;
        }

        hamburgerBtn.addEventListener('click', () => {
            navOpen = !navOpen;
            if (navOpen) {
                mobileNav.classList.remove('hidden');
                mobileNav.classList.add('flex');
                hamburgerBtn.classList.add('open');
            } else {
                mobileNav.classList.add('hidden');
                hamburgerBtn.classList.remove('open');
            }
        });

        // Optional: Close nav when clicking outside or pressing ESC
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeMobileNav();
        });
        document.addEventListener('click', (e) => {
            if (navOpen && !mobileNav.contains(e.target) && !hamburgerBtn.contains(e.target)) {
                closeMobileNav();
            }
        });
    }, 2200); // Wait for GSAP timeline (adjust if needed)
});