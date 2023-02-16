function getMaxMin(matrix) {
  const candidates = new Set();
  const m = matrix.length;
  const n = matrix[0].length;

  for (let i = 0; i < m; i++) {
    let maxInRow = matrix[i][0];
    let colIndex = 0;
    for (let j = 1; j < n; j++) {
      if (matrix[i][j] > maxInRow) {
        maxInRow = matrix[i][j];
        colIndex = j;
      }
    }
    let isMinInCol = true;
    for (let k = 0; k < m; k++) {
      if (matrix[k][colIndex] < maxInRow) {
        isMinInCol = false;
        break;
      }
    }
    if (isMinInCol) {
      candidates.add(maxInRow);
    }
  }
  return Array.from(candidates);
}

const matrix = [
  [5, 16, 20],
  [9, 11, 18],
  [15, 16, 17],
];

console.log(getMaxMin(matrix));
