import React,{useState, useEffect} from 'react'
import '../index'

const Output = (...props) => {

  let [input, setInput] = useState(0)
  // const [previous, setPrevious] = useState(0)
  const [answer, setAnswer] = useState(0)
  const [operator, setOperator] = useState(0)

 


 console.log('here are props:',props)

  return (
    <div id= 'calculator-grid'>

      <div id='output'>
      {/* <div id='previousNumber'> </div> */}
      <div id='currentNumber'> {input} </div>
      </div>
      <button id='span-two' value="0" onClick={e => setInput(e.target.value)}> AC</button>
      <button id='delete'> DEL</button>
      <button id='divide'>÷</button>

      <button value={1} onClick={e => setInput(e.target.value)}>1</button>
      

      <button value={2} onClick={e => setInput(e.target.value)}>2</button>

    
      <button value={3} onClick={e => setInput(e.target.value)}>3</button>
      <button id='multiply'>x</button>
      <button value={4} onClick={e => setInput(e.target.value)}>4</button>
      <button value={5} onClick={e => setInput(e.target.value)}>5</button>
      <button value={6} onClick={e => setInput(e.target.value)}>6</button>
      <button id='add'>+</button>
      <button value={7} onClick={e => setInput(e.target.value)}>7</button>
      <button value={8} onClick={e => setInput(e.target.value)}>8</button>
      <button value={9} onClick={e => setInput(e.target.value)}>9</button>
      <button  id='subtract' >-</button>
      <button>.</button>  
      <button value={0} onClick={e => setInput(e.target.value)}>0</button>
      <button id='span-two'>=</button>
    </div>

  )
}
export default Output