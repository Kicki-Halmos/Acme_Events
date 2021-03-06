document.addEventListener("DOMContentLoaded", function () {


    let submit = document.getElementById("submit");


    Store.printEvents(Store.getEvents());  //skriver ut events från local storage på adminsidan
    submit.addEventListener("click", function (e) {
        let inputs = document.getElementsByClassName("input");  //säkerställer att alla fällt är ifyllda
        for (let item of inputs) {
            if (item.value == "") {
                alert("Please fill out all the fields!");
                return;
            }
        }

        const artist = document.getElementById("artist").value;
        const venue = document.getElementById("venue").value;
        const date = document.getElementById("date").value;
        const artist_bio = document.getElementById("artist_bio").value;
        const genre = document.getElementById("genre").value;
        const link = document.getElementById("link").value

        const event = new Event(artist, venue, date, genre, link, artist_bio);


        Store.addEvents(event); //lägger till nytt event i local storage

        Store.printEvents(Store.getEvents());  
        Store.emptyInputs();       

    });
    let adminEvents = document.getElementById("adminEvents");
    let submit_edit = document.getElementById("submit_edit");
    let index;
    adminEvents.addEventListener("click", function (e) {
        if (e.target.tagName === "BUTTON") {                    //radera event i local storage
            let p = e.target;       
            if (p.classList.contains("delete")) {
                p.parentElement.remove();
                let index = e.target.id;
                Store.deleteEvents(index);
                console.log(index);
            } else {

                index = e.target.id.substring(5);           //uppdatera event i local storage
                console.log(index);
                submit_edit.classList.remove("hide");
                submit.classList.add("hide");
                const artist = document.getElementById("artist");
                const venue = document.getElementById("venue");
                const date = document.getElementById("date");
                const genre = document.getElementById("genre");
                const link = document.getElementById("link");
                const artist_bio = document.getElementById("artist_bio");
                let list = Store.getEvents();
                artist.value = list[index].artist;
                venue.value = list[index].venue;
                date.value = list[index].date;
                artist_bio.value = list[index].artist_bio;
                genre.value = list[index].genre;
                link.value = list[index].link;


            }

        }



    });

    submit_edit.addEventListener("click", function (e) {
        let inputs = document.getElementsByClassName("input");   //uppdatera event i local storage
        for (let item of inputs) {
            if (item.value == "") {
                alert("Please fill out all the fields!");
                return;
            }
        }
        const artist = document.getElementById("artist").value;
        const venue = document.getElementById("venue").value;
        const date = document.getElementById("date").value;
        const artist_bio = document.getElementById("artist_bio").value;
        const genre = document.getElementById("genre").value;
        const link = document.getElementById("link").value;
        const event = new Event(artist, venue, date, genre, link, artist_bio);


        Store.updateEvents(index, event);
        Store.printEvents(Store.getEvents());
        submit.classList.remove("hide");
        submit_edit.classList.add("hide");
        Store.emptyInputs();

    });


});