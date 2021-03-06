function mainSlider() {
  const prevBtnSlider = document.querySelector(
    ".main-banner-cases-slider-control-prev"
  );

  const nextBtnSlider = document.querySelector(
    ".main-banner-cases-slider-control-next"
  );

  const sliderWrapper = document.querySelector(
    ".main-banner-cases-slider-wrap"
  );

  sliderWrapper.style.transform = "translateX(0px)";
  nextBtnSlider.style.display = "block";

  const sliderCases = document.querySelectorAll(".main-banner-cases-case");

  let currentX = 0;
  let currentCase = 0;
  const slideWidth = sliderCases[0]
    ? Math.round(sliderCases[0].offsetWidth)
    : 0;

  if (currentCase === 0) {
    prevBtnSlider.style.display = "none";
  }

  nextBtnSlider.addEventListener("click", () => {
    currentX -= slideWidth;
    sliderWrapper.style.transform = `translateX(${currentX}px)`;
    sliderCases[currentCase].classList.remove("main-banner-cases-case-active");
    currentCase++;
    if (currentCase !== 0) {
      prevBtnSlider.style.display = "block";
    }
    sliderCases[currentCase].classList.add("main-banner-cases-case-active");
    if (currentCase === sliderCases.length - 1) {
      nextBtnSlider.style.display = "none";
    }
  });

  prevBtnSlider.addEventListener("click", () => {
    sliderCases[currentCase].classList.remove("main-banner-cases-case-active");
    currentCase--;
    sliderCases[currentCase].classList.add("main-banner-cases-case-active");
    if (currentCase === 0) {
      prevBtnSlider.style.display = "none";
    }
    if (currentCase !== sliderCases.length - 1) {
      nextBtnSlider.style.display = "block";
    }
    currentX += slideWidth;
    sliderWrapper.style.transform = `translateX(${currentX}px)`;
  });
}

mainSlider()

window.addEventListener("resize", mainSlider);
