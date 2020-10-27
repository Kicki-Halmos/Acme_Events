class Store {
  getEvents() {
    let events;

    if (localStorage.getItem("events") === null) {
      events = [];
    } else {
      events = JSON.parse(localStorage.getItem("events"));
    }

    return events;
  }

  addEvents(event) {
    const events = this.getEvents();
    console.log(events);
    events.push(event);
    console.log(events);

    localStorage.setItem("events", JSON.stringify(events));
  }
}
