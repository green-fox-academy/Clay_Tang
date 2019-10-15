'use strict';

// - Create an array named `s` with the following content: `[1, 2, 3, 8, 5, 6]`
// - Change the 8 to 4 with the `.map` method 
// - Print the fourth element as a test

const s = [1, 2, 3, 8, 5, 6].map((i) => {
    if (i === 8){
        i = 4;
    }
    return i;
})


console.log(s);