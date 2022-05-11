const menuButton = document.querySelector("#menu-toggle");
        const menuIcon = document.querySelector(".header-navbar__mobile-menu-button")
        const mobileHeader = document.querySelector(".mobile-header__menu");
        const header = document.querySelector(".header-navbar");

        menuButton.addEventListener("click", () => {
            mobileHeader.classList.toggle("mobile-header__menu--open");
            header.classList.toggle("fixed-position");
            menuIcon.classList.toggle("fixed-position");
        });

        const howButton = document.querySelector("#howButton");
        const howDropdown = document.querySelector("#howDropdown");

        howButton.addEventListener("click", () => {
            howButton.classList.toggle("mobile-header__nav-item-link--grey-background");
            howDropdown.classList.toggle("mobile-header__dropdown--open");
            whoDropdown.classList.remove("mobile-header__dropdown--open");
            companyDropdown.classList.remove("mobile-header__dropdown--open");
        });

        const whoButton = document.querySelector("#whoButton");
        const whoDropdown = document.querySelector("#whoDropdown");

        whoButton.addEventListener("click", () => {
            whoButton.classList.toggle("mobile-header__nav-item-link--grey-background");
            whoDropdown.classList.toggle("mobile-header__dropdown--open");
            howDropdown.classList.remove("mobile-header__dropdown--open");
            companyDropdown.classList.remove("mobile-header__dropdown--open");
        });

        const companyButton = document.querySelector("#companyButton");
        const companyDropdown = document.querySelector("#companyDropdown");

        companyButton.addEventListener("click", () => {
            companyButton.classList.toggle("mobile-header__nav-item-link--grey-background");
            companyDropdown.classList.toggle("mobile-header__dropdown--open");
            howDropdown.classList.remove("mobile-header__dropdown--open");
            whoDropdown.classList.remove("mobile-header__dropdown--open");
        });
