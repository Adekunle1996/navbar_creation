const navSlide=()=>{
const harmburgerBtn=document.querySelector(".harmburger");
const navlinksItem=document.querySelectorAll(".navlinks li");
const navlinks=document.querySelector(".navlinks");
harmburgerBtn.addEventListener("click", ()=>{
/* display navlinks*/
navlinks.classList.toggle("navlinksDisplay");
navlinksItem.forEach((element, index) => {
    if(element.style.animation){
        element.style.animation='';
    }else{
    element.style.animation=`navItemDisplay 0.5s ease forwards ${index/7 +0.3}s`}; 
})
harmburgerBtn.classList.toggle("toggle");
})
};
navSlide();