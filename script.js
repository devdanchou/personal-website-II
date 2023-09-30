function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

  // const menu = document.querySelector(".menu-links");
  // const icon = document.querySelector(".hamburger-icon");

  // menu.addEventListener("click", function(event) {
  //   menu.classList.toggle("open");
  // })

  // icon.addEventListener("click", function(event) {
  //   icon.classList.toggle("open");
  // })