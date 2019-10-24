'use strict';

/* eslint-disable object-shorthand */
function carWrapper(model, color, year, doors, specPropName, specPropValue) {
  // the function should create and return an object with assigning the model,
  // color year and doors to properties with the same name as the variable and
  // it should assign to the specPropName named property the specPropValue
  return {
    model,
    color,
    year,
    doors,
    [specPropName]: specPropValue,
  };
}

function carWrapperB4ES6(model, color, year, doors, specPropName, specPropValue) {
  // the function should create and return an object with assigning the model,
  // color year and doors to properties with the same name as the variable and
  // it should assign to the specPropName named property the specPropValue
  return {
    model:model,
  };
}

console.log(JSON.stringify(carWrapper('Benz', 'black', 1886, 0, 'historical', true)));
console.log(JSON.stringify(carWrapperB4ES6('Benz', 'black', 1886, 0, 'historical', true)));
// expected output: { model: 'Benz', color: 'black', year: 1886, doors: 0, historical: true}
