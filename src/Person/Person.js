import React from 'react';
import './Person.css'


const person = (props) => {
    return( 
            <div className="Person">
                <p onClick={ props.deleteOnClickReference }>This side {props.name} and I am {props.age} years old.</p>
                <p>{ props.children }</p>
                <input type="text" onChange={props.nameChangedHandlerReference} value={props.name} />
            </div>
            
        )
}


export default person;