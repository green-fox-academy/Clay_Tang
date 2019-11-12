import React from 'react';

import {
  StyleSheet,
  css
} from 'aphrodite';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      emailAddress: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCheckingValid = this.handleCheckingValid.bind(this);
  }

  handleChange(event) {
    const {
      name,
      value
    } = event.target;
    this.setState({
      [name]: value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }

  handleCheckingValid() {
    if (this.state.username !== '' && this.state.emailAddress.includes('@') && this.state.password.length >= 8) {
      return false;
    } else {
      return true;
    }
  }

  render() {
    const styles = StyleSheet.create({
      'form': {
        display: 'flex',
        flexDirection: 'column',
        width: '250',
        alignItems: 'center',
      }
    })

    let checkingValid = this.handleCheckingValid();
    
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit} className={css(styles.form)}>
          <input type="text" name="username" placeholder="username" onChange={this.handleChange}/>
          <input type="email" name="emailAddress" placeholder="email address" onChange={this.handleChange}/>
          <input type="password" name="password" placeholder="password" onChange={this.handleChange}/>
          <button type="submit" disabled={checkingValid}>Submit</button>
        </form>
      </div>
    );
  }
}

export default App;