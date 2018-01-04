import React from 'react'

const Header = (props) =>(
    <div id="header">
      
       <section className="section">
            <div className="container has-text-centered">
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