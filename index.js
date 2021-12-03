const navToggle = document.querySelector(".nav-toggle-button");
const navMenu = document.querySelector(".nav-menu");
const navAbout = document.querySelector(".navAbout");
const navSkills = document.querySelector(".navSkills");
const navProjects = document.querySelector(".navProjects");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu_visible");
});

navAbout.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu_visible");
}); 

navSkills.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu_visible");
}); 

navProjects.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu_visible");
}); 
