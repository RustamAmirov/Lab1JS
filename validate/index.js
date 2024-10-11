// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

const Node = require("./node");

function validate(node, min = null, max = null) {
    function maxValue(node) {
        if (node === null) return -Infinity;
        return Math.max(node.data, maxValue(node.left), maxValue(node.right));
    }

    function minValue(node) {
        if (node === null) return Infinity;
        return Math.min(node.data, minValue(node.left), minValue(node.right));
    }

    if (node === null) return true;
    if (node.left !== null && maxValue(node.left) >= node.data) {
        return false;
    }
    if (node.right !== null && minValue(node.right) <= node.data) {
        return false;
    }
    return validate(node.left) && validate(node.right);
}

module.exports = validate;


