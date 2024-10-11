// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.

class Events {
    constructor() {
        this.events = {};

    };
    
    on(eventName, callback) {
        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }
        this.events[eventName].push(callback);
    };

    trigger(eventName) {
        if (this.events[eventName]) {
            for (let ev of this.events[eventName]) {
                ev();
            }
        }
    }

    off(eventName) {
        delete this.events[eventName];
    }
}
const events = new Events();

function onLogin() {
    console.log('User logged in!');
}

function onPurchase() {
    console.log('User made a purchase!');
}

module.exports = Events;
