// menu Toggler
function showMenu() {
  console.log("toggler clicked...");
  var sidebar = document.querySelector(".main__sidebar");

  sidebar.style.display = "block";
}

function hideMenu() {
  console.log("hide menu clicked...");
  var sidebar = document.querySelector(".main__sidebar");

  sidebar.style.display = "none";
}

// results layout change
function changeLayout() {
  var results = document.querySelector(".search__results ");

  results.classList.toggle("changeLayout");
}
