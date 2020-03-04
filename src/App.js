import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'
import Radium, {StyleRoot} from 'radium';



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
    
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover':{
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    }

    let classes=[];

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
              return <Person deleteOnClickReference={()=>this.deletePersonHandler(index)} nameChangedHandlerReference={(event)=>this.nameChangedHandler(event,p.id)} 
              name={p.name} age={p.age} key={p.id} ></Person>
            })}
          </div> 
        );
        style.backgroundColor = 'red';
        style[':hover']={
          backgroundColor: 'lightred',
          color: 'black'
        }
    }
    return (
      <StyleRoot>
        <div className="App">
          <h1>Hi, I'm a React App created by Mr. Prayas Arora</h1>
          <p className={classes.join(' ')}>This is really working!</p>
          <button onClick={this.togglePersonHandler} style={style} >Toggle Persons</button>
          {persons}
        </div>
      </StyleRoot>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default Radium(App);



