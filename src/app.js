// class IndecisionApp extends React.Component {
//     render() {
//         const title = 'Indecision'
//         const subtitle = 'Put your life in the hands of a computer'
//         const options = ['Thing one', 'Thing two', 'Thing three']
//         return(
//         <div>
//             <Header title = {title} subtitle ={subtitle}/>
//             <Action />
//             <Options options = {options}/>
//             <AddOption />
//         </div>
//         )
//     }
// }

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
//     handlerPick(){
//         alert('handlerPick')
//     }
//     render(){
//         return(
//             <div>
//                 <button onClick= {this.handlerPick}>What should I do?</button>
//             </div>
//         )
//     }
// }

// class Options extends React.Component{
//     constructor(props){
//         super(props);
//         this.handleRemoveAll= this.handleRemoveAll.bind(this);
//     }
//     handleRemoveAll(){
//         // alert('Handel REmove all')
//         console.log(this.props.options)
//     }
//     render(){
//         return(
//             <div>
//                  <button onClick= {this.handleRemoveAll}>Remove All</button>
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

// class AddOption extends React.Component{
//     handleAddOption(e){
//         e.preventDefault()
//         const option = e.target.elements.option.value.trim();
//         if(option){
//             alert(option)
//         }

//     }
//     render(){

//         return (
//         <form onSubmit= {this.handleAddOption}>
//             <input type="text" name="option"/>
//             <button>Add Option</button>
//         </form>
//         )
//     }
// }

// ReactDOM.render(<IndecisionApp />, document.getElementById('app'))



// ********************************************


class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props)
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this)
        this.state = {
            visibility: false
        }
    }

    handleToggleVisibility(){
       this.setState((prevState)=> {
            return{
                visibility: !prevState.visibility
            }
       })
    }
    render(){
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>{this.state.visibility ? 'Hide details' : 'Show details'}</button>
                {this.state.visibility && (
                    <div>
                        <p>Hey. These are some details yo can now see!</p>
                    </div>
                )}
            </div>
        )
        
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'))