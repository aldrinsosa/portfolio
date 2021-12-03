const navHeight = 60;
const navToggle = document.querySelector(".nav-toggle-button");
const navMenu = document.querySelector(".nav-menu");
const navAbout = document.querySelector(".navAbout");
const navSkills = document.querySelector(".navSkills");
const navProjects = document.querySelector(".navProjects");
const navContact = document.querySelector(".navContact");

//Find the coords of the sections
const sectionAboutMe = document.getElementById("about-me");
var posicionAboutMeTop = posicionTop(sectionAboutMe);

const sectionSkills = document.getElementById("skills");
var posicionSkillsTop = posicionTop(sectionSkills); 

const sectionProjects = document.getElementById("projects");
var posicionProjectsTop = posicionTop(sectionProjects);

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu_visible");
});

navAbout.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu_visible");
  window.scrollTo( 0, posicionAboutMeTop - navHeight);
}); 

navSkills.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu_visible");
  window.scrollTo( 0, posicionSkillsTop - navHeight);
}); 

navProjects.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu_visible");
  window.scrollTo( 0, posicionProjectsTop - navHeight);
});

navContact.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu_visible");
}); 

function posicionTop (section){
  var posicion = section.getBoundingClientRect();
  var posicionTop = posicion.top + scrollY; 
  return posicionTop;
}