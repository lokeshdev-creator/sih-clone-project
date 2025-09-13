// Wait for DOM to load
document.addEventListener("DOMContentLoaded", function () {
    // Dropdown toggle
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelectorAll('.dropdown-menu').forEach(openMenu => {
                if (openMenu !== this.nextElementSibling) {
                    openMenu.classList.remove('show');
                }
            });
            this.nextElementSibling.classList.toggle('show');
        });
    });

    document.addEventListener('click', function (e) {
        if (!e.target.closest('.dropdown')) {
            document.querySelectorAll('.dropdown-menu').forEach(openMenu => openMenu.classList.remove('show'));
        }
    });

    // Navbar toggler
    const navbarToggler = document.getElementById('navbar-toggler');
    const navbarMenu = document.getElementById('navbarSupportedContent');
    navbarToggler.addEventListener('click', () => navbarMenu.classList.toggle('show'));

    // Modals
    const loginModal = document.getElementById("login-modal");
    const signupModal = document.getElementById("signup-modal");
    const openLoginBtn = document.getElementById("open-login");
    const openSignupBtn = document.getElementById("open-signup");
    const closeLoginBtn = document.getElementById("close-login");
    const closeSignupBtn = document.getElementById("close-signup");

    function openModal(modal) {
        modal.style.display = "flex";
        setTimeout(() => modal.classList.add("show"), 10);
    }
    function closeModal(modal) {
        modal.classList.remove("show");
        setTimeout(() => modal.style.display = "none", 300);
    }

    openLoginBtn.addEventListener("click", () => openModal(loginModal));
    openSignupBtn.addEventListener("click", () => openModal(signupModal));

    closeLoginBtn.addEventListener("click", () => closeModal(loginModal));
    closeSignupBtn.addEventListener("click", () => closeModal(signupModal));

    window.addEventListener("click", (e) => {
        if (e.target === loginModal) closeModal(loginModal);
        if (e.target === signupModal) closeModal(signupModal);
    });
});

const micbutton=document.getElementById("micButton");
micbutton.addEventListener("click",()=>{
    alert("this is for voice reconginser to ai assitant");
})