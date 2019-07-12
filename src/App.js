import React, {useState}  from 'react';

import './App.css';
import Output from './Components/Output'
import Keypad from './Components/Keypad'

import './App.css'
// import { reset } from 'ansi-colors';

const App = (props) => {

 const [result, setResult] = useState([''])
 const [equal, setEqual] = useState(0)


  let buttonPressed = (buttonValue) =>{
    setResult(result + buttonValue)
    console.log('result', result)
    if(buttonValue === '='){
      calculate()
    }  else if(buttonValue === 'AC' ){
     reset()
    } else if(buttonValue === 'DEL' ){
      console.log('hello',buttonValue)
      backspace()
     }
  }

  let backspace = () =>{
    result().slice(0, -1)
  }

  const reset = () =>{
    setResult('') 
  }


  let calculate = () =>{
   try {
    setResult().eval((result)|| '')
   } catch (e) {
    setResult('error')
   }
   
   }


  return (
    <div className="App">
      <Output answer = {result}/>
      <Keypad buttonPressed = {buttonPressed}/>
    </div>
  );
}
 
export default App;
