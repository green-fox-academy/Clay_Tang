'use strict';
// Create a PostIt a class that has
// a backgroundColor
// a text on it
// a textColor

class PostIt{
  constructor (text, bgColor, textColor){
    this.backgroundColor = bgColor;
    this.text = text;
    this.textColor = textColor;
  }
}


// Create a few example post-it objects:
// an orange with blue text: "Idea 1"
// a pink with black text: "Awesome"
// a yellow with green text: "Superb!"

const obj1 = new PostIt('Idea 1', 'orange', 'blue');
const obj2 = new PostIt('Awesome', 'pink', 'black');
const obj3 = new PostIt('Superb!', 'yellow', 'green');