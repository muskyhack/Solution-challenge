// Add event listener to mobile menu icon
document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
    const mobileMenu = document.querySelector('.mobile-menu');

    mobileMenuIcon.addEventListener('click', function () {
        mobileMenu.classList.toggle('show');
    });

    document.addEventListener('click', function (event) {
        const isClickInside = mobileMenu.contains(event.target) || mobileMenuIcon.contains(event.target);

        if (!isClickInside && mobileMenu.classList.contains('show')) {
            mobileMenu.classList.remove('show');
        }
    });
});