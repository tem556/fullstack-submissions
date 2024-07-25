import { useState } from 'react'

const Button = ({onClick, text}) => (
  <button onClick={onClick}>
    {text}
  </button>
)


const StatisticLine = ({text, value, percentage}) => {
  if (percentage == true) {
    return (<tr>
              <td>{text}</td> 
              <td>{value + '%'}</td> 
            </tr>)
  }

  return (<tr>
            <td>{text}</td>
            <td>{value}</td>
          </tr>)
}

const Statistics = ({good, neutral, bad}) => {
  const all = good + neutral + bad

  if (all == 0) {
    return (
      <div>No feedback given</div>
    )
  }

  return (
    
      <table>
        <tbody>
          <StatisticLine text='good' value={good}/>
          <StatisticLine text='neutral' value={neutral}/>
          <StatisticLine text='bad' value={bad}/>
          <StatisticLine text='all' value={all}/>
          <StatisticLine text='average' value={(good + -1 * bad)/all}/>
          <StatisticLine text='positive' value={good/all * 100} percentage={true}/> 
        </tbody>
      </table>
    
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={() => {setGood(good + 1)}} text='Good' />
      <Button onClick={() => {setNeutral(neutral + 1)}} text='Neutral' />
      <Button onClick={() => {setBad(bad + 1)}} text='Bad' />
      <h1>statistics</h1>

      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App