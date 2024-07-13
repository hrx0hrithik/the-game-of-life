import React, { useState, useCallback, useRef } from 'react'
import Grid from './components/Grid'
import { createEmptyGrid, nextGeneration } from './utils/GameLogic'

const App = () => {
  const [grid, setGrid] = useState(createEmptyGrid)
  const [running, setRunning] = useState(false)
  const runningRef = useRef(running)
  runningRef.current = running

  const runSimulation = useCallback(() => {
    if (!runningRef.current) {
      return
    }
    setGrid(g => nextGeneration(g))
    setTimeout(runSimulation, 100)
  }, [])

  const toggleCell = (i, j) => {
    const newGrid = grid.map(row => [...row])
          newGrid[i][j] = grid[i][j] ? 0 : 1
          setGrid(newGrid)
  }

  return (
    <div className=' text-center'>
      <h1 className=' text-2xl p-1 font-bold text-white'>Conway's Game of Life</h1>
      <h4 className=' text-sm text-gray-400 mb-1'>Click some boxes or click Random </h4>
      <div className=' w-full h-fit flex justify-center'>
      <Grid
        grid={grid}
        toggleCell={toggleCell}
      />
      </div>
      <div className=' mt-3'>
        <button className=' mx-1 px-2 py-1 bg-purple-400 rounded' onClick={() => {
          setRunning(!running)
          if (!running) {
            runningRef.current = true
            runSimulation()
          }
        }}>
          {running ? 'Stop' : 'Start'}
        </button>
        <button className=' mx-1 px-2 py-1 bg-purple-400 rounded' onClick={() => setGrid(createEmptyGrid())}>
          Clear
        </button>
        <button className={`mx-1 px-2 py-1 bg-purple-400 rounded ${running ? "opacity-50" : "opacity-100" }`} disabled={running} onClick={() => setGrid(
          createEmptyGrid().map(row =>
            row.map(() => (Math.floor(Math.random()*2)))
          )
        )}>
          Random
        </button>
      </div>
    </div>
  )
}

export default App
