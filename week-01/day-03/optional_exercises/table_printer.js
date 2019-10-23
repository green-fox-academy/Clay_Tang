'use strict';

// Create a function that prints the ingredient list of dictionaries to the console in the following format:
//
// +--------------------+---------------+----------+
// | Ingredient         | Needs cooling | In stock |
// +--------------------+---------------+----------+
// | vodka              | Yes           | 1        |
// | coffee_liqueur     | Yes           | -        |
// | fresh_cream        | Yes           | 1        |
// | captain_morgan_rum | Yes           | 2        |
// | mint_leaves        | No            | -        |
// +--------------------+---------------+----------+
//
// OPTIONAL
// The first column should be automatically as wide as the longest key

const ingredients = [
	{ name: 'vodka', inStock: 1, needsCooling: true },
	{ name: 'coffee_liqueur', inStock: 0, needsCooling: true },
	{ name: 'fresh_cream', inStock: 1, needsCooling: true },
	{ name: 'captain_morgan_rum', inStock: 2, needsCooling: true },
	{ name: 'mint_leaves', inStock: 0, needsCooling: false },
	{ name: 'sugar', inStock: 0, needsCooling: false },
	{ name: 'lime juice', inStock: 0, needsCooling: true },
	{ name: 'soda', inStock: 0, needsCooling: true }
]

function tablePrinter(param){
  let firstColumn = ['Ingredient'.length];
  let second = 'Needs cooling'.length;
  let third = 'In stock'.length;
  param.forEach(value => {
    firstColumn.push(value.name.length);
  })
  let first = Math.max(...firstColumn);
  console.log(`+${'-'.repeat(first)}+${'-'.repeat(second)}+${'-'.repeat(third)}+`);
  console.log(`|Ingredient${' '.repeat(first-'Ingredient'.length)}|Needs cooling|In stock|`);
  console.log(`+${'-'.repeat(first)}+${'-'.repeat(second)}+${'-'.repeat(third)}+`);
  param.forEach(value => {
    if(value.needsCooling && value.inStock){
      console.log(`|${value.name}${' '.repeat(first-value.name.length)}|Yes${' '.repeat(second-'Yes'.length)}|${value.inStock}${' '.repeat(third-1)}|`);
    } else if(value.needsCooling){
      console.log(`|${value.name}${' '.repeat(first-value.name.length)}|Yes${' '.repeat(second-'Yes'.length)}|-${' '.repeat(third-1)}|`);
    } else if(value.inStock){
      console.log(`|${value.name}${' '.repeat(first-value.name.length)}|No${' '.repeat(second-'No'.length)}|${value.inStock}${' '.repeat(third-1)}|`);
    } else {
      console.log(`|${value.name}${' '.repeat(first-value.name.length)}|No${' '.repeat(second-'No'.length)}|-${' '.repeat(third-1)}|`);
    }
    
  })
  console.log(`+${'-'.repeat(first)}+${'-'.repeat(second)}+${'-'.repeat(third)}+`);
}

tablePrinter(ingredients);
