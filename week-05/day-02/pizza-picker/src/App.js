import React from 'react';

import {
  StyleSheet,
  css
} from 'aphrodite';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      base: '',
      topping: [],
      cut: false,
      comment: ''
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
        topping: [...this.state.topping, value]
      }) :
      (type === 'radio' ?
        this.setState({
          cut: value
        }) :
        this.setState({
          [name]: value
        })
      );
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    const styles = StyleSheet.create({
      'form': {
        display: 'flex',
        flexDirection: 'column',
        width: '300px',
        alignItems: 'center',
        border: 'solid 1px black'
      },
      'App': {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '50px'
      }
    })

    return (
      <div className={css(styles.App)}>
        <form onSubmit={this.handleSubmit} className={css(styles.form)}>
          <label>
            Base<br />
            <select name="base" onChange={this.handleChange}>
              <option value="flatbread">Flatbread</option>
              <option value="thinCrust">Thin Crust</option>
              <option value="sicilianStyle">Sicilian Style</option>
            </select>
          </label>
          <br/>
          <br/>
          <label>
            Toppings<br />
            <input type="checkbox" value="pepperoni" onChange={this.handleChange}/>Pepperoni
            <input type="checkbox" value="mushrooms" onChange={this.handleChange}/>Mushrooms
            <input type="checkbox" value="bacon" onChange={this.handleChange}/>Bacon
          </label>
          <br/>
          <br/>
          <label>
            Cut or Not<br />
            <input type="radio" name="cut" value="cut" onChange={this.handleChange}/>cut
            <input type="radio" name="cut" value="no" onChange={this.handleChange}/>do not cut
          </label>
          <br/>
          <br/>
          <label>
            Any Additional Comment:<br />
            <textarea name="comment" cols="30" rows="10" onChange={this.handleChange}></textarea>
          </label>
          <br/>
          <br/>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default App;