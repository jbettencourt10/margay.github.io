### In this exercise, we will go over how to create a simple scatter chart using the d3 library

This tutorial will go over the steps to create a basic scatter chart with d3 with some code samples. Code samples that are identical to the previous lesson will not be shown again.

1. start with html script to load d3 and create a div for the graph, and set a svg area at the beginning of the JavaScript code(this is where the visualization will show), the svg will be appended to the body of the page. This is always the first step to create a visualization with d3.

2. in the JavaScript script, load and parse the intended dataset for the scatter plot.
the sample data has two variables `GrLivArea` and `Sale Price`
```
d3.csv("https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/2_TwoNum.csv", function(data) {
  // note that following steps will be in here
});
```

4. create X and Y axis 
```
// Add X axis
var x = d3.scaleLinear()
  .domain([0, 4000])
  .range([ 0, width ]);
svg.append("g")
  .attr("transform", "translate(0," + height + ")")
  .call(d3.axisBottom(x));

// Add Y axis
var y = d3.scaleLinear()
  .domain([0, 500000])
  .range([ height, 0]);
svg.append("g")
  .call(d3.axisLeft(y));
```
why do we use a different scaling method here for the x-axis?

5. add dots to the graph
```
svg.append('g')
  .selectAll("dots")
  .data(data)
  .enter()
  .append("circle")
    .attr("cx", function (d) { return x(d.GrLivArea); } )
    .attr("cy", function (d) { return y(d.SalePrice); } )
    .attr("r", 1.5)
    .style("fill", "#69b3a2")
```

## think
Could you make the dots in a different color? 
Could you make the dots bigger? smaller? into different shapes?
If there is an additional attribute could you make the plot reflect that in addition to `GrLivArea` and `SalePrice`?
Could you scale the data differently?

# tutorial from d3-graph-gallery.com