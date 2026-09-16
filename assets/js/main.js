document.addEventListener("DOMContentLoaded", function () {
  /* =========================
       GLOBAL FOOTER
    ========================= */

  const footer = document.getElementById("footer");

  if (footer) {
    fetch("components/footer.html")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Footer bulunamadı");
        }

        return response.text();
      })

      .then((data) => {
        footer.innerHTML = data;
      })

      .catch((error) => {
        console.error("Footer yükleme hatası:", error);
      });
  }

  /* =========================
       MOBILE MENU
    ========================= */

  const menuToggle = document.querySelector(".menu-toggle");

  const navMenu = document.querySelector(".nav-menu");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", function () {
      navMenu.classList.toggle("active");

      menuToggle.classList.toggle("open");
    });
  }

  /* =========================
       CLOSE MOBILE MENU
    ========================= */

  const menuLinks = document.querySelectorAll(".nav-menu a");

  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (navMenu) {
        navMenu.classList.remove("active");
      }
    });
  });

  /* =========================
       CONTACT FORM
    ========================= */

  const contactForm = document.querySelector(".contact-form");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const button = this.querySelector("button");

      if (button) {
        const oldText = button.innerHTML;

        button.innerHTML = "GÖNDERİLİYOR...";

        button.disabled = true;

        setTimeout(() => {
          button.innerHTML = "MESAJ GÖNDERİLDİ ✓";

          this.reset();

          setTimeout(() => {
            button.innerHTML = oldText;

            button.disabled = false;
          }, 2000);
        }, 1500);
      }
    });
  }

  /* =========================
       SERVICE CARDS
    ========================= */

  const cards = document.querySelectorAll(".service-card");

  cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.classList.add("active");
    });

    card.addEventListener("mouseleave", () => {
      card.classList.remove("active");
    });
  });

  /* =========================
       HEADER SCROLL EFFECT
    ========================= */

  const header = document.querySelector(".header");

  if (header) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    });
  }
});
