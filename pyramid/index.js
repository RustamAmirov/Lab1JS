// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
    const mid = Math.floor((n * 2 - 1) / 2); // Middle index of the pyramid
    for (let row = 0; row < n; row++) {
        let str = '';

        for (let col = 0; col < n * 2 - 1; col++) {
            if (col >= mid - row && col <= mid + row) {
                str += '#';
            } else {
                str += ' ';
            }
        }

        console.log(str);
    }
}

module.exports = pyramid;

