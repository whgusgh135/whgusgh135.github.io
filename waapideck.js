let menuButton = document.querySelector("#mobile-header-dropdown-toggle");
let menuIcon = document.querySelector(".header-navbar__mobile-menu-button")
let mobileHeader = document.querySelector(".mobile-header__menu");
let header = document.querySelector(".header-navbar");

menuButton.addEventListener("click", () => {
    mobileHeader.classList.toggle("mobile-header__menu--open");
    header.classList.toggle("fixed-position");
    menuIcon.classList.toggle("fixed-position");
});

let howButton = document.querySelector("#howButton");
let howDropdown = document.querySelector("#howDropdown");

howButton.addEventListener("click", () => {
    howButton.classList.toggle("mobile-header__nav-item-link--grey-background");
    howDropdown.classList.toggle("mobile-header__dropdown--open");
    whoDropdown.classList.remove("mobile-header__dropdown--open");
    companyDropdown.classList.remove("mobile-header__dropdown--open");
});

let whoButton = document.querySelector("#whoButton");
let whoDropdown = document.querySelector("#whoDropdown");

whoButton.addEventListener("click", () => {
    whoButton.classList.toggle("mobile-header__nav-item-link--grey-background");
    whoDropdown.classList.toggle("mobile-header__dropdown--open");
    howDropdown.classList.remove("mobile-header__dropdown--open");
    companyDropdown.classList.remove("mobile-header__dropdown--open");
});

let companyButton = document.querySelector("#companyButton");
let companyDropdown = document.querySelector("#companyDropdown");

companyButton.addEventListener("click", () => {
    companyButton.classList.toggle("mobile-header__nav-item-link--grey-background");
    companyDropdown.classList.toggle("mobile-header__dropdown--open");
    howDropdown.classList.remove("mobile-header__dropdown--open");
    whoDropdown.classList.remove("mobile-header__dropdown--open");
});
