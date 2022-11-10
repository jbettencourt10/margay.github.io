## Higher Order functions in Javascript

Javascript has a number of built-in functions that take other functions as arguments. These are called higher order functions. We will look at a few of them here.

### Array.prototype.map

The `map` function takes an array and a function as arguments. It applies the function to each element of the array and returns a new array with the results.


### Array.prototype.filter

The `filter` function takes an array and a function as arguments. It applies the function to each element of the array and returns a new array with the elements for which the function returned true.

### Array.prototype.reduce

The `reduce` function takes an array and a function as arguments. It applies the function to each element of the array and returns a single value. The function takes two arguments, the accumulator and the current element. The accumulator is the value returned by the previous call to the function. The first call to the function will have the accumulator set to the first element of the array.
