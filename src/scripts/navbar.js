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