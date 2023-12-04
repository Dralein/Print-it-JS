const slides = [
    {
        "image": "slide1.jpg",
        "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image": "slide2.jpg",
        "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image": "slide3.jpg",
        "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image": "slide4.png",
        "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
    }
];

const elements = {
    arrowLeft: document.querySelector(".arrow_left"),
    arrowRight: document.querySelector(".arrow_right"),
    dots: document.querySelectorAll(".dot"),
    slideImg: document.querySelector(".banner-img"),
    tagLineElement: document.querySelector("p"),
  };
  
  let currentIndex = 0;
  
  function updateCarousel(index) {
    const { image, tagLine } = slides[index];
    const imagePath = `assets/images/slideshow/${image}`;
  
    Object.assign(elements.slideImg, { src: imagePath, alt: `Slide ${index + 1}` });
    elements.tagLineElement.innerHTML = tagLine;
  }
  
  function updateDots(index) {
    elements.dots.forEach((dot, i) => {
      dot.classList.toggle("dot_selected", i === index);
    });
  }
  
  function navigateCarousel(direction) {
    if (direction === "left") {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    } else if (direction === "right") {
      currentIndex = (currentIndex + 1) % slides.length;
    }
    updateCarousel(currentIndex);
    updateDots(currentIndex);
  }
  
  elements.arrowLeft.addEventListener("click", () => navigateCarousel("left"));
  elements.arrowRight.addEventListener("click", () => navigateCarousel("right"));

