document.querySelector(".prevBtn").addEventListener("click", () => {
    changeSlides(-1);
 });
 document.querySelector(".nextBtn").addEventListener("click", () => {
    changeSlides(1);
 });
 let slideIndex = 1;
 showSlides(slideIndex);
 function changeSlides(n) {
    showSlides((slideIndex += n));
    
 }
 function currentSlide(n) {
    showSlides((slideIndex = n));
 }
 function showSlides(n) {
    

    let slides = document.getElementsByClassName("Slide");
    for (slide of slides){
        slide.style.display = "none";
    }
    let dots = document.getElementsByClassName("Navdot");
    for (dot of dots){
        dot.classList.remove("selected");
    }
    if (n > slides.length) {
       slideIndex = 1;
    }
    if (n < 1) {
       slideIndex = slides.length;
    }
    //Array.from(slides).forEach(item => (item.style.display = "none"));
    //Array.from(dots).forEach(
       //item => (item.className = item.className.replace(" selected", ""))
    //);
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " selected";
 }