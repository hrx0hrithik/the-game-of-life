import React from 'react';

const Grid = ({ grid, toggleCell }) => {
  return (
    <div className='grid' style={{ gridTemplateColumns: `repeat(${grid[0].length}, 20px)` }} >
      {grid.map((row, i) =>
        row.map((cell, j) => (
          <div
            key={`${i, j}`}
            onClick={() => toggleCell(i, j)}
            className={`w-5 h-5 border-gray-700 border ${cell ? 'bg-blue-400' : 'bg-transparent'}`}
          />
        ))
      )}
    </div>
  );
};

export default Grid;
