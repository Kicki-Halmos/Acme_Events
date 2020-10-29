document.addEventListener("DOMContentLoaded", function(e){

    let slide_show = new Slide_show(); //skapar ett nytt objekt av klassen Slide_show
    
    document.querySelector(".prevBtn").addEventListener("click", function() {  //vid klick pil bakåt
        slide_show.changeSlides(-1);                                           //anropar funktionen changeSlides och ger den -1 som inparameter
     });
     document.querySelector(".nextBtn").addEventListener("click", function () { //vid klick pil framåt
        slide_show.changeSlides(1);                                             //anropar funktionen changeSlides och ger den 1 som inparameter
     }); 
    
    });

class Slide_show {
    constructor() {
        this.slide = [{                     //array med utvalda events som ska visas på förstasidan
                date: "18 november 2020",
                artist: "Amason",
                venue: "Mosebacke",
                

            },
            {
                date: "20 december 2020",
                artist: "Bennett",
                venue: "Debaser",
                

            },
            {
                date: "5 january 2021",
                artist: "Cherrie",
                venue: "Under Bron",
                

            },
            {
                date: "20 februari 2021",
                artist: "El Perro Del Mar",
                venue: "Dramaten",
                

            }

        ]

        this.slideIndex = 1;    //sätter startindex för slides till 1
        this.showSlides(this.slideIndex);  //anropar funktionen showSlides och skickar slideIndex 1 som inparameter. sliden börjar alltid på 1 när sidan laddas
    }


    changeSlides(n) {
        this.showSlides(this.slideIndex += n);  //anropar funktionen showslides och ändrar slideIndex utifrån vad som skickas med som inparameter
                                                  // -1 vid pil bakåt och +1 vid pil framåt  
    }   
 
    showSlides(n) {

        let slides = document.getElementsByClassName("slide");  //hämtar alla slides som en HTML-collection
        for (let slide of slides) {                             //sätter varje slide till osynlig, "nollställer slides"
            slide.style.display = "none";
            slide.classList.remove("active");
        }
        let dots = document.getElementsByClassName("navdot");   // hämtar alla dots som en HTML-collection    
        for (let dot of dots) {                                 // tar bort html-klassen selected från varje dot, "nollställer dots"
            dot.classList.remove("selected");
        }
        if (n > slides.length) {    //n är slideIndex som kommer från changeSlide, 
            this.slideIndex = 1;    // gör så att slideIndex börjar om efter 4 (slides.length=4) vid klick framåt
        }
        if (n < 1) {
            this.slideIndex = slides.length;  // gör så att slideIndex hoppar till 4 efter 1 vid klick bakåt
        }
        slides[this.slideIndex -1].classList.add("active");
        this.currentSlide(slides[this.slideIndex - 1].style.display = "block"); //lägger till synlighet för nuvarande slide och skickar med den till currentSlide 
        dots[this.slideIndex - 1].classList.add("selected");  //lägger till klassen selected till nuvarande dot
    }

    currentSlide() {  //uppdaterar text per current slide
        let i = this.slideIndex;
        let text = document.getElementById("text_" + i);  //hämtar textdiv utifrån id
        text.innerHTML="";                                //nollställer textdiven  
        let h3 = document.createElement("h3");            //hämtar och skriver ut artis, datum, plats och länk för current slide  
        h3.innerHTML=this.slide[i -1].artist;
        text.appendChild(h3);
        let date = document.createElement("p");
        date.innerHTML=this.slide[i -1].date;
        text.appendChild(date);
        let venue =document.createElement("p");
        venue.innerHTML=this.slide[i -1].venue;
        text.appendChild(venue);
        

    }
}