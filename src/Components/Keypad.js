import React from 'react'
import '../index.css'

const Keypad = (props) =>{
// console.log('keypad props', props)
 let buttonPressed = e =>{
   props.buttonPressed(e.target.value || e.target.name)
 };

  return(

<div id= 'calculator-grid'>
  <button id='span-two' value="AC"  onClick={buttonPressed} > AC</button>
  <button id='delete' value="DEL"  onClick={buttonPressed}> DEL</button>
  <button id='divide' name='/' onClick={buttonPressed}>÷</button>
  <button value={1} onClick={buttonPressed} >1</button>
  <button value={2} onClick={buttonPressed} >2</button>
  <button value={3} onClick={buttonPressed} >3</button>
  <button name='x' onClick={buttonPressed} id='multiply'>x</button>
  <button value={4} onClick={buttonPressed} >4</button>
  <button value={5} onClick={buttonPressed} >5</button>
  <button value={6} onClick={buttonPressed} >6</button>
  <button name='+' onClick={buttonPressed} id='add'>+</button>
  <button value={7} onClick={buttonPressed} >7</button>
  <button value={8} onClick={buttonPressed} >8</button>
  <button value={9} onClick={buttonPressed} >9</button>
  <button  id='subtract' >-</button>
  <button name='.' onClick={buttonPressed}>.</button>  
  <button value={0} onClick={buttonPressed} >0</button>
  <button name='=' onClick={buttonPressed} id='span-two'>=</button>
</div>

  )
}

export default Keypad

