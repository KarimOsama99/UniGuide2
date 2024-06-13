const navigationHeight = document.querySelector(".navbar.sticky-top").offsetHeight;

document.documentElement.style.setProperty('--scroll-padding', navigationHeight + 13 + 'px');