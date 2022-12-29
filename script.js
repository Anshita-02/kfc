const prevbtn = document.querySelector("#prev");
const nextbtn = document.querySelector("#next");
const test = document.querySelectorAll(".part");
const signin = document.querySelector(".ri-contacts-line");
const modal = document.querySelector("#modal");
const section1 = document.querySelector("#section1");
const section2 = document.querySelector("#section2-cards");
const section3 = document.querySelector("#section3");
const menu = document.querySelector("#menu-images");
const playstore = document.querySelector("#playstore-img");
const close = document.querySelector(".close");
const topcards= document.querySelectorAll(".topcard");
const bottomcards= document.querySelectorAll(".bottomcard");
let maxSlide = test.length;
let curSlide=0;

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  // centeredSlides: true,
  slidesPerView:6,
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});




//to show sign in page
signin.addEventListener('click',function(){
  modal.classList.remove("hidden");
  section1.classList.add("opacity");
  section2.classList.add("opacity");
  section3.classList.add("opacity");
  menu.classList.add("opacity");
  playstore.classList.add("opacity");
});

close.addEventListener('click',function(){
  modal.classList.add("hidden");
  section1.classList.remove("opacity");
  section2.classList.remove("opacity");
  section3.classList.remove("opacity");
  menu.classList.remove("opacity");
  playstore.classList.remove("opacity");
  document.querySelector('#email').value = "";
  document.querySelector('#pass').value = "";
});



//////////////////////////////////////////////add animation on scroll
const initialcoords = section2.getBoundingClientRect().top;
console.log(initialcoords);
window.addEventListener('scroll',function(){
  console.log(this.window.scrollY);
  if(this.window.scrollY>200){
    topcards.forEach(function(val){
      val.classList.add("topcard-anim")
    })
   }
   if(this.window.scrollY>500){
    bottomcards.forEach(function(val){
      val.classList.add("bottom-anim")
    })
   }
  }
)