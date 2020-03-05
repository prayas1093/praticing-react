import React, { Component } from 'react';
import styleClasses from './App.css';
import Person from './Person/Person'
import ErrorBoundry from './ErrorBoundry/ErrorBoundry'
  



class App extends Component {
  state = {
    persons: [
      { id: '123', name: 'Prayas', age: 26 },
      { id: '321', name: 'Kabir', age: 9 },
      { id: '213', name: 'Viraj', age: 3 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  // switchNameHandler = (name) => {
  //   this.setState( {
  //     persons: [
  //       { id: '123', name: name, age: 28 },
  //       { id: '321', name: 'Manu', age: 29 },
  //       { id: '213', name: 'Stephanie', age: 27 }
  //     ]
  //   } )
  // }


  nameChangedHandler = (event,id) => {
    const personIndex = this.state.persons.findIndex((p)=>{
        return p.id === id;
    })

    const person = {
        ...this.state.persons[personIndex]
    }

    person.name = event.target.value;

    const persons = [...this.state.persons];
        
    persons[personIndex]=person;

    this.setState({persons});


    
  }
  // nameChangeHandler = (event) => {
  //   this.setState({
  //     persons: [
  //       {name: event.target.value, age:28},
  //       {name: this.state.persons[1].name, age: this.state.persons[1].age},
  //       {name: this.state.persons[2].name, age: this.state.persons[2].age}
  //     ]

  //   })
  // }

  togglePersonHandler = () =>{
    const doesShow = this.state.showPersons
    this.setState({showPersons: !doesShow});
  }

  deletePersonHandler = (personIndex) =>{
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons]
    persons.splice(personIndex,1);
    this.setState({persons: persons});
  }

  
  render () {
    
    
    let classes=[];
    let btnClass='';



    if(this.state.persons.length<=2){
      classes.push('red');
    }

    if(this.state.persons.length<=1){
      classes.push('bold');
    }

    let persons = null;
    if(this.state.showPersons === true){
        persons = (
          <div>
            {this.state.persons.map((p,index)=>{
              return <ErrorBoundry key={p.id}>
                <Person deleteOnClickReference={()=>this.deletePersonHandler(index)} nameChangedHandlerReference={(event)=>this.nameChangedHandler(event,p.id)} 
                name={p.name} age={p.age} ></Person>
              </ErrorBoundry>  
            })}
          </div> 
        );
        btnClass=styleClasses.red;
    }
    return (
      
      <div className={styleClasses.App}>
        <h1>Hi, I'm a React App created by Mr. Prayas Arora</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <button onClick={this.togglePersonHandler} className={btnClass } >Toggle Persons</button>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;



