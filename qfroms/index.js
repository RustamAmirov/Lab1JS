// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2
const Stack = require('./stack');
class Queue {
    constructor() {
        this.state1 = new Stack();
        this.state2 = new Stack();
    }
    add(n) {
        this.state1.data.push(n);
    }
    peek() {

        if (this.state2.data.length === 0) {
            while (this.state1.data.length > 0) {
                this.state2.data.push(this.state1.data.pop());
            }
        };
        return this.state2.data[(this.state2.data.length) - 1];
    }
    remove() {
        if (this.state2.data.length == 0) {
            while (this.state1.data.length > 0) {
                this.state2.data.push(this.state1.data.pop());
            }
        }
        return this.state2.data.pop();
    }

}
const q = new Queue();
q.add(1);
q.add(2);
q.add(3);

console.log(q.remove());
console.log(q.remove());
console.log(q.remove());

console.log(q.remove());


module.exports = Queue;