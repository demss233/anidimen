let hamburger = document.querySelector(".hamburger");

let opened = 0;

hamburger.addEventListener("click", () => {
  if (opened) {
    document.querySelector(".navbar").style.flexDirection = "row";
    document.querySelector(".navbar").style.alignItems = "center";
    document.querySelector(".navbar").style.justifyContent = "space-between";
    document.querySelector(".navbar-left-links").style.display = "none";
    document.querySelector(".navbar-right").style.display = "none";
    document.querySelector(".line2").style.display = "block";
    document.querySelector(".line1").style.transform = "rotate(0deg)";
    document.querySelector(".line3").style.transform = "rotate(0deg)";
    document.querySelector(".line3").style.marginTop = "5px";
    hamburger.style.margin = "0";
  } else {
    document.querySelector(".navbar").style.flexDirection = "column";
    document.querySelector(".navbar").style.alignItems = "center";
    document.querySelector(".navbar-left-links").style.display = "flex";
    document.querySelector(".navbar-left-links").style.flexDirection = "column";
    document.querySelector(".navbar-left-links").style.marginLeft = "auto";
    document.querySelector(".navbar-left-links").style.marginRight = "auto";

    document.querySelector(".navbar a").style.marginTop = "20px";

    document.querySelector(".navbar-right").style.display = "flex";
    document.querySelector(".navbar-right").style.marginTop = "20px";
    document.querySelector(".navbar-right").style.flexDirection = "column";

    hamburger.style.marginTop = "20px";
    hamburger.style.marginBottom = "60px";
    document.querySelector(".line2").style.display = "none";
    document.querySelector(".line3").style.margin = "0px";
    document.querySelector(".line1").style.transform = "rotate(45deg)";
    document.querySelector(".line3").style.transform = "rotate(-46deg)";

    hamburger.style.padding = "13px 15px";
  }
  opened ^= 1;
});


