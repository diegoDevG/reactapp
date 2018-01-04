import React from 'react'
// import { Button } from 'reactbulma'

const Action = (props) =>(
    <div id="action" className="has-text-centered">
        <button 
            info
            onClick= {props.handlerPick}
            disabled={!props.hasOptions}
        >
        Elije un ganador!
        </button>
        
    </div>
)

export default Action