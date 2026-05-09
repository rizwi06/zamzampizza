
const swiper = new Swiper('.swiper', {

  // Optional parameters
  effect: "Flip",
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

 autoplay: {
   delay: 4000
  },
  
  

});