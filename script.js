document.addEventListener("DOMContentLoaded", function () {


    let submit = document.getElementById("submit");

    //let store = new Store();
    Store.printEvents(Store.getEvents());
    submit.addEventListener("click", function (e) {
        e.preventDefault();
        const artist = document.getElementById("artist").value;
        const venue = document.getElementById("venue").value;
        const date_order = document.getElementById("date").value;
        const date = date_order.substring(8) + "-" + date_order.substring(5,7) + "-" + date_order.substring(0,4);
        const artist_bio = document.getElementById("artist_bio").value;
        const genre = document.getElementById("genre").value;
        const link = document.getElementById("link").value

        const event = new Event(artist, venue, date, genre, link, artist_bio);
        //addEvents(event);

        Store.addEvents(event);

        Store.printEvents(Store.getEvents());
        Store.emptyInputs();

    });
    let adminEvents = document.getElementById("adminEvents");
    let submit_edit = document.getElementById("submit_edit");
    let index;
    adminEvents.addEventListener("click", function (e) {
        let p = e.target;
        if (p.classList.contains("delete")) {
            p.parentElement.remove();
            let index = e.target.id;
            Store.deleteEvents(index);
            console.log(index);
        } else {

            index = e.target.id.substring(5);
            console.log(index);
            submit_edit.classList.remove("hide");
            submit.classList.add("hide");
            const artist = document.getElementById("artist");
            const venue = document.getElementById("venue");
            const date_order = document.getElementById("date").value;
            const date = date_order.substring(8) + "-" + date_order.substring(5,7) + "-" + date_order.substring(0,4);
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



    });

    submit_edit.addEventListener("click", function (e) {
        e.preventDefault();
        const artist = document.getElementById("artist").value;
        const venue = document.getElementById("venue").value;
        const date_order = document.getElementById("date").value;
        const date = date_order.substring(8) + "-" + date_order.substring(5,7) + "-" + date_order.substring(0,4);
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








    /*function getEvents()
        {
            let events;
            if (localStorage.getItem("events")===null){
                events = [];
            }
            else {
                events = JSON.parse(localStorage.getItem("events"));
            }

            return events;
        }

        function addEvents(event){
            let events = getEvents();
            events.push(event);

            localStorage.setItem("events", JSON.stringify(events));
        }*/
});