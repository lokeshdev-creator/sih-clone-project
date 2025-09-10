// Wait for DOM to load
document.addEventListener("DOMContentLoaded", function () {
    // Handle dropdown toggle manually
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function (e) {
            e.preventDefault();

            // Close other open dropdowns
            document.querySelectorAll('.dropdown-menu').forEach(openMenu => {
                if (openMenu !== this.nextElementSibling) {
                    openMenu.classList.remove('show');
                }
            });

            // Toggle this dropdown menu
            this.nextElementSibling.classList.toggle('show');
        });
    });

    // Close dropdowns if click happens outside
    document.addEventListener('click', function (e) {
        if (!e.target.closest('.dropdown')) {
            document.querySelectorAll('.dropdown-menu').forEach(openMenu => {
                openMenu.classList.remove('show');
            });
        }
    });

    // Handle navbar toggler manually
    const navbarToggler = document.getElementById('navbar-toggler');
    const navbarMenu = document.getElementById('navbarSupportedContent');

    navbarToggler.addEventListener('click', function () {
        navbarMenu.classList.toggle('show');
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Get elements
    const loginModal = document.getElementById("login-mod");
    const signupModal = document.getElementById("SingUp-mod");
    const openLoginBtn = document.getElementById("open-login");
    const openSignupBtn = document.getElementById("open-signup");
    const closeLoginBtn = document.getElementById("close-login");
    const closeSignupBtn = document.getElementById("close-signup");

    // Function to open a modal
    function openModal(modal) {
        modal.style.display = "flex";
        setTimeout(() => modal.classList.add("show"), 10);
    }

    // Function to close a modal
    function closeModal(modal) {
        modal.classList.remove("show");
        setTimeout(() => modal.style.display = "none", 300);
    }

    // Open login modal
    openLoginBtn.addEventListener("click", (e) => {
        e.preventDefault();
        openModal(loginModal);
    });

    // Open signup modal
    openSignupBtn.addEventListener("click", (e) => {
        e.preventDefault();
        openModal(signupModal);
    });

    // Close modals when clicking close buttons
    closeLoginBtn.addEventListener("click", () => closeModal(loginModal));
    closeSignupBtn.addEventListener("click", () => closeModal(signupModal));

    // Close modals when clicking outside form-content
    window.addEventListener("click", (e) => {
        if (e.target === loginModal) closeModal(loginModal);
        if (e.target === signupModal) closeModal(signupModal);
    });
});