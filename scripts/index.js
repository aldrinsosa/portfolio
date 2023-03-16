//media queries
const mediaqueryList = window.matchMedia("(min-width: 768px)");

//Height of the nav
const navHeight = 60;

//menu
const navToggle = document.querySelector(".nav-toggle-button");
const navMenu = document.querySelector(".nav-menu");

//buttons in the nav
const buttons = [
  document.querySelector(".navAbout"),
  document.querySelector(".navSkills"),
  document.querySelector(".navProjects"),
  document.querySelector(".navContact"),
]

//coords of each section
const sections = [
  positionTop(document.getElementById("about-me")), 
  positionTop(document.getElementById("skills")), 
  positionTop(document.getElementById("projects")), 
  positionTop(document.getElementById("contact"))
]

//toggle the mode of the menu
navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu_visible");
});

//make each button listen for clicks
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", () => {
    scrollDown(sections[i]);
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
