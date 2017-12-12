console.log('Apps working succesful')

const appRoot = document.getElementById('app')

const app = {
    title: 'Indecision App',
    subtitle: 'just an app on react',
    options: ['One', 'Two']
}

let person = {
    fullName: 'Diego Cardenas',
    age: 34,
    location: 'Bogota'
}

let count=0
const addOne = () => {
    count++
    rendercontent()
} 
const restOne = () => {
    count--
    rendercontent()
}
const reset = () => {
    count = 0
    rendercontent()
}




const getFirstname = (fullName) => person.fullName.split(' ')[0]


let template = (
<div>
    <h1>{getFirstname (person.fullName)}</h1>
    <p>{person.age}</p>
    <p>{person.location}</p>
    
</div>
)
const rendercontent = () => {
    let templateTwo =(
        <div>
            <h1>Count:{count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={restOne}>-</button>
            <button onClick={reset}>Reset</button>
        </div>
    )

    ReactDOM.render(templateTwo, appRoot)
}

rendercontent()