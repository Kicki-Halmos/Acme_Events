document.addEventListener("DOMContentLoaded", function(e){

let slide_show = new Slide_show(); //skapar ett nytt objekt av klassen Slide_show

document.querySelector(".prevBtn").addEventListener("click", function() {  //vid klick pil bakåt
    slide_show.changeSlides(-1);                                           //anropar funktionen changeSlides och ger den -1 som inparameter
 });
 document.querySelector(".nextBtn").addEventListener("click", function () { //vid klick pil framåt
    slide_show.changeSlides(1);                                             //anropar funktionen changeSlides och ger den 1 som inparameter
 }); 
});