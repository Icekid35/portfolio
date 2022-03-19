// animate everything onscroll
const alldiv=document.querySelectorAll('div')
const allh1=document.querySelectorAll('h1')
const allh2=document.querySelectorAll('h2')
const allmain=document.querySelectorAll('main')
const allfooter=document.querySelectorAll('footer')
const allspan=document.querySelectorAll('span')
const allbutton=document.querySelectorAll('button')
const allp=document.querySelectorAll('p')
const allElement=[...allp,...alldiv,...allh1,...allh2,...allmain,...allspan,...allfooter,...allbutton]
//observe when element is on the screen
const observer=new IntersectionObserver((elements)=>{
  elements.forEach(element=>{

  element.target.classList.toggle('hide',!element.isIntersecting)
  })
})
allElement.forEach(element=>{
  
  observer.observe(element)
})






// Sticky Navigation Menu JS Code
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");
let val;
window.onscroll = function() {
  if(document.documentElement.scrollTop > 20){
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  }else{
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }

}

// Side NavIgation Menu JS Code
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = function(){
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflow = "hidden";
  scrollBtn.style.pointerEvents = "none";
}
cancelBtn.onclick = function(){
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "auto";
  scrollBtn.style.pointerEvents = "auto";
}

// Side Navigation Bar Close While We Click On Navigation Links
let navLinks = document.querySelectorAll(".menu li a");
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click" , function() {
    navBar.classList.remove("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
  });
}


//change color of my name on mousemove
var myName=document.querySelector('.name')
var alltitle=document.querySelectorAll('.title span')
allchangable=[myName,...allh2,...alltitle]
var change=(e)=>{
  allchangable.forEach(h2=>{
    
  h2.style.color=`rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`


})
  
}
var restore=(e)=>{
  myName.style.color='black'
}
document.onmouseover=change
document.onmousemove=change
document.ontouchmove=change
document.ontouchstart=change
document.onmouseleave=restore


