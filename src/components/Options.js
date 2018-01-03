import React from 'react'
import Option from './Option'
import { Button } from 'reactbulma'

const Options = (props) =>{
    return(
        <div>
            <button  onClick= {props.handleRemoveAll}>Remove All</button>
             {props.options.length === 0 && <p>Please add an option to get started!</p>}
            <ol>
                {props.options.map((option) => 
                <Option 
                key={option} 
                optiontext={option}
                handleRemoveOneOption = {props.handleRemoveOneOption}
                />
                )}               
            </ol>          
        
        </div>   
        )
}


export default Options;