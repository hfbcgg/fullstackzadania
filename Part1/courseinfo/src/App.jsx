import { useState } from 'react'

const   Statisticline =(props) => {
  return(<tr><td>{props.text}</td><td>{props.value}</td></tr>)
}
const Statistics =(props) => {
   if(props.good+props.bad+props.neutral==0){
    return(<p>no feedback given</p>)
   }
   else{
     
  return(<div>
    <table><tbody>
    <Statisticline text="good" value={props.good}/>
    <Statisticline text="neutral" value={props.neutral}/>
    <Statisticline text="bad" value={props.bad}/>
    <Statisticline text="all" value={props.good+props.neutral+props.bad} />
    <Avg good={props.good} bad={props.bad} neutral={props.neutral}/>
    <Pos good={props.good} bad={props.bad} neutral={props.neutral}/>
    </tbody></table></div>
  )
   }
  
}
const Buttons = (props) =>{
  return(<div>
    <button onClick={() => props.setGood(props.good + 1)}>
      good
    </button>
    <button onClick={() => props.setNeutral(props.neutral + 1)}>
      neutral
    </button>
    <button onClick={() => props.setBad(props.bad + 1)}>
      bad
    </button>
    </div>
  )
}
const Avg = (props) =>{
  return(
    <tr><td>average</td><td> {(props.good+(props.bad*-1))/(props.good+props.neutral+props.bad)}</td>
       </tr>
      
  )
}
const Pos = (props) =>{
  return(
<tr><td>positive </td><td>{(props.good*100)/(props.good+props.neutral+props.bad)}%</td>
      
    </tr>
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
      <Buttons good={good} setGood={setGood} bad={bad} setBad={setBad} neutral={neutral} setNeutral= {setNeutral}/>
      <h2>statistics</h2>
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  )
}

export default App