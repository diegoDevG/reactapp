class IndecisionApp extends React.Component {
    constructor(props){
        super(props)
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
        this.handlerPick = this.handlerPick.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.handleRemoveOneOption = this.handleRemoveOneOption.bind(this)
        this.state = {
            options: []
        }
    }
    handleRemoveAll() {
        this.setState(() => ({ options: [] }))
        // this.setState(() =>{
        //     return {
        //         options: []
        //     }
        // })
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

    handleRemoveOneOption(optionToRemove){
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)          
        }))
    }

    handlerPick(){
        const randomNum = Math.floor(Math.random()* this.state.options.length)
        const option = this.state.options[randomNum]
        alert(option)
    }

    handleAddOption(option){
        if(!option){
            return 'Enter a valid value to add item'
        } else if(this.state.options.indexOf(option) >-1){
            return 'This option already exists!'
        }
        this.setState((prevState) => ({ options: prevState.options.concat(option) }))
        // this.setState((prevState) =>{
        //     return {
        //         options: prevState.options.concat(option)
        //     }
        // })
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
        </div>
        )
    }
}


// *****************************************
// Stateless = usando funciones para crear los componentes
// *******************************************


const Header = (props) =>{
    return(
         <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    )
}

Header.defaultProps = {
    title: 'Indecision App'
}

const Action = (props) =>{
    return(
        <div>
            <button 
            onClick= {props.handlerPick}
            disabled={!props.hasOptions}>
            What should I do?
            </button>
        </div>
    )
}
const Options = (props) =>{
    return(
        <div>
             <button onClick= {props.handleRemoveAll}>Remove All</button>
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
const Option = (props) =>{
    return(
         <div>               
            Option: {props.optiontext}
            <button 
            onClick={(e) => {
                props.handleRemoveOneOption(props.optiontext)
            }}
            >
            Remove
            </button>          
         </div>
        )
}
// *** Fin de stateless components

// *****************************************
// usando componentes basados en clases
// *******************************************

// class Header extends React.Component {
//     render() {
//         return (
//         <div>
//             <h1>{this.props.title}</h1>
//             <h2>{this.props.subtitle}</h2>
//         </div>
//         )
//     }
// }

// class Action extends React.Component{   
//     render(){
//         return(
//             <div>
//                 <button 
//                 onClick= {this.props.handlerPick}
//                 disabled={!this.props.hasOptions}>
//                 What should I do?
//                 </button>
//             </div>
//         )
//     }
// }

// class Options extends React.Component{   
//     render(){
//         return(
//             <div>
//                  <button onClick= {this.props.handleRemoveAll}>Remove All</button>
//                 <ol>
//                     {this.props.options.map((option) => <Option key={option} optiontext={option}/>)}               
//                 </ol>          
            
//             </div>   
//             )    
//     }
// }

// class Option extends React.Component{
//        render (){
//         return(
//             <div>               
//               Option: {this.props.optiontext}
//             </div>
//         )
//     }
// }
// Fin de components based on classes


class AddOption extends React.Component{
    constructor(props){
        super(props)
        this.handleAddOption =this.handleAddOption.bind(this)
        this.state = { error: undefined }
    }
    handleAddOption(e){
        e.preventDefault()
        const option = e.target.elements.option.value.trim();
        const error =  this.props.handleAddOption(option)
        
        this.setState (() => ({ error }))
        // this.setState(()=>{
        //    return { error }
        // })

        if(!error){
            e.target.elements.option.value =''
        }

    }
    render(){        
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}                
                <form onSubmit= {this.handleAddOption}>
                    <input type="text" name="option"/>
                    <button>Add Option</button>
                </form>
            </div>
        )
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))





