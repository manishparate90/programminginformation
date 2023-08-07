var typed = new Typed(".multiple-text",{
	strings: ["C" , "C++",
	"Android Developer" , "Web developer", "Python" , "Reactnative" , "Html-Css","JavaScript", "Flutter"],
	 typepseed: 1500,
	 backspeed: 1000,
	 backDelay: 1000,
	 loop: true,
});
let hamMenuIcon = document.getElementById("ham-menu");
let navBar = document.getElementById("nav-bar");
let navLinks = navBar.querySelectorAll("li");
hamMenuIcon.addEventListener("click", () => {
  navBar.classList.toggle("active");
  hamMenuIcon.classList.toggle("fa-times");
});
navLinks.forEach((navLinks) => {
  navLinks.addEventListener("click", () => {
    navBar.classList.remove("active");
    hamMenuIcon.classList.toggle("fa-times");
  });
});