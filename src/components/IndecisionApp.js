import React from 'react'
import AddOption from './AddOption'
import Option from './Option'
import Header from './Header'
import Action from './Action'
import Options from './Options'
import OptionModal from './OptionModal'

export default class IndecisionApp extends React.Component {
    state = { 
        options:[],
        selectedOption: undefined
     }
 
    handleRemoveAll = () => {
        this.setState(() => ({ options: [] }))        
    }

    handleRemoveOneOption = (optionToRemove) =>{
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)          
        }))
    }

    handlerPick =()=>{
        const randomNum = Math.floor(Math.random()* this.state.options.length)
        const option = this.state.options[randomNum]
        this.setState(() =>({
            selectedOption:option
        }))
    }

    handleClearSelectedOption = () => {
        this.setState(() => ({ selectedOption: undefined }))
    }

    handleAddOption = (option) =>{
        if(!option){
            return 'Enter a valid value to add item'
        } else if(this.state.options.indexOf(option) >-1){
            return 'This option already exists!'
        }
        this.setState((prevState) => ({ options: prevState.options.concat(option) }))       
    }


    componentDidMount() {
        const json = localStorage.getItem('options')
        const options = JSON.parse(json)

        if(options){
            this.setState(() =>({ options }))
            console.log('Fetching data... Mount!')
        }
        
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options)
            localStorage.setItem('options', json)
            console.log('Updated!')
        }
       
    }

      render() {
        // const title = 'Indecision'
        const subtitle = 'Put your life in the hands of a computer'
      
        return (
        <div>
            <Header  subtitle ={subtitle}/>
            <Action 
                hasOptions={this.state.options.length > 0}
                handlerPick={this.handlerPick}
                />
            <Options 
                options = {this.state.options}
                handleRemoveAll={this.handleRemoveAll}
                handleRemoveOneOption ={this.handleRemoveOneOption}/>
            <AddOption
                handleAddOption={this.handleAddOption}
             />
            <OptionModal
                selectedOption=  {this.state.selectedOption}
                handleClearSelectedOption = {this.handleClearSelectedOption}          
             />
        </div>
        )
    }
}