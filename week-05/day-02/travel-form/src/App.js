import React from 'react';

import {
  StyleSheet,
  css
} from 'aphrodite';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      age: null,
      gender: null,
      destination: 'SuZhou', // default option value
      dietaryRestriction: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const {
      name,
      value,
      type
    } = event.target;
    type === 'checkbox' ?
      this.setState({
        dietaryRestriction: [...this.state.dietaryRestriction, value]
      }) :
      this.setState({
        [name]: value
      });
  }

  handleSubmit(event) {
    event.preventDefault();
    // console.log(this.state);
    alert(`
    First name: ${this.state.firstName}\n
    Last name: ${this.state.lastName}\n
    Age: ${this.state.age}\n
    Gender: ${this.state.gender}\n
    Destination: ${this.state.destination}\n
    Dietary Restriction: ${this.returnRestriction(this.state.dietaryRestriction)}\n
    `);
  }

  returnRestriction(params) { // remove duplicate values
    return params.filter((value, index) => {
      return params.indexOf(value) === index;
    })
  }

  render() {

    const styles = StyleSheet.create({
      'form': {
        display: 'flex',
        flexDirection: 'column',
        width: '450px',
        padding: '20px',
        border: 'solid 1px black'
      },
      'App': {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '50px'
      },
      'button': {
        width: '80px',
        marginLeft: '180px'
      }
    })

    return (
      <div className={css(styles.App)}>
        <form onSubmit={this.handleSubmit} className={css(styles.form)}>
          <label>
            First Name:
            <input type="text" name="firstName" onChange={this.handleChange}/>
          </label>
          <br/>
          <label>
            Last Name:
            <input type="text" name="lastName" onChange={this.handleChange}/>
          </label>
          <br/>
          <label>
            Age:
            <input type="number" name="age" onChange={this.handleChange}/>
          </label>
          <br/>
          <label>
            Gender:
            <input type="radio" name="gender" value="Male" onChange={this.handleChange}/>Male
            <input type="radio" name="gender" value="Female" onChange={this.handleChange}/>Female
            <input type="radio" name="gender" value="Shemale" onChange={this.handleChange}/>Shemale
            <input type="radio" name="gender" value="TransMan" onChange={this.handleChange}/>TransMan
          </label>
          <br/>
          <label>
            Destination:
            <select name="destination" onChange={this.handleChange}>
              <option value="SuZhou" selected='selected'>SuZhou</option>
              <option value="NanJing">NanJing</option>
              <option value="BeiJing">BeiJing</option>
            </select>
          </label>
          <br/>
          <label>
            Dietary Restriction:
            <input type="checkbox" name="dietaryRestriction" value="Vegetarian" onChange={this.handleChange}/>Vegetarian
            <input type="checkbox" name="dietaryRestriction" value="Kosher" onChange={this.handleChange}/>Kosher
            <input type="checkbox" name="dietaryRestriction" value="Lactose Free" onChange={this.handleChange}/>Lactose Free
          </label>
          <br/>
          <input className={css(styles.button)} type="submit"/>
        </form>
      </div>
    );
  }
}

export default App;