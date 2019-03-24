import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Max', age: 28},
      {name: 'Hyunju', age: 25},
      {name: 'Angela', age: 24}
    ],
    otherState: 'some other value',
    showPersons: false
  }

  switchNameHandler = (newName) => {
    // console.log('Was clicked');
    // DO NOT DO THIS: this.state.persons[1].name = 'Hyunju Woo';
    // DO NOT DO THIS: this.state.persons[0].age = 29;
    this.setState({
      persons: [
        {name: 'Max', age: 29},
        {name: newName, age: 25},
        {name: 'Angela', age: 24}
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name: 'Max', age: 29},
        {name: event.target.value, age: 25},
        {name: 'Angela', age: 24}
      ]
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, I am Hyunju's first React App :)</h1>
        <p>This is really working</p>
        <button 
          style={style}
          onClick={this.togglePersonsHandler}>Toggle persons</button> 
          {
            this.state.showPersons ?
              <div>
                <Person 
                  name={this.state.persons[0].name} 
                  age={this.state.persons[0].age}/>
                <Person 
                  name={this.state.persons[1].name} 
                  age={this.state.persons[1].age}
                  click={this.switchNameHandler.bind(this, 'Hyunju Woo!!')}
                  changed={this.nameChangedHandler}> My hobbie is Reading books</Person>
                <Person 
                  name={this.state.persons[2].name} 
                  age={this.state.persons[2].age}/>
              </div> : null
          }
        
      </div>
    );
    //return(React.createElement('div', {className='App'}, React.createElement('h1', null, 'Hi, I am Hyunju')));
  }
}

export default App;

