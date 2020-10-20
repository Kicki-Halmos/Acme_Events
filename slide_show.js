class Slide_show {
    constructor() {
        this.slide = [{
                date: "18 november 2020",
                artist: "Amason",
                venue: "Mosebacke",
                link: "blablabla"

            },
            {
                date: "20 december 2020",
                artist: "Bennett",
                venue: "Debaser",
                link: "blablabla"

            },
            {
                date: "5 january 2021",
                artist: "Cherrie",
                venue: "Under Bron",
                link: "blablabla"

            },
            {
                date: "20 februari 2021",
                artist: "El Perro Del Mar",
                venue: "Dramaten",
                link: "blablabla"

            }

        ]

        this.slideIndex = 1;
        this.showSlides(this.slideIndex);
    }


    changeSlides(n) {
        this.showSlides((this.slideIndex += n));

    }
    currentSlide(n) {
        let i = this.slideIndex;
        let text = document.getElementById("text_" + i);
        text.innerHTML="";
        let h3 = document.createElement("h3");
        h3.innerHTML=this.slide[i -1].artist;
        text.appendChild(h3);
        let date = document.createElement("p");
        date.innerHTML=this.slide[i -1].date;
        text.appendChild(date);
        let venue =document.createElement("p");
        venue.innerHTML=this.slide[i -1].venue;
        text.appendChild(venue);
        let link = document.createElement("p");
        link.innerHTML=this.slide[i -1].link;
        text.appendChild(link);

    }
    showSlides(n) {


        let slides = document.getElementsByClassName("Slide");
        for (let slide of slides) {
            slide.style.display = "none";
        }
        let dots = document.getElementsByClassName("Navdot");
        for (let dot of dots) {
            dot.classList.remove("selected");
        }
        if (n > slides.length) {
            this.slideIndex = 1;
        }
        if (n < 1) {
            this.slideIndex = slides.length;
        }
        //Array.from(slides).forEach(item => (item.style.display = "none"));
        //Array.from(dots).forEach(
        //item => (item.className = item.className.replace(" selected", ""))
        //);
        this.currentSlide(slides[this.slideIndex - 1].style.display = "block");

        dots[this.slideIndex - 1].className += " selected";
    }
}