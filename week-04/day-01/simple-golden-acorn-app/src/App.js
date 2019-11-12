import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrease = this.handleDecrease.bind(this);

  }

  handleIncrement() {
    this.setState({
      count: this.state.count + 1
    })
  }

  handleDecrease() {
    if (this.state.count > 0) {
      this.setState({
        count: this.state.count - 1
      })
    }

  }

  ArrowControl = (event) => {
    if (event.key === 'ArrowUp'){
      this.handleIncrement();
    } else if (event.keyCode === 40){
      this.handleDecrease();
    }
  }


  render = function () {
    return (
      <div className='App'>
        <button onClick={this.handleIncrement}>Buy</button>
        <p>{this.state.count}</p>
        <button onClick={this.handleDecrease}>Eat</button>
        {document.addEventListener('keydown', this.ArrowControl)}
      </div>
    )
  }

}
export default App;