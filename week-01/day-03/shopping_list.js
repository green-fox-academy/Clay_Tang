// Represent the following products with their prices

// Product	Amount
// Milk	1.07
// Rice	1.59
// Eggs	3.14
// Cheese	12.60
// Chicken Breasts	9.40
// Apples	2.31
// Tomato	2.58
// Potato	1.75
// Onion	1.10
// Represent Bob's shopping list

// Product	Amount
// Milk	3
// Rice	2
// Eggs	2
// Cheese	1
// Chicken Breasts	4
// Apples	1
// Tomato	2
// Potato	1
// Represent Alice's shopping list

// Product	Amount
// Rice	1
// Eggs	5
// Chicken Breasts	2
// Apples	1
// Tomato	10
// Create an application which solves the following problems.

var product_price = new Map([
  ['Milk', 1.07],
  ['Rice', 1.59],
  ['Eggs', 3.14],
  ['Cheese', 12.60],
  ['Chicken Breasts', 9.40],
  ['Apples', 2.31],
  ['Tomato', 2.58],
  ['Potato', 1.75],
  ['Onion', 1.10]
]);

var bob_shopping_list = new Map([
  ['Milk', 3],
  ['Rice', 2],
  ['Eggs', 2],
  ['Cheese', 1],
  ['Chicken Breasts', 4],
  ['Apples', 1],
  ['Tomato', 2],
  ['Potato', 1]
]);

var alice_shopping_list = new Map([
  ['Rice', 1],
  ['Eggs', 5],
  ['Chicken Breasts', 2],
  ['Apples', 1],
  ['Tomato', 10]
]);


// How much does Bob pay?
var bob_total = 0;
bob_shopping_list.forEach((amount, product) => {
  bob_total += product_price.get(product) * amount;
});
console.log(bob_total);

// How much does Alice pay?
var alice_total = 0;
alice_shopping_list.forEach((amount, product) => {
  alice_total += product_price.get(product) * amount;
});
console.log(alice_total);

// Who buys more Rice?
if (bob_shopping_list.has('Rice')&&alice_shopping_list.has('Rice')){
  if ( bob_shopping_list.get('Rice') > alice_shopping_list.get('Rice') ){
    console.log('Bob bought more Rice.');
  } else if (bob_shopping_list.get('Rice') < alice_shopping_list.get('Rice')) {
    console.log('Alice bought more Rice.');
  } else {
    console.log('Same.');
  }
} else if (bob_shopping_list.has('Rice') === true ){
  console.log('Bob bought more Rice.');
} else if (alice_shopping_list.has('Rice') === true ){
  console.log('Alice bought more Rice.');
} else {
  console.log('no one bought Rice.')
}




// Who buys more Potato?
if (bob_shopping_list.has('Potato')&&alice_shopping_list.has('Potato')){
  if ( bob_shopping_list.get('Potato') > alice_shopping_list.get('Potato') ){
    console.log('Bob bought more Potato.');
  } else if (bob_shopping_list.get('Potato') < alice_shopping_list.get('Potato')) {
    console.log('Alice bought more Potato.');
  } else {
    console.log('Same.');
  }
} else if (bob_shopping_list.has('Potato') === true ){
  console.log('Bob bought more Potato.');
} else if (alice_shopping_list.has('Potato') === true ){
  console.log('Alice bought more Potato.');
} else {
  console.log('no one bought Potato.');
}


// Who buys more different products?
if (bob_shopping_list.size > alice_shopping_list.size){
  console.log('Bob bought more different products.');
} else if (alice_shopping_list.size > bob_shopping_list.size){
  console.log('Alice bought more different products.');
} else {
  console.log('Same different products.');
}


// Who buys more products? (piece)
var bob_total_products = 0;
var alice_total_products = 0;
bob_shopping_list.forEach(amount => {
  bob_total_products += amount;
})
alice_shopping_list.forEach(amount => {
  alice_total_products += amount;
})

if (bob_total_products > alice_total_products){
  console.log('Bob bought more products.');
} else if (alice_total_products > bob_total_products){
  console.log('Alice bought more products.');
} else {
  console.log('Same amount of products.');
}
