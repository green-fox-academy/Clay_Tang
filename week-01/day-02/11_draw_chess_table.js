// Create a program that draws a chess table like this
//
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % % 
//  % % % %
//

for (var i = 1; i <= 8; i++){
  if (i % 2 === 1){
    console.log('% '.repeat(4));
  } else {
    console.log(' %'.repeat(4));
  }
}