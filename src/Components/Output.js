import React  from 'react'
import '../index.css'

const Output = (props) => {

           

  return (
    <div id= 'output-grid'>
      <div id='output'>
        <div id='currentNumber'> <p>{props.answer}</p></div>
      </div>
    </div>

  )
}
export default Output