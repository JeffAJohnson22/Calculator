import React, {useState}  from 'react';

import './App.css';
import Output from './Components/Output'
import Keypad from './Components/Keypad'

import './App.css'


const App = (props) => {

 const [result, setResult] = useState('')


  let buttonPressed = (buttonValue) =>{

    setResult(result + buttonValue)
//  console.log({result})
    if( buttonValue === '='){
      calculate()
    } else if (buttonValue === 'DEL' ){
      // console.log(buttonValue)
      backspace()
     }else if(buttonValue === 'AC' ){
     reset()
    } 
  }

const calculate = () =>{
  try{
    
    // eslint-disable-next-line no-eval
    return setResult(eval(result))
  }
  catch (e) {
    return setResult('error')
  }
}

const reset = () =>{
  setResult('') 
}

const backspace = () =>{
  // console.log('result here', result)
let back = result.substr(0,result.length -1)
console.log('back', back)
return setResult(back)

  

  // return  setResult(result + buttonValue).slice(-1, 1)
}

  return (
    <div className="App">
      <Output answer = {result} {...props}/>
      <Keypad buttonPressed = {buttonPressed}/>
    </div>
  );
}
 
export default App;
