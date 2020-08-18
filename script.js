console.log("hello");
const nav = document.querySelector("nav");
console.log(nav);
window.onscroll = function () {
  var top = window.scrollY;
  console.log(top);
  if (top >= 1) {
    nav.classList.add("black");
  } else {
    nav.classList.remove("black");
  }
};
