{
  fetch("https://gogoanime.consumet.org/popular")
    .then((response) => response.json())
    .then((animelist) => {
      let container = document.querySelector(".popular-id");
      for (let i = 0; i < 20; ++i) {
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
}

{
  fetch("https://gogoanime.consumet.org/top-airing")
    .then((response) => response.json())
    .then((animelist) => {
      let container = document.querySelector(".airing-id");
      for (let i = 0; i < 10; ++i) {
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
}

{
  fetch("https://gogoanime.consumet.org/genre/romance")
    .then((response) => response.json())
    .then((animelist) => {
      let container = document.querySelector(".romance-id");
      for (let i = 0; i < 20; ++i) {
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
}

{
  fetch("https://gogoanime.consumet.org/genre/action")
    .then((response) => response.json())
    .then((animelist) => {
      let container = document.querySelector(".action-id");
      for (let i = 0; i < 20; ++i) {
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
}

{
  fetch("https://gogoanime.consumet.org/genre/comedy")
    .then((response) => response.json())
    .then((animelist) => {
      let container = document.querySelector(".comedy-id");
      for (let i = 0; i < 20; ++i) {
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
}
{
  fetch("https://gogoanime.consumet.org/genre/sci-fi")
    .then((response) => response.json())
    .then((animelist) => {
      let container = document.querySelector(".sci-fi");
      for (let i = 0; i < 20; ++i) {
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
}

{
  fetch("https://gogoanime.consumet.org/genre/adventure")
    .then((response) => response.json())
    .then((animelist) => {
      let container = document.querySelector(".adventure-id");
      for (let i = 0; i < 20; ++i) {
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
}

{
  fetch("https://gogoanime.consumet.org/genre/shounen")
    .then((response) => response.json())
    .then((animelist) => {
      let container = document.querySelector(".shounen_id");
      for (let i = 0; i < 20; ++i) {
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
}

{
  fetch("https://gogoanime.consumet.org/genre/horror")
    .then((response) => response.json())
    .then((animelist) => {
      let container = document.querySelector(".horror-id");
      for (let i = 0; i < 20; ++i) {
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
}

{
  fetch("https://gogoanime.consumet.org/genre/magic")
    .then((response) => response.json())
    .then((animelist) => {
      let container = document.querySelector(".magic-id");
      for (let i = 0; i < 20; ++i) {
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
}

document.querySelector(".quora").addEventListener("click", () => {
  window.location.href = "https://www.quora.com/profile/Shiv-Satyam-7";
});

document.querySelector(".github").addEventListener("click", () => {
  window.location.href = "https://github.com/demss233/anime-ftv";
});
