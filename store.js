class Store {
  static getEvents() {
    let events;

    if (localStorage.getItem("events") === null) {
      events = [];
    } else {
      events = JSON.parse(localStorage.getItem("events"));
    }

    return events;
  }

  static addEvents(event) {
    const events = Store.getEvents();
    console.log(events);
    events.push(event);
    //console.log(events);

    localStorage.setItem("events", JSON.stringify(events));
    //this.printEvents(Store.getEvents());
  }

  static deleteEvents(){

  }

  static printEvents(list){
    let div = document.getElementById("adminEvents");
    div.innerHTML = "";
    //let id = 1;
   for (let item of list){
     let p = document.createElement("p");
     p.innerHTML = item.artist + " ";
     let span = document.createElement("span");
     let button = document.createElement("button");
     button.setAttribute("class", "delete");
     button.innerHTML = "ta bort";
     div.appendChild(span);
     span.appendChild(p);
     let p1 = document.createElement("p");
     p1.innerHTML = item.date;
     span.appendChild(p1);
      span.appendChild(button);
      //console.log(document.getElementById(id));
      //id++;

}    
  }
}
