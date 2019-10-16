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
])

// How much is the fish?
console.log(product_database.get('Fish'));

// What is the most expensive product?
var most_expensive_price = 0;
var most_expensive_product ='';
product_database.forEach((price, product) => {
  if (price > most_expensive_price){
    most_expensive_price = price;
    most_expensive_product = product;
  }
})
console.log(most_expensive_product);

// What is the average price?
var total = 0;
product_database.forEach(price => {
  total += price;
})

console.log(`the average price is: ${total/product_database.size}`);

// How many products' price is below 300?
var count = 0;
product_database.forEach(price => {
  if (price < 300) {
    count += 1;
  }
})

console.log(`${count} products' price is below 300.`);



// Is there anything we can buy for exactly 125?
var buy_stuff_with_125 = false;
product_database.forEach(price => {
  if (price === 125 ){
    buy_stuff_with_125 = true;
  } 
})
console.log(buy_stuff_with_125);


// What is the cheapest product?
var cheapest_price = Number.MAX_SAFE_INTEGER;
var cheapest_product ='';
product_database.forEach((price, product) => {
  if (price < cheapest_price){
    cheapest_price = price;
    cheapest_product = product;
  }
})
console.log(cheapest_product);