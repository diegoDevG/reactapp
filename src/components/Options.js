import React from 'react'
import Option from './Option'
// import { Button } from 'reactbulma'

const Options = (props) =>{
    return(
        <div id="options" className="has-text-centered">
            <div className="container">
                <div className="option-header">
                <h1>Your Options</h1>
                <button  onClick= {props.handleRemoveAll}>Remove All</button>
                </div>
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
        </div>   
        )
}


export default Options;