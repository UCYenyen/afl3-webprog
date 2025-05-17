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
            container.scrollLeft = scrollAmount;
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

window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.infinite-scroll').forEach(container => {
        setupInfiniteScroll(container);
    });
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