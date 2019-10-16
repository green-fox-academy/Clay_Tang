'use strict';

// Create a map where the keys are strings and the values are strings with the following initial values
var my_map = new Map([
  ['978-1-60309-452-8', 'A Letter to Jo'],
  ['978-1-60309-452-7', 'Lupus'],
  ['978-1-60309-452-3', 'Red Panda and Moon Bear'],
  ['978-1-60309-452-0', 'The Lab'],
])

// Print all the key-value pairs in the following format
my_map.forEach((value, key) => {
  console.log(`${value} (ISBN: ${key})`);
})

// Remove the key-value pair with key 978-1-60309-444-3
my_map.delete('978-1-60309-444-3');

// Remove the key-value pair with value The Lab
my_map.forEach((value, key) => {
  if (value === 'The Lab'){
    my_map.delete(key);
  }
})

// Add the following key-value pairs to the map
my_map.set('978-1-60309-450-4', 'They Called Us Enemy');
my_map.set('978-1-60309-450-5', 'Why Did We Trust Him?');

// Print whether there is an associated value with key 478-0-61159-424-8 or not
console.log(my_map.has('478-0-61159-424-8'));

// Print the value associated with key 978-1-60309-453-5
console.log(my_map.get('978-1-60309-453-5'));