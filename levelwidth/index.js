// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

const Node = require("./node");

function levelWidth(root) {
    const widths = [];
    const queue = [root];

    while (queue.length > 0) {
        const levelSize = queue.length;
        widths.push(levelSize);

        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();
            queue.push(...node.children);
        }
    }

    return widths;
}


const root = new Node(0);

module.exports = levelWidth;
