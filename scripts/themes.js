//get the css variables the button and the menu
const root = document.documentElement;
const themeButton = document.getElementById("themeButton");

const whiteLight = "#edf6f9";
const cobaltLight= "#006d77";
const pinkLight= "#e29578";
const peachLight= "#ffddd2";

const whiteDark= "#272a2b";
const cobaltDark= "#04626b";
const pinkDark= "#b0735b";
const peachDark= "#9c857e";

if(!localStorage.getItem("theme")) {
  localStorage.setItem("theme","lightTheme");
}
//sets the theme on the page load
else if(localStorage.getItem("theme") == "lightTheme"){
  setLight();
}
else{
  setDark();
};

themeButton.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu_visible");
  if (localStorage.getItem("theme") == "lightTheme") {
    setDark();
  } else {
    setLight();
  }
});

function setDark(){
  //changes css variables
  root.style.setProperty("--cobalt", cobaltDark);
  root.style.setProperty("--white", whiteDark);
  root.style.setProperty("--peach", peachDark);
  root.style.setProperty("--pink", pinkDark);

  //changes the theme
  localStorage.setItem("theme","darkTheme");
}

function setLight(){
  //changes css variables
  root.style.setProperty("--cobalt", cobaltLight);
  root.style.setProperty("--white", whiteLight);
  root.style.setProperty("--peach", peachLight);
  root.style.setProperty("--pink", pinkLight);

  //changes the theme
  localStorage.setItem("theme","lightTheme");
}

