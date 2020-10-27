document.addEventListener("DOMContentLoaded", function () {
 

    let submit = document.getElementById("submit");

    let store = new Store();
    
    submit.addEventListener("click", function (e) {
        e.preventDefault();
        const artist = document.getElementById("artist").value;
        const venue = document.getElementById("venue").value;
        const date = document.getElementById("date").value;
        const artist_bio = document.getElementById("artist_bio").value;

        const event = new Event(artist, venue, date, artist_bio);
        //addEvents(event);

        
        



        store.addEvents(event);

        
        
       
        
        
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