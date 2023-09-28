
import { Component } from 'react';
import './App.css';
import { ClassComponent } from './Components/ClassComponent';
import { FunctionalComponent } from './Components/Functioncomponent';
class App extends Component{
  constructor() {
    super();
    this.state = {
      classDisplay: false,
      functionDisplay: false
    }
  }
render(){
  return (
    <div className="App">
      <header>
      <h1> Styling using Functional and Class Component</h1>
      </header>
      <div className="Buttons">
          <button className='Button1' onClick={() => this.setState({ functionDisplay: !this.state.functionDisplay })}>To See styling in functional component</button>
          <button className='Button1' onClick={() => this.setState({ classDisplay: !this.state.classDisplay })}>To See styling in class component</button>
        </div>
      
      <div className='flex'>
      {this.state.functionDisplay ? <FunctionalComponent /> : null}
      {this.state.classDisplay ? <ClassComponent /> : null}
      </div>
    </div>
  );
}
}

export default App;
