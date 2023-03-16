//media queries
let mediaqueryList = window.matchMedia("(min-width: 768px)");

//Height of the nav
const navHeight = 60;

//menu
const navToggle = document.querySelector(".nav-toggle-button");
const navMenu = document.querySelector(".nav-menu");

//sections buttons
const navAbout = document.querySelector(".navAbout");
const navSkills = document.querySelector(".navSkills");
const navProjects = document.querySelector(".navProjects");
const navContact = document.querySelector(".navContact");

//Find the coords of the sections
const sectionAboutMe = document.getElementById("about-me");
let posicionAboutMeTop = posicionTop(sectionAboutMe);

const sectionSkills = document.getElementById("skills");
let posicionSkillsTop = posicionTop(sectionSkills); 

const sectionProjects = document.getElementById("projects");
let posicionProjectsTop = posicionTop(sectionProjects);

const sectionContact = document.getElementById("contact");
let posicionContactTop = posicionTop(sectionContact);

//toggle the mode of the menu
navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu_visible");
});

//scroll to the section a toggle the menu

navAbout.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu_visible");
  if(mediaqueryList.matches){
    window.scrollTo( 0, posicionAboutMeTop - navHeight);
  }
  else{
    window.scrollTo( 0, posicionAboutMeTop);
  }
}); 

navSkills.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu_visible");
  if(mediaqueryList.matches){
    window.scrollTo( 0, posicionSkillsTop - navHeight);
  }
  else{
    window.scrollTo( 0, posicionSkillsTop);
  }
}); 

navProjects.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu_visible");
  if(mediaqueryList.matches){
    window.scrollTo( 0, posicionProjectsTop - navHeight);
  }
  else{
    window.scrollTo( 0, posicionProjectsTop);
  }
});

navContact.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu_visible");
  if(mediaqueryList.matches){
    window.scrollTo( 0, posicionContactTop - navHeight);
  }
  else{
    window.scrollTo( 0, posicionContactTop);
  }
}); 

//function to found the top cords of a div
function posicionTop (section){
  let posicion = section.getBoundingClientRect();
  let posicionTop = posicion.top + scrollY; 
  return posicionTop;
}
