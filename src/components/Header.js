import React from 'react'

const Header = (props) =>(
    <div>
       <h1>{props.title}</h1>
       {props.subtitle && <h2>{props.subtitle}</h2>}
       <section className="section">
            <div className="container">
            <h1 className="title">
                {props.title}
            </h1>           
                {props.subtitle && <p className="subtitle">{props.subtitle}</p>}         
            </div>
        </section>
   </div>
)

Header.defaultProps = {
    title: 'Indecision App'
}

export default Header