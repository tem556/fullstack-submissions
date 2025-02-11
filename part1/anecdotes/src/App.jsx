import { useState } from 'react'

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const handleNextClick = () => {
    const randInt = getRandomInt(8)
    setSelected(randInt)
  }

  const handleVoteClick = () => {
    const copy = {...points}
    copy[selected] += 1
    setPoints(copy)
  }
   
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState({0: 0, 1:0, 2:0, 3:0, 4:0, 5:0, 6:0, 7:0})

  const func = ([key1, value1], [key2, value2]) => {
    if (value1 > value2) 
      return [key1, value1]
    else 
      return [key2, value2]
  }

  const mostVotes = Object.entries(points).reduce(func)

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <div> {anecdotes[selected]} </div>
      <div>has {points[selected]} votes</div>
      <button onClick={handleNextClick}>
        next anecdote
      </button>
      <button onClick={handleVoteClick}>
        vote
      </button>
      <h1>Anecdote with most votes</h1>
      <div> {anecdotes[mostVotes[0]]}  </div>
      <div> has {mostVotes[1]} votes  </div>
    </div>
  )
}

export default App