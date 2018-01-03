import React from 'react'
import { Button } from 'reactbulma'

const Action = (props) =>(
    <div>
        <button 
            info
            onClick= {props.handlerPick}
            disabled={!props.hasOptions}
        >
        What should I do?
        </button>
        
    </div>
)

export default Action