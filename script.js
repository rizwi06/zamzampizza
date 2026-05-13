
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


let icon = document.querySelector("#icon")
let overlay = document.querySelector("#overlay")



icon.addEventListener("click",()=>{
 if(overlay.style.display == "block"){
  overlay.style.display="none"
 }
 else{
  overlay.style.display ="block"
 }

})



