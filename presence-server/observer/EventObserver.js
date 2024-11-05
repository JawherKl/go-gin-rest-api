class EventObserver {
    constructor() {
        this.observers = [];
    }

    subscribe(observer) {
        this.observers.push(observer);
    }

    notify(event) {
        this.observers.forEach(observer => observer.update(event));
    }
}
