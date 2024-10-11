// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    const result = Array.from({ length: n }, () => Array(n).fill(0));
    let startRow = 0, endRow = n - 1;
    let startCol = 0, endCol = n - 1;
    let num = 1;

    while (startRow <= endRow && startCol <= endCol) {
        for (let col = startCol; col <= endCol; col++) {
            result[startRow][col] = num++;
        }
        startRow++;

        for (let row = startRow; row <= endRow; row++) {
            result[row][endCol] = num++;
        }
        endCol--;

        if (startRow <= endRow) {
            for (let col = endCol; col >= startCol; col--) {
                result[endRow][col] = num++;
            }
            endRow--;
        }

        if (startCol <= endCol) {
            for (let row = endRow; row >= startRow; row--) {
                result[row][startCol] = num++;
            }
            startCol++;
        }
    }

    return result;
}

module.exports = matrix;

