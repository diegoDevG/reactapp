import React from 'react'
// import '../styles/bulma.css'

export default class AddOption extends React.Component{
    state = { error: undefined }
  
    handleAddOption = (e) =>{
        e.preventDefault()
        console.log('testing')
        const option = e.target.elements.option.value.trim();
        const error =  this.props.handleAddOption(option)
        
        this.setState (() => ({ error }))      

        if(!error){
            e.target.elements.option.value =''
        }

    }
    render(){        
        return (
            <div id="add-option" className="has-text-centered">
                <div className="container">
                {this.state.error && <p>{this.state.error}</p>}                
                <form  onSubmit= {this.handleAddOption}>
                    <input type="text" name="option"/>
                    <button className = "success">Add Option</button>
                </form>
                </div>
            </div>
        )
    }
}
