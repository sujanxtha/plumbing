var hamicon = document.getElementsByClassName("ham-icon")[0];
var menucontents = document.getElementsByClassName("mobile-menu-contents")[0];
var cross = document.getElementsByClassName("cross-icon")[0];

hamicon.addEventListener("click", function (el) {
  if (menucontents.classList.contains("active")) {
    menucontents.classList.remove("active");
  } else {
    menucontents.classList.add("active");
  }
});
cross.addEventListener("click", function () {
  if (menucontents.classList.contains("active")) {
    menucontents.classList.remove("active");
  }
});


