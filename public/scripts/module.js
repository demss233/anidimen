/*

This file handles the animation for the input present in the navbar by using a Global Boolean variable called search_expanded, 
this works with the help of some event listeners

*/

let search_expanded = 0;

document.querySelector(".search").addEventListener("click", () => {
  if (search_expanded) document.querySelector(".search").style.width = "175px";
  else document.querySelector(".search").style.width = "240px";
  search_expanded ^= 1;
});

document.addEventListener("click", (e) => {
  if (e.target != document.querySelector(".search")) {
    if (search_expanded)
      (document.querySelector(".search").style.width = "175px"),
        (search_expanded ^= 1);
    //   else document.querySelector(".search").style.width = "240px";
  }
});

document.querySelector(".quora").addEventListener("click", () => {
  window.location.href = "https://www.quora.com/profile/Shiv-Satyam-7";
});

document.querySelector(".github").addEventListener("click", () => {
  window.location.href = "https://github.com/demss233/anime-ftv";
});

document.querySelector(".navbar svg").addEventListener("click", () => {
  window.location.href = "https://localhost:8000/";
});

let inp = document.querySelector(".search");

inp.addEventListener("keydown", (e) => {
  if (e.keyCode == 9 || e.keyCode == 13) {
    e.preventDefault();
    let VAL = document.querySelector('.search').value;
    window.location.href = `/keyword/${VAL}`;
  }
});
