const myNavItems = document.querySelectorAll('.nav-item');
const myOverlay = document.getElementById('blur-overlay');
const myNav = document.getElementById('top-nav');

const hamburgerBtn = document.getElementById('hamburger-btn');
const mobileMenu = document.getElementById('mobile-menu');
const bar1 = document.getElementById('bar1');
const bar2 = document.getElementById('bar2');

const appleLogo = document.getElementById('apple-logo');
const searchIcon = document.getElementById('search-icon');
const bagIcon = document.getElementById('bag-icon');

let isMenuOpen = false;
let hideTimeout = null;

const desktopMenu = document.getElementById('desktop-menu');
let isInMenuArea = false;

// checks dropdown is open
function hasActiveDropdown() {
    const allDropdowns = document.querySelectorAll('.dropdown-content');
    for (let i = 0; i < allDropdowns.length; i++) {
        if (allDropdowns[i].classList.contains('show')) {
            return true;
        }
    }
    return false;
}

// hides blur
function hideBlurIfNeeded() {
    if (window.innerWidth >= 768) {
        if (!hasActiveDropdown() && !isInMenuArea) {
            myOverlay.classList.add('opacity-0');
            setTimeout(() => {
                if (!hasActiveDropdown() && !isInMenuArea) {
                    myOverlay.classList.add('hidden');
                }
            }, 300);

            myNav.classList.add('bg-opacity-95');
            myNav.classList.remove('bg-white');
        }
    }
}

// mouse enters menu area - show blur
desktopMenu.addEventListener('mouseenter', function () {
    if (window.innerWidth >= 768) {
        isInMenuArea = true;
        if (hideTimeout) {
            clearTimeout(hideTimeout);
            hideTimeout = null;
        }

        myOverlay.classList.remove('hidden');
        setTimeout(() => {
            myOverlay.classList.remove('opacity-0');
        }, 10);

        myNav.classList.remove('bg-opacity-95');
        myNav.classList.add('bg-white');
    }
});

// mouse leaves menu area - hide blur
desktopMenu.addEventListener('mouseleave', function () {
    if (window.innerWidth >= 768) {
        isInMenuArea = false;
        hideBlurIfNeeded();
    }
});

// handle each nav item hover
for (let i = 0; i < myNavItems.length; i++) {
    const item = myNavItems[i];
    const dropdown = item.querySelector('.dropdown-content');

    if (!dropdown) continue;

    let itemHideTimeout = null;

    // hover on nav item - show dropdown
    item.addEventListener('mouseenter', function () {
        if (window.innerWidth >= 768) {
            if (itemHideTimeout) {
                clearTimeout(itemHideTimeout);
                itemHideTimeout = null;
            }

            dropdown.classList.add('show');

            myOverlay.classList.remove('hidden');
            setTimeout(() => {
                myOverlay.classList.remove('opacity-0');
            }, 10);

            myNav.classList.remove('bg-opacity-95');
            myNav.classList.add('bg-white');
        }
    });

    // leave nav item - hide dropdown after delay
    item.addEventListener('mouseleave', function () {
        if (window.innerWidth >= 768) {
            itemHideTimeout = setTimeout(() => {
                dropdown.classList.remove('show');
                hideBlurIfNeeded();
            }, 300);
        }
    });

    // hover on dropdown - keep it open
    dropdown.addEventListener('mouseenter', function () {
        if (window.innerWidth >= 768) {
            if (itemHideTimeout) {
                clearTimeout(itemHideTimeout);
                itemHideTimeout = null;
            }
            dropdown.classList.add('show');
        }
    });

    // leave dropdown - hide after delay
    dropdown.addEventListener('mouseleave', function () {
        if (window.innerWidth >= 768) {
            itemHideTimeout = setTimeout(() => {
                dropdown.classList.remove('show');
                hideBlurIfNeeded();
            }, 300);
        }
    });
}

// closes mobile menu
function closeMobileMenu() {
    isMenuOpen = false;
    mobileMenu.classList.add('-translate-y-full');
    bar1.classList.remove('rotate-45', 'translate-y-1');
    bar2.classList.remove('-rotate-45', '-translate-y-1');
    document.body.style.overflow = 'auto';

    if (appleLogo) appleLogo.style.visibility = 'visible';
    if (searchIcon) searchIcon.style.visibility = 'visible';
    if (bagIcon) bagIcon.style.visibility = 'visible';
}

// hamburger click - toggle mobile menu
hamburgerBtn.addEventListener('click', function () {
    isMenuOpen = !isMenuOpen;

    if (isMenuOpen) {
        mobileMenu.classList.remove('-translate-y-full');

        bar1.classList.add('rotate-45', 'translate-y-1');
        bar2.classList.add('-rotate-45', '-translate-y-1');

        document.body.style.overflow = 'hidden';

        if (appleLogo) appleLogo.style.visibility = 'hidden';
        if (searchIcon) searchIcon.style.visibility = 'hidden';
        if (bagIcon) bagIcon.style.visibility = 'hidden';
    } else {
        closeMobileMenu();
    }
});

// close button in mobile menu
const mobileCloseBtn = document.getElementById('mobile-close-btn');
if (mobileCloseBtn) {
    mobileCloseBtn.addEventListener('click', function () {
        closeMobileMenu();
    });
}