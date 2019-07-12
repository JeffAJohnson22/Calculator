import React, {useState}  from 'react';

import './App.css';
import Output from './Components/Output'
import Keypad from './Components/Keypad'

import './App.css'
// import { reset } from 'ansi-colors';

const App = (props) => {

 const [result, setResult] = useState('')
 const [equal, setEqual] = useState(0)


 

  let buttonPressed = (buttonValue) =>{

    setResult(result + buttonValue)
 
    if( buttonValue === '='){
      calculate()
      console.log('v')
    }  else if(buttonValue === 'AC' ){
     reset()
    } else if(buttonValue === 'DEL' ){
      console.log('hello',buttonValue)
      backspace()
     }
  }

  const calculate = () =>{
    try{
    
      return setResult(eval(result))
    }
  catch (e) {
  
         return setResult('error')
      }
 }


 try {
   
 } catch (error) {
   
 }
  // const calculate = () =>{
 
  //   try {
  
  //    return eval(result)
  
  //   } catch (e) {
  
  //      return setResult('error')
  //   }
    
  //   }

   const backspace = () =>{
    result().slice(0, -1)
  }

  const reset = () =>{
    setResult('') 
  }


 


  return (
    <div className="App">
      <Output answer = {result} {...props}/>
      <Keypad buttonPressed = {buttonPressed}/>
    </div>
  );
}
 
export default App;
