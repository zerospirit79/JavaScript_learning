let slider = document.querySelector('.slider_item');
let leftArrow = document.querySelector('.chevron-left');
let rightArrow = document.querySelector('.chevron-right');

window.addEventListener('load', function () {
    leftArrow.addEventListener('click', function () {
        imaages.setNextLeftImage();
    });

    rightArrow.addEventListener('click', function () {
        imaages.setNextRightImage();
    });


    imaages.init();

    
});

let imaages = {
    currentIdx: 0,
    slides: [],
    init() {
        this.slides = document.querySelectorAll('.slider');
        this.showImageWithCurrentIdx();
    },

    showImageWithCurrentIdx() {
        const currentSlide = this.slides[this.currentIdx];
        currentSlide.classList.remove('hide-slider');
    },

    hideVisibleImages() {
        this.slides.forEach(function (slide) {
            slide.classList.add('hide-slider');
        });
    },

    setNextLeftImage() {
        this.hideVisibleImages();
        if (this.currentIdx == 0) {
            this.currentIdx = this.slides.length - 1;
        } else {
            this.currentIdx--;
        }
        const currentSlide = this.slides[this.currentIdx];
        currentSlide.classList.add('slide-in-right');
        currentSlide.classList.remove('hide-slider')
        setTimeout(() => {
            currentSlide.classList.remove('slide-in-right');
        }, 500);
    },

    setNextRightImage() {
        this.hideVisibleImages();
        if (this.currentIdx == this.slides.length - 1) {
            this.currentIdx = 0;
        } else {
            this.currentIdx++;
        }
        const currentSlide = this.slides[this.currentIdx];
        currentSlide.classList.add('slide-in-left');
        currentSlide.classList.remove('hide-slider')
        setTimeout(() => {
            currentSlide.classList.remove('slide-in-left');
        }, 500);
    }
}