# Creating Scales with D3

Scales are a way to map data to visual properties. For example, you can use a scale to map a data value to a pixel value. This is useful when you want to create a visualization that uses a continuous range of values. For example, you might want to map a data value to a pixel value to create a bar chart. You can also use a scale to map a data value to a color value. This is useful when you want to create a visualization that uses a continuous range of colors. For example, you might want to map a data value to a color value to create a choropleth map (explained later).

## Creating a Linear Scale

A practical example is a bar chart. In a bar chart, you want to map a data value to a pixel value. You can use a linear scale to do this. A linear scale is a function that takes a data value as an argument and returns a pixel value as a result. The linear scale is created using the `d3.scaleLinear()` method. The `d3.scaleLinear()` method takes two arguments. The first argument is the minimum value of the data. The second argument is the maximum value of the data. The `d3.scaleLinear()` method returns a linear scale function. The linear scale function takes a data value as an argument and returns a pixel value as a result.

```js
const linearScale = d3.scaleLinear()
  .domain([0, 100])
  .range([0, 500]);
```

Now, you can use the linear scale function to map data values to pixel values. For example, you can use the linear scale function to map the data value 50 to the pixel value 250.

```js
const pixelValue = linearScale(50);

console.log(pixelValue);
// 250
```

## Creating a Time Scale

A time scale is a function that takes a date as an argument and returns a pixel value as a result. The time scale is created using the `d3.scaleTime()` method. The `d3.scaleTime()` method takes two arguments. The first argument is the minimum date of the data. The second argument is the maximum date of the data. The `d3.scaleTime()` method returns a time scale function. The time scale function takes a date as an argument and returns a pixel value as a result.

```js
const timeScale = d3.scaleTime()
  .domain([new Date(2016, 0, 1), new Date(2016, 11, 31)])
  .range([0, 500]);
```

Now, you can use the time scale function to map dates to pixel values. For example, you can use the time scale function to map the date January 1, 2016 to the pixel value 0.

```js
const pixelValue = timeScale(new Date(2016, 0, 1));

console.log(pixelValue);
// 0
```

This scale functionality works especially well with data visualizations.

## Your task:
- Create a linear scale that maps the data value 25 to the pixel value 250 (using a different scale than above).
- Create a time scale that maps the date January 1, 2016 to approximately the pixel value 250 (using a different scale than above).
