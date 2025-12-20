console.log("site loaded");
document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');

    if (!navToggle) return;

    navToggle.addEventListener('click', () => {
        const isOpen = document.body.classList.toggle('is-nav-open');
        navToggle.setAttribute('aria-expanded', isOpen);
    });
});
