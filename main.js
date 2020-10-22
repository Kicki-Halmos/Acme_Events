document.addEventListener("DOMContentLoaded", function(e){
let eventlist = new EventList();
let sortSelect = document.getElementById("sort");

sortSelect.addEventListener("change", function(){
    eventlist.sortList();
})

let filterSelect = document.getElementById("filter");
filterSelect.addEventListener("change", function(){
    
    
    eventlist.filterList();

}); 



let slide_show = new Slide_show(); //skapar ett nytt objekt av klassen Slide_show

document.querySelector(".prevBtn").addEventListener("click", function() {  //vid klick pil bakåt
    slide_show.changeSlides(-1);                                           //anropar funktionen changeSlides och ger den -1 som inparameter
 });
 document.querySelector(".nextBtn").addEventListener("click", function () { //vid klick pil framåt
    slide_show.changeSlides(1);                                             //anropar funktionen changeSlides och ger den 1 som inparameter
 });

 
});