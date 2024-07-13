export const createEmptyGrid = () => {
    const rows = [];
    for (let i = 0; i < 30; i++) {
      rows.push(Array(30).fill(0));
    }
    return rows;
  };
  
  export const nextGeneration = (grid) => {
    const newGrid = createEmptyGrid();
    const directions = [
      [0, 1], [0, -1], [1, 0], [-1, 0],
      [1, 1], [1, -1], [-1, 1], [-1, -1]
    ];
  
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
        let sum = 0;
        //   Checking for alive neighbors all directions
        directions.forEach(([x, y]) => {
          const newI = i + x;
          const newJ = j + y;
          if (newI >= 0 && newI < 30 && newJ >= 0 && newJ < 30) {
            sum += grid[newI][newJ];
          }
        });
  
        // Condition for will be dead
        if (grid[i][j] === 1 && (sum < 2 || sum > 3)) {
          newGrid[i][j] = 0;
        //   condition for will we alive
        } else if (grid[i][j] === 0 && sum === 3) {
          newGrid[i][j] = 1;
        //   stable
        } else {
          newGrid[i][j] = grid[i][j];
        }
      }
    }
  
    return newGrid;
  };
  