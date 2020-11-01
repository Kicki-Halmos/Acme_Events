document.addEventListener("DOMContentLoaded", function (e) {

    let slide_show = new Slide_show();

    document.querySelector(".prevBtn").addEventListener("click", function () {
        slide_show.changeSlides(-1);
    });
    document.querySelector(".nextBtn").addEventListener("click", function () {
        slide_show.changeSlides(1);
    });

});

class Slide_show {
    constructor() {
        this.slide = [{ //array med utvalda events som ska visas på förstasidan
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

        this.slideIndex = 1;
        this.showSlides(this.slideIndex);
    }


    changeSlides(n) { //funktion för att byta slide
        this.showSlides(this.slideIndex += n);

    }

    showSlides(n) { //funktion för att visa slide

        let slides = document.getElementsByClassName("slide");
        for (let slide of slides) {
            slide.style.display = "none";
            slide.classList.remove("active");
        }
        let dots = document.getElementsByClassName("navdot");
        for (let dot of dots) {
            dot.classList.remove("selected");
        }
        if (n > slides.length) {
            this.slideIndex = 1;
        }
        if (n < 1) {
            this.slideIndex = slides.length;
        }
        slides[this.slideIndex - 1].classList.add("active");
        this.currentSlide(slides[this.slideIndex - 1].style.display = "block");
        dots[this.slideIndex - 1].classList.add("selected");
    }

    currentSlide() { //uppdaterar text per current slide
        let i = this.slideIndex;
        let text = document.getElementById("text_" + i);
        text.innerHTML = "";
        let h3 = document.createElement("h3");
        h3.innerHTML = this.slide[i - 1].artist;
        text.appendChild(h3);
        let date = document.createElement("p");
        date.innerHTML = this.slide[i - 1].date;
        text.appendChild(date);
        let venue = document.createElement("p");
        venue.innerHTML = this.slide[i - 1].venue;
        text.appendChild(venue);


    }
}