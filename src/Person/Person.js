import React from 'react';
import styleClasses from './Person.css'


const person = (props) => {

    const rand = Math.random();
    
    if(rand>0.7){
        throw new Error('Something went wrong');
    }

    return( 
            <div className={styleClasses.Person} >
                <p onClick={ props.deleteOnClickReference }>This side {props.name} and I am {props.age} years old.</p>
                <p>{ props.children }</p>
                <input type="text" onChange={props.nameChangedHandlerReference} value={props.name} />
            </div>
            
        )
}


export default person;