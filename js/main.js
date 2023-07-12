$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 50,
  nav: true,
  dots: true,
  // center: true,
  slideBy: 2,
  responsive: {
    0: {
      items: 1,
    },
    500: {
      items: 1,
    },
    900: {
      items: 3,
    },
    1200: {
      items: 2,
    },
  },
});

const body = document.body;
const modeToggle = document.querySelector(".switch");

modeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");
});