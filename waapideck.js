document.querySelector("#mobile-header-dropdown-toggle").addEventListener("click", () => {
    document.querySelector(".mobile-header__menu").classList.toggle("mobile-header__menu--open");
    document.querySelector(".header-navbar").classList.toggle("fixed-position");
    document.querySelector(".header-navbar__mobile-menu-button").classList.toggle("fixed-position");
});

document.querySelector("#howButton").addEventListener("click", () => {
    document.querySelector("#howButton").classList.toggle("mobile-header__nav-item-link--grey-background");
    document.querySelector("#howDropdown").classList.toggle("mobile-header__dropdown--open");
    document.querySelector("#whoDropdown").classList.remove("mobile-header__dropdown--open");
    document.querySelector("#companyDropdown").classList.remove("mobile-header__dropdown--open");
});

document.querySelector("#whoButton").addEventListener("click", () => {
    document.querySelector("#whoButton").classList.toggle("mobile-header__nav-item-link--grey-background");
    document.querySelector("#whoDropdown").classList.toggle("mobile-header__dropdown--open");
    document.querySelector("#howDropdown").classList.remove("mobile-header__dropdown--open");
    document.querySelector("#companyDropdown").classList.remove("mobile-header__dropdown--open");
});

document.querySelector("#companyButton").addEventListener("click", () => {
    document.querySelector("#companyButton").classList.toggle("mobile-header__nav-item-link--grey-background");
    document.querySelector("#companyDropdown").classList.toggle("mobile-header__dropdown--open");
    document.querySelector("#howDropdown").classList.remove("mobile-header__dropdown--open");
    document.querySelector("#whoDropdown").classList.remove("mobile-header__dropdown--open");
});
