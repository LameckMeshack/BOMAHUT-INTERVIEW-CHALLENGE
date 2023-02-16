function findMaxInRowAndMinInColumn(matrix) {
  const candidates = new Set();

  for (let i = 0; i < matrix.length; i++) {
    const maxInRow = Math.max(...matrix[i]);
    for (let j = 0; j < matrix[i].length; j++) {
      const minInColumn = Math.min(...matrix.map((row) => row[j]));
      if (matrix[i][j] === maxInRow && matrix[i][j] === minInColumn) {
        candidates.add(matrix[i][j]);
      }
    }
  }

  return Array.from(candidates);
}

const matrix = [
  [5, 16, 20],
  [9, 11, 18],
  [15, 16, 17],
];

console.log(findMaxInRowAndMinInColumn(matrix));