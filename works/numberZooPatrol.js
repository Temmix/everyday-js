/** 
Background:
You're working in a number zoo, and it seems that one of the numbers has gone missing!

Zoo workers have no idea what number is missing, and are too incompetent to figure it out, so they're hiring you to do it for them.

In case the zoo loses another number, they want your program to work regardless of how many numbers there are in total.

Task:
Write a function that takes a shuffled list of unique numbers from 1 to n with one element missing (which can be any number including n). Return this missing number.

Note: huge lists will be tested.

Examples:
[1, 3, 4]  =>  2
[1, 2, 3]  =>  4
[4, 2, 3]  =>  1 

 */

 const findNumber = arr => {
    if(!arr.length) return 1;
  
    const max = arr.reduce((m,v) => m >= v ? m : v, -Infinity) + 1;
    const sum = arr.reduce((a,b) => a + b );
    const x = [...Array(max).keys()].reduce((a,v) => a + v, 0);
    return x - sum === 0 ? max : x - sum;
 }