const sliderContainer = document.querySelector(".slider-container"),
    slideRight = document.querySelector(".right-slide"),
    slideLeft = document.querySelector(".left-slide"),
    upButton = document.querySelector(".up-button"),
    downButton = document.querySelector(".down-button"),
    slidesLength = slideLeft.querySelectorAll("div").length;

let activeSlideIndex = 0;

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`

upButton.addEventListener("click", () => changeSlide("up"))
downButton.addEventListener("click", () => changeSlide("down"))


const changeSlide = (direction) => {
    const sliderHeight = sliderContainer.clientHeight
    if (direction === "up") {
        activeSlideIndex++
        if (activeSlideIndex > slidesLength - 1) {
            activeSlideIndex = 0
        }
    }
    if (direction === "down") {
        activeSlideIndex--
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesLength - 1
        }
    }


    slideRight.style.transform = `TranslateY(-${activeSlideIndex * sliderHeight}px)`
    slideLeft.style.transform = `TranslateY(${activeSlideIndex * sliderHeight}px)`
}


