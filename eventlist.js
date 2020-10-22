class EventList {
    constructor() {
        this.eventList = [{ //array med utvalda events som ska visas på förstasidan
                date: "Nov 18 2020",
                artist: "Amason",
                venue: "Mosebacke",
                link: "blablabla",
                genre: "Rock"

            },
            {
                date: "Dec 20 2020",
                artist: "Bennett",
                venue: "Debaser",
                link: "blablabla",
                genre: "Hip-hop"

            },
            {
                date: "Jan 5 2021",
                artist: "Cherrie",
                venue: "Under Bron",
                link: "blablabla",
                genre: "Soul"

            },
            {
                date: "Feb 20 2021",
                artist: "El Perro Del Mar",
                venue: "Dramaten",
                link: "blablabla",
                genre: "Pop"

            },
            {
                date: "Nov 12 2020",
                artist: "Sibille Attar",
                venue: "Mosebacke",
                link: "blablabla",
                genre: "Pop"

            },

            {
                date: "Mar 1 2021",
                artist: "Fever Ray",
                venue: "Under Bron",
                link: "blablabla",
                genre: "Pop"

            },

            {
                date: "Dec 15 2020",
                artist: "Daddy Yankee",
                venue: "Mosebacke",
                link: "blablabla",
                genre: "Soul"

            },

            {
                date: "Mar 8 2021",
                artist: "Silvana Imam",
                venue: "Dramaten",
                link: "blablabla",
                genre: "Hip-hop"

            },
            {
                date: "Apr 2 2021",
                artist: "Kriget",
                venue: "Södra Teatern",
                link: "blablabla",
                genre: "Rock"

            },
            {
                date: "Dec 31 2020",
                artist: "Veronica Maggio",
                venue: "Dramaten",
                link: "blablabla",
                genre: "Pop"

            }


        ]
    }

    sortList() {
        let select = document.getElementById("sort"); //selectruta för att välja hur många frågor (5-10)
        for (let i = 0; i < select.options.length; i++) {

            let opt = select.options[i];

            if (opt.selected){
                if(opt.value === "date"){
                    this.eventList.sort(function (a, b) {
                        // Turn your strings into dates, and then subtract them
                        // to get a value that is either negative, positive, or zero.
                        return new Date(a.date) - new Date(b.date);
                    });

                }

                else{
                    this.eventList.sort(function (a,b){
                        return a.genre - b.genre;
                    });
                    console.log("det funka");
                }
                
            } 
            
          
            //this.updateEvents(this.eventList);


        }
        //console.log(this.eventList);
    }

        filterList() {

            let select = document.getElementById("filter"); //selectruta för att välja hur många frågor (5-10)
            let genreList;
            for (let i = 0; i < select.options.length; i++) {

                let opt = select.options[i];

                if (opt.selected) {
                    genreList = this.eventList.filter((value) => {
                        if (value.genre === opt.value) {
                            return value;
                        }
                    });
                }
            }

            console.log(genreList);


        }

        printEvents() {

        }
    }
