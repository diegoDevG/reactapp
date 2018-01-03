import React from 'react'
import { Button } from 'reactbulma'

const Option = (props) =>(
    <div>               
       Option: {props.optiontext}
       <button 
       warning
       onClick={(e) => {
           props.handleRemoveOneOption(props.optiontext)
       }}
       >
       Remove</button>                     
    </div>
   )

export default Option