let index = 0;
for (let i = 8; i < window.location.href.length; ++i) {
  if (window.location.href[i] == "/") {
    index = i + 1;
    break;
  }
}
let animeId = window.location.href.substring(index);

{
  fetch(`https://gogoanime.consumet.org/anime-details/${animeId}`)
    .then((response) => response.json())
    .then((animelist) => {
      //   console.log(animelist);
      let NAME = animelist.animeTitle;
      let RELEASED_DATE = animelist.releasedDate;
      let STATUS = animelist.status;
      let SYNOPSIS = animelist.synopsis;
      let EP = animelist.episodesAvailable;
      let IMAGE = animelist.animeImg;
      let GENRE = Array.from(animelist.genres).join(" • ");

      document.querySelector(".title").textContent = NAME;
      let x = document.querySelector(".episodes").innerText;
      document.querySelector(".episodes").textContent =
        EP == undefined ? "" : EP + "Ep's";
      document.querySelector(".released").textContent =
        "Released On / Releasing On : " + RELEASED_DATE;
      document.querySelector(".status").textContent = STATUS;
      document.querySelector(".synopsis").innerHTML = SYNOPSIS;
      document.querySelector(".wrapper-image img").src = IMAGE;
      document.querySelector(".genre").textContent = GENRE;

      document.querySelector(".wrapper").style.opacity = "1";

      fetch(`https://gogoanime.consumet.org/genre/${animelist.genres[0]}`)
        .then((response) => response.json())
        .then((animelist) => {
          let container = document.querySelector(".more-like-this-id");
          for (let i = 0; i < 12; ++i) {
            let card = document.createElement("div");
            card.classList.add("swiper-slide");
            let img = document.createElement("img");
            img.src = animelist[i].animeImg;
            img.classList.add("kinetic");
            img.classList.add("swiper-lazy");
            card.appendChild(img);
            container.appendChild(card);
            card.addEventListener("click", () => {
              window.location.href = `/${animelist[i].animeId}`;
            });
          }
        });
    });
}

document.querySelector(".navbar-brand svg").addEventListener("click", () => {
  window.location.href = "https://localhost:8000";
});

document.querySelector(".go").addEventListener("click", (e) => {
  e.preventDefault();
  let ep = document.querySelector(".episode-value").value;
  let vidcdn = `https://animexninja-api.dhvitop1.repl.co/watch/${animeId}/${ep}`
//   fetch(vidcdn)
//     .then((response) => response.json())
//     .then((animelist) => {
//       window.open(animelist.Referer);
//     });
  window.location.href = vidcdn;
});
