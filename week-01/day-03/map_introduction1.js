'use strict';

// create an empty map
var my_map = new Map();

// print out whether the map is empty or not
if (my_map.size === 0){
  console.log('the map is empty!');
} else {
  console.log('its not empty.');
}

// Add the key-value pairs to the map
my_map.set(97, 'a');
my_map.set(98, 'b');
my_map.set(99, 'c');
my_map.set(65, 'A');
my_map.set(66, 'B');
my_map.set(67, 'C');

// print all the keys
console.log(my_map.keys());

// print all the values
console.log(my_map.values());

// add value D with the key 68
my_map.set(68, 'D');

// print how many key-value pairs are in the map
console.log(my_map.size);

// print the value that is associated with key 99
console.log(my_map.get(99));

// remove the key-value pair where with key 97
my_map.delete(97);

// print whether there is an associated value with key 100 or not
console.log(my_map.has(100));

// remove all the key-value pairs
my_map.clear();

