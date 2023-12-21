const carouselItems = document.querySelectorAll(".carousel-block");
let currentIndex = 0;

const nextSlide = () => {
  currentIndex = (currentIndex + 1) % carouselItems.length;
  updateCarousel();
};

const previousSlide = () => {
  currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
  updateCarousel();
};

const updateCarousel = () => {
  carouselItems.forEach((item, index) => {
    item.style.display = index === currentIndex ? "block" : "none";
  });
};

updateCarousel();

const goToContact = () => {
  window.location.href = "contact.html";
};

const goToProjects = () => {
  window.location.href = "portfolio.html";
};

const goToGithub = () => {
  window.open("https://github.com/CorinaJewer", "_blank");
};

window.onbeforeunload = () => {
  for(const form of document.getElementsByTagName("form")) {
    form.reset();
  }
}
