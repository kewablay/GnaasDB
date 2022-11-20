// menu Toggler
function showMenu() {
  console.log("toggler clicked...");
  var sidebar = document.querySelector(".main__sidebar");

  sidebar.style.right = "0";
}

function hideMenu() {
  console.log("hide menu clicked...");
  var sidebar = document.querySelector(".main__sidebar");

  sidebar.style.right = "-200%";
}

// results layout change
function changeLayout() {
  var results = document.querySelector(".search__results ");

  results.classList.toggle("changeLayout");
}

// window.onscroll = function () {
//   "use strict";

//   if (document.body.scrollTop >= 200) {
//       console.log("scrolled.........");
//     nav.classList.add("nav-colored");
//     nav.classList.remove("bg-transparent");
// } else {
//     nav.classList.add("bg-transparent");
//     nav.classList.remove("nav-colored");
//   }
// };

// remove navbar transparent on scroll
window.onscroll = () => {
  var nav = document.querySelector("nav");
  if (window.scrollY > 50) {
    console.log("scrolled........");
    nav.classList.add("nav-colored");
    nav.classList.remove("bg-transparent");
  } else {
    nav.classList.add("bg-transparent");
    nav.classList.remove("nav-colored");
  }
};
