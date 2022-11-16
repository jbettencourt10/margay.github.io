# Welcome to D3.js!

D3.js allows you to use the power of CSS selectors to select elements in the DOM and apply data to them. This is a powerful tool that allows you to create dynamic visualizations.

This lesson will introduce you to the basics of D3.js. You will learn how to select elements, append elements, and set attributes. You will also learn how to use the data method to bind data to elements. Finally, you will learn how to use the enter and exit methods to add and remove elements based on data.

## The most common d3.js functions

### select()
The select method is used to select a single element from the DOM. It returns a single element. If multiple elements match the selector, only the first matching element will be returned. The select method is most commonly used to select the SVG element. The select method takes a string as an argument. The string is a CSS selector that matches the element you want to select. The select method returns a reference to the selected element.

### selectAll()
The selectAll method is used to select multiple elements from the DOM. It returns a selection of elements. The selectAll method is most commonly used to select multiple SVG elements. The selectAll method takes a string as an argument. The string is a CSS selector that matches the elements you want to select. The selectAll method returns a reference to the selected elements.

### enter()
The enter method is used to create new elements in the DOM. It returns a selection of elements. The enter method is most commonly used to create new SVG elements. The enter method takes a string as an argument. The string is a CSS selector that matches the elements you want to create. The enter method returns a reference to the created elements.

### exit()
The exit method is used to remove elements from the DOM. It returns a selection of elements. The exit method is most commonly used to remove SVG elements. The exit method takes a string as an argument. The string is a CSS selector that matches the elements you want to remove. The exit method returns a reference to the removed elements.

### append()
The append method is used to add new elements to the DOM. It returns a selection of elements. The append method is most commonly used to add new SVG elements. The append method takes a string as an argument. The string is a CSS selector that matches the elements you want to add. The append method returns a reference to the added elements.

### attr()
The attr method is used to set the attributes of elements in the DOM. It returns a selection of elements. The attr method is most commonly used to set the attributes of SVG elements. The attr method takes two arguments. The first argument is a string that matches the attribute you want to set. The second argument is a string that matches the value you want to set the attribute to. The attr method returns a reference to the elements with the updated attributes.

### text()
The text method is used to set the text content of elements in the DOM. It returns a selection of elements. The text method is most commonly used to set the text content of SVG elements. The text method takes a string as an argument. The string is the text content you want to set. The text method returns a reference to the elements with the updated text content.

### style()
The style method is used to set the style of elements in the DOM. It returns a selection of elements. The style method is most commonly used to set the style of SVG elements. The style method takes two arguments. The first argument is a string that matches the style you want to set. The second argument is a string that matches the value you want to set the style to. The style method returns a reference to the elements with the updated style.

### Your task:
- First, use the select method to select the SVG element.
- After doing this, use the append method to add a circle to the SVG element.
- Finally, use the attr method to set the cx and cy attributes of the circle to 100 and the color to red.
