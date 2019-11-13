import React from 'react';

import {
  StyleSheet,
  css
} from 'aphrodite';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      registration: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
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
    let newRegistration = [];
    newRegistration.push(this.state.firstName);
    newRegistration.push(this.state.lastName);
    newRegistration.push(this.state.email);
    this.setState({
      registration: [...this.state.registration, newRegistration]
    })
  }

  render() {
    const styles = StyleSheet.create({
      'form': {
        display: 'flex',
        flexDirection: 'column',
        width:'250px',
        justifyContent: 'center',
        border:'solid black 1px'
      },
      'App':{
        display:'flex',
        justifyContent: 'center',
        marginTop:'50px',      
      }

    })

    return (
      <div className={css(styles.App)}>
        <form onSubmit={this.handleSubmit} className={css(styles.form)}>
          <h3>Event Registration</h3>
          <input type="text" name="firstName" placeholder="First Name" onChange={this.handleChange}/>
          <input type="text" name="lastName" placeholder="Last Name" onChange={this.handleChange}/>
          <input type="email" name="email" placeholder="Email Address" onChange={this.handleChange}/>
          <input type="submit" value="Submit" />
        </form>
        <ul>
          {this.state.registration.map((element, index) => {
            return <li key={index}>First Name: {element[0]}, Last name: {element[1]}, Email: {element[2]}</li>
            }
          )}
        </ul>
      </div>
    );
  }
}

export default App;