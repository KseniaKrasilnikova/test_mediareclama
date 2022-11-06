const initSwiper = () => {
  /* eslint-disable-next-line */
  let doctorsSwiper = new Swiper('.swiper--doctors', {
    freeMode: true,
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 10,
    navigation: {
      nextEl: '.doctors-slider__btn--next',
      prevEl: '.doctors-slider__btn--prev',
    },
    breakpoints: {
      500: {
        slidesPerView: 2,
      },
    },
  });
  doctorsSwiper.setGrabCursor();
};

export {initSwiper};
