document.addEventListener("DOMContentLoaded", function(e){
let slide_show = new Slide_show();

document.querySelector(".prevBtn").addEventListener("click", () => {
    slide_show.changeSlides(-1);
 });
 document.querySelector(".nextBtn").addEventListener("click", () => {
    slide_show.changeSlides(1);
 });

 
});