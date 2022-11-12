## Higher Order functions in Javascript

Javascript has a number of built-in functions that take other functions as arguments. These are called higher order functions. We will look at a few of them here. While this is not an exhaustive list of all the higher order functions in Javascript, it will give you a good idea of how they work.

### Array.prototype.map

The `map` function takes an array and a function as arguments. It applies the function to each element of the array and returns a new array with the results. So, something like this

for (var i = 0; i < array.length; i++) {
  array[i] = func(array[i]);
}

turns into this

array.map(func);

The second option is much more readable, and is the preferred way to do this in Javascript. It is also less error prone, and because other people will be able to read your code, it is preferred to use the second option.

### Array.prototype.filter

The `filter` function takes an array and a function as arguments. It applies the function to each element of the array and returns a new array with the elements for which the function returned true. So, something like this

for (var i = 0; i < array.length; i++) {
  if (func(array[i])) {
    newArray.push(array[i]);
  }
}

turns into this

array.filter(func);

Similar to map above, the second option is preferred for use.

### Array.prototype.reduce

The `reduce` function takes an array and a function as arguments. It applies the function to each element of the array and returns a single value. The function takes two arguments, the accumulator and the current element. The accumulator is the value returned by the previous call to the function. The first call to the function will have the accumulator set to the first element of the array. So, something like this

var accumulator = array[0];
for (var i = 1; i < array.length; i++) {
  accumulator = func(accumulator, array[i]);
}

turns into this

array.reduce(func);

Higher order functions are very useful in Javascript. They allow you to write more concise code, and make your code more readable. They also allow you to write code that is more easily testable. You can test the function that you pass to the higher order function, and then test the higher order function with a mock function. This is a very powerful technique that is used in many Javascript libraries.

## You try:

- Write a function that takes an array of numbers and returns an array of the squares of those numbers (using map).
- Write a function that takes an array of numbers and returns an array of the even numbers (using filter).
- Write a function that takes an array of numbers and returns the sum of those numbers (using reduce).
