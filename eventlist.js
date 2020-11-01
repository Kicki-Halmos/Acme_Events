document.addEventListener("DOMContentLoaded", function () {
  let eventlist = new EventList();
  let sortSelect = document.getElementById("sort");
 

  sortSelect.addEventListener("change", function () {  //eventlyssnare för sortera event
    eventlist.sortList();
  });

  let filterSelect = document.getElementById("filter");  //eventlyssnare för filtrera event
  filterSelect.addEventListener("change", function () {
    eventlist.filterList();
  });
});

class EventList {
  constructor() {
    this.eventList = Store.getEvents();  //lista för events
    
    this.printEvents(this.eventList);  //skriver ut listan på events-sidan
  }

  sortList() {
    let select = document.getElementById("sort");   //funktion för att sortera events
     
        if (select.value === "date") {
          this.eventList.sort(function (a, b) {
            return new Date(a.date) - new Date(b.date);
          });
          this.printEvents(this.eventList);
        } else {
          this.eventList.sort(function (a, b) {
            return a.genre.localeCompare(b.genre);
          });

          this.printEvents(this.eventList);
        }
      
    }
  

  filterList() {
    let select = document.getElementById("filter");  //funktion för att filtrera events
    let genreList;
{
        genreList = this.eventList.filter((value) => {
          if (value.genre === select.value) {
            return value;
          }
        });
      }
    

    this.printEvents(genreList);
  }

  printEvents(list) {   //funktion som skriver ut events på events-sidan
    let div = document.getElementById("backdrop");
    div.innerHTML = "";
    console.log(list);
    for (let item of list) {
      let div_box1 = document.createElement("div");
      div_box1.setAttribute("class", "box1");
      let p = document.createElement("p");
      p.innerHTML =
        item.date +
        " | " +
        item.artist +
        " | " +
        item.venue +
        " | " +
        item.genre +
        " | ";
      div.appendChild(div_box1);
      div_box1.appendChild(p);
      var temp_link = document.createElement("a");
      temp_link.href = "detail.html";
      temp_link.innerHTML = "More info";
      p.appendChild(temp_link);
    }
  }
}

