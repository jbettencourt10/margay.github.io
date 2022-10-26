D3.js provides several unique functions that you may use when creating data visualizations.

### In this exercise, we will cover several of the most common d3.js functions.

## Selecting

The select() method:
The select method is used to select a single element from the DOM. It returns a single element. If multiple elements match the selector, only the first matching element will be returned. The select method is most commonly used to select the SVG element. The select method takes a string as an argument. The string is a CSS selector that matches the element you want to select. The select method returns a reference to the selected element. This reference can be stored in a variable for later use.


selectAll()
The selectAll method is used to select multiple elements from the DOM. It returns a selection of elements. The selectAll method is most commonly used to select multiple SVG elements. The selectAll method takes a string as an argument. The string is a CSS selector that matches the elements you want to select. The selectAll method returns a reference to the selected elements. This reference can be stored in a variable for later use.

enter()
The enter method is used to create new elements in the DOM. It returns a selection of elements. The enter method is most commonly used to create new SVG elements. The enter method takes a string as an argument. The string is a CSS selector that matches the elements you want to create. The enter method returns a reference to the created elements. This reference can be stored in a variable for later use.

exit()
The exit method is used to remove elements from the DOM. It returns a selection of elements. The exit method is most commonly used to remove SVG elements. The exit method takes a string as an argument. The string is a CSS selector that matches the elements you want to remove. The exit method returns a reference to the removed elements. This reference can be stored in a variable for later use.

append()
The append method is used to add new elements to the DOM. It returns a selection of elements. The append method is most commonly used to add new SVG elements. The append method takes a string as an argument. The string is a CSS selector that matches the elements you want to add. The append method returns a reference to the added elements. This reference can be stored in a variable for later use.

attr()
The attr method is used to set the attributes of elements in the DOM. It returns a selection of elements. The attr method is most commonly used to set the attributes of SVG elements. The attr method takes two arguments. The first argument is a string that matches the attribute you want to set. The second argument is a string that matches the value you want to set the attribute to. The attr method returns a reference to the elements with the updated attributes. This reference can be stored in a variable for later use.

text()
The text method is used to set the text content of elements in the DOM. It returns a selection of elements. The text method is most commonly used to set the text content of SVG elements. The text method takes a string as an argument. The string is the text content you want to set. The text method returns a reference to the elements with the updated text content. This reference can be stored in a variable for later use.

style()
The style method is used to set the style of elements in the DOM. It returns a selection of elements. The style method is most commonly used to set the style of SVG elements. The style method takes two arguments. The first argument is a string that matches the style you want to set. The second argument is a string that matches the value you want to set the style to. The style method returns a reference to the elements with the updated style. This reference can be stored in a variable for later use.
