$( document ).ready(function() {
  var swiper = new Swiper('.about_container', {
    slidesPerView: 'auto',
    scrollbar: {
      el: '.swiper-scrollbar',
      hide: false,
      draggable: true,
      snapOnRelease: false,
    },
  });
});