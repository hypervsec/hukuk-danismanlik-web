document.addEventListener("DOMContentLoaded", function () {
  loadComponent("header", "components/header.html");
  loadComponent("footer", "components/footer.html");

  initHeroSlider();
});

function loadComponent(id, file) {
  const element = document.getElementById(id);

  if (!element) return;

  fetch(file)
    .then((response) => {
      if (!response.ok) {
        throw new Error(file + " yüklenemedi");
      }

      return response.text();
    })

    .then((data) => {
      element.innerHTML = data;

      if (id === "header") {
        initHeader();
      }
    })

    .catch((error) => {
      console.error("Component hatası:", error);
    });
}

function initHeader() {
  const header = document.querySelector(".header");

  const menuButton = document.querySelector(".menu-toggle");

  const menu = document.querySelector(".nav-menu");

  // Menü aç kapa

  if (menuButton && menu) {
    menuButton.addEventListener("click", function () {
      menu.classList.toggle("active");

      menuButton.classList.toggle("open");
    });
  }

  // Menü linkine basınca kapat

  const links = document.querySelectorAll(".nav-menu a");

  links.forEach((link) => {
    link.addEventListener("click", function () {
      if (menu) {
        menu.classList.remove("active");
      }

      if (menuButton) {
        menuButton.classList.remove("open");
      }
    });
  });

  // HEADER SCROLL

  if (header) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 60) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    });
  }
}

function initHeroSlider() {
  const slides = document.querySelectorAll(".hero-slide");

  if (!slides.length) return;

  let currentSlide = 0;

  setInterval(function () {
    slides[currentSlide].classList.remove("active");

    currentSlide++;

    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }

    slides[currentSlide].classList.add("active");
  }, 5000);
}

// FORM

document.addEventListener("submit", function (event) {
  const form = event.target;

  if (!form.classList.contains("contact-form")) return;

  event.preventDefault();

  const button = form.querySelector("button");

  if (!button) return;

  const oldText = button.innerHTML;

  button.disabled = true;

  button.innerHTML = "GÖNDERİLİYOR...";

  setTimeout(function () {
    button.innerHTML = "MESAJ GÖNDERİLDİ ✓";

    form.reset();

    setTimeout(function () {
      button.innerHTML = oldText;

      button.disabled = false;
    }, 2000);
  }, 1200);
});

// HOVER EFFECT

document.addEventListener("mouseover", function (event) {
  const card = event.target.closest(".service-card");

  if (card) {
    card.classList.add("active");
  }
});

document.addEventListener("mouseout", function (event) {
  const card = event.target.closest(".service-card");

  if (card) {
    card.classList.remove("active");
  }
});
