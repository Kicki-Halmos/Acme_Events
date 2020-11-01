class Store {
  static getEvents() { //funktion för att hämta events från local storage
    let events;

    if (localStorage.getItem("events") === null) {
      events = [];
    } else {
      events = JSON.parse(localStorage.getItem("events"));
    }

    return events;
  }

  static addEvents(event) { //funktion för att lägga till events från local storage
    const events = Store.getEvents();
    //console.log(events);
    events.push(event);
    //console.log(events);

    localStorage.setItem("events", JSON.stringify(events));
    //this.printEvents(Store.getEvents());
  }

  static deleteEvents(index) { //funktion för att radera events från local storage
    const events = Store.getEvents();

    events.splice(index, 1);
    //console.log(events);

    localStorage.setItem("events", JSON.stringify(events));

  }
  static updateEvents(index, event) {
    const events = Store.getEvents();

    events.splice(index, 1, event);
    //console.log(events);

    localStorage.setItem("events", JSON.stringify(events));

  }
  static emptyInputs() { //funktion för att tömma inputs på adminsidan
    document.getElementById("artist").value = "";
    document.getElementById("date").value = "";
    document.getElementById("venue").value = "";
    document.getElementById("artist_bio").value = "";
    document.getElementById("genre").value = "";
    document.getElementById("link").value = "";


  }

  static printEvents(list) { //funktion för att skriva ut events från local storage på adminsidan
    let div = document.getElementById("adminEvents");
    div.innerHTML = "";
    let id = 0;
    for (let item of list) {
      let p = document.createElement("p");
      p.innerHTML = item.artist + " | " + item.date + " | " + item.venue + " | " + item.genre + " | " + item.link + " | " + item.artist_bio + " ";
      let span = document.createElement("span");
      let button_remove = document.createElement("button");
      button_remove.setAttribute("id", id);
      button_remove.setAttribute("class", "delete");
      button_remove.innerHTML = "remove";
      let button_edit = document.createElement("button");
      button_edit.setAttribute("id", "edit_" + id);
      button_edit.innerHTML = "edit";
      div.appendChild(span);
      span.appendChild(p);
      p.appendChild(button_remove);
      p.appendChild(button_edit);
      console.log(document.getElementById(id));
      id++;

    }
  }
}