

const swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
  loopedSlides: 5, // tối ưu cho loop: đặt >= số slide thực tế
  speed: 800,

  // coverflow tuỳ chỉnh để trông như "vòng"
  coverflowEffect: {
    rotate: 0, // độ nghiêng 2 bên
    stretch: 0,
    depth: 100, // độ sâu 3D
    modifier: 1.2,
    slideShadows: true,
  },

  autoplay: {
    delay: 1800,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  observer: true,
  observeParents: true,
});
