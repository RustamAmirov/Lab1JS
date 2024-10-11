// --- Directions
// Return the 'middle' node of a linked list.
// If the list has an even number of elements, return
// the node at the end of the first half of the list.
// *Do not* use a counter variable, *do not* retrieve
// the size of the list, and only iterate
// through the list one time.
// --- Example
//   const l = new LinkedList();
//   l.insertLast('a')
//   l.insertLast('b')
//   l.insertLast('c')
//   midpoint(l); // returns { data: 'b' }

const { LinkedList } = require("./linkedlist");

function midpoint(list) {
    if (!list.head) {
        return null;
    }
    if (!list.head.next) {
        return list.head;
    }
    if (!list.head.next.next) {
        return list.head;
    }
    let copy = list.head;
    let evenarr = [];
    let oddarr = [];
    let elements = [];
    elements.push(copy, copy.next);
    evenarr.push(copy);
    oddarr.push(copy.next);
    copy = copy.next.next;
    while (copy) {
        evenarr.push(copy);
        elements.push(copy);
        if (copy.next) {
            oddarr.push(copy.next);
            elements.push(copy.next);
            copy = copy.next;

        }
        copy = copy.next;
    }
    let s = evenarr.length + oddarr.length;
    if (s % 2 == 0) {
        return (elements[s / 2 - 1]);
    } else {
        return (elements[Math.floor(s / 2)])
    }
}
const l = new LinkedList();
l.insertLast('a');
l.insertLast('b');
l.insertLast('c');
l.insertLast('d');
l.insertLast('e');
console.log(midpoint(l));
module.exports = midpoint;