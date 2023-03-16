let root = document.documentElement;
let themeButton = document.getElementById("themeButton");

let whiteLight = "#edf6f9";
let cobaltLight= "#006d77";
let pinkLight= "#e29578";
let turquoiseLight= "#83c5be";
let peachLight= "#ffddd2";

let whiteDark= "#272a2b";
let cobaltDark= "#04626b";
let pinkDark= "#b0735b";

let turquoiseDark= "#83c5be";
let peachDark= "#9c857e";

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
  if (localStorage.getItem("theme") == "lightTheme") {
    setDark();
  } else {
    setLight();
  }
});

function setDark(){
  //changes css variables
  root.style.setProperty("--cobalt", cobaltDark);
  root.style.setProperty("--turquois", turquoiseDark);
  root.style.setProperty("--white", whiteDark);
  root.style.setProperty("--peach", peachDark);
  root.style.setProperty("--pink", pinkDark);

  //changes the class
  localStorage.setItem("theme","darkTheme");
}

function setLight(){
  //changes css variables
  root.style.setProperty("--cobalt", cobaltLight);
  root.style.setProperty("--turquois", turquoiseLight);
  root.style.setProperty("--white", whiteLight);
  root.style.setProperty("--peach", peachLight);
  root.style.setProperty("--pink", pinkLight);

  //changes the class
  localStorage.setItem("theme","lightTheme");
}

