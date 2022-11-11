D3.js, similar to regular JavaScript, allows for method chaining.

Method chaining - when a method is called on an object, it performs the method and returns an object, which allows for another method to be called.

### In this exercise, we will try utilizing method chaining for better readability of codes

An example of method chaining in JavaScript:
```
let arr = [1, 2, 3, 4];
arr = arr.map(x => x^2).filter(x => x%2 == 0);
// arr: [4, 16]

// this is equivalent to
arr = arr.map(x => x^2);
arr = arr.filter(x => x%2 == 0);
```

# d3 methods can also be chained
```
// instead of 
let b = d3.select("body");
let p = b.append("p");
p.text("hello world");
// this appends a paragraph to the selected "body", with text "hello world" on it

// we can do 
d3.select("body").append("p").text("hello world");
```
Method chaining, especially longer chains, should be done with multiple lines for readability, typically each method being done on a new line with indentations.
```
d3.select("body")
  .append("p")
  .text("hello world");
```

