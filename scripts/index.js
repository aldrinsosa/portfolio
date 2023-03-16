//media queries
const mediaqueryList = window.matchMedia("(min-width: 768px)");

//Height of the nav
const navHeight = 60;

//menu
const navToggle = document.querySelector(".nav-toggle-button");
const navMenu = document.querySelector(".nav-menu");

//sections buttons
const buttons = {
  "About": document.querySelector(".navAbout"),
  "Skills": document.querySelector(".navSkills"),
  "Projects":document.querySelector(".navProjects"),
  "Contact":document.querySelector(".navContact"),
}

//coords of each section
const sections = {
  "About":positionTop(document.getElementById("about-me")), 
  "Skills":positionTop(document.getElementById("skills")), 
  "Projects":positionTop(document.getElementById("projects")), 
  "Contact":positionTop(document.getElementById("contact"))
}

//toggle the mode of the menu
navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu_visible");
});

//make each button listen for clicks
for (let key in buttons) {
  buttons[key].addEventListener("click", () => {
    scrollDown(sections[key]);
  }); 
}

//scroll to the section
function scrollDown(positionTop){
  navMenu.classList.toggle("nav-menu_visible");
  if(mediaqueryList.matches){
    window.scrollTo( 0, positionTop - navHeight);
  }
  else{
    window.scrollTo( 0, positionTop);
  }
}

//found the top cords of a div
function positionTop (section){
  const position = section.getBoundingClientRect();
  const positionTop = position.top + scrollY; 
  return positionTop;
}
