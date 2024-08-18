import React, { Component } from 'react';

// 1. Define the interface for the component state
interface CounterState {
  count: number;
}

// 2. Define the class component and type the state
class Counter extends Component<{}, CounterState> { 
  // Initial state
  state: CounterState = {
    count: 0
  }; 
  
  // Increment method
  increment = () => {
    this.setState({ count: this.state.count + 1 }); 
  }; 
  
  render() { 
    return (
      <div> 
        <p>Count: {this.state.count}</p> 
        <button onClick={this.increment}>Increment</button> 
      </div> 
    );
  }
} 

export default Counter;
