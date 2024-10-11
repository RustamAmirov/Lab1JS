// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

const { LinkedList } = require("../circular/linkedlist");

function fromLast(list, n) {
    let ahead = list.head;
    let past = list.head;
    while (n > 0) {
        ahead = ahead.next;
        n--;
    }
    while (ahead.next) {
        past = past.next
        ahead = ahead.next;
    }
    return past;
}
const list = new LinkedList();
module.exports = fromLast;
