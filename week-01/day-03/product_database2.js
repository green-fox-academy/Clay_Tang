// We are going to represent our products in a map where the keys are strings representing the product's name 
// and the values are numbers representing the product's price.

// Create a map with the following key-value pairs.

// Product name (key)	Price (value)
// Eggs	200
// Milk	200
// Fish	400
// Apples	150
// Bread	50
// Chicken	550
// Create an application which solves the following problems.

var product_database = new Map([
  ['Eggs', 200],
  ['Milk', 200],
  ['Fish', 400],
  ['Apples', 150],
  ['Bread', 50],
  ['Chicken', 550]
]);

// Which products cost less than 201? (just the name)
var products_less_than_201 = []
product_database.forEach((price, name) => {
  if (price < 201){
    products_less_than_201.push(name);
  }
})

console.log(...products_less_than_201);

// Which products cost more than 150? (name + price)
var products_more_than_150 = {}
product_database.forEach((price, name) => {
  if (price > 150){
    products_more_than_150[name] = price;
  }
})

console.log(products_more_than_150);