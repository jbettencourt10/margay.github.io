## In this exercise, we will go over how to create a simple bar chart using the d3 library

This tutorial will go over the steps to create a basic bar chart with d3 with some code samples.

1. start with html script to load d3 and create a div for the graph
```
<!DOCTYPE html>
<meta charset="utf-8">

<!-- Load d3.js -->
<script src="https://d3js.org/d3.v6.js"></script>

<!-- Create a div where the graph will take place -->
<div id="my_bar_chart"></div>
```

2. at the beginning of the JavaScript code, set a svg area (this is where the visualization will show), the svg will be appended to the body of the page.
```
// set the dimensions and margins of the graph
var margin = {top: 30, right: 30, bottom: 70, left: 60},
    width = 460 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#my_bar_chart")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");
```

3. in the JavaScript script, load and parse the intended dataset for the bar chart, this could be done with `d3.csv()`, which parse input dataset in csv format from a specified url. Some other ways to load data with d3 are `d3.json()`, `d3.tsv()`, or `d3.xml`, depending on the type of data you intend to load. 
the sample data used here has data on number of sold weapon per country.
```
d3.csv("https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/7_OneCatOneNum_header.csv", function(data) {
  // note that steps 4, 5 will be in here
});
```

4. create X and Y axis (we will be using scales here!)
```
// Add X axis
var x = d3.scaleBand()
  .range([ 0, width ])
  .domain(data.map(function(d) { return d.Country; }))
  .padding(0.2);
svg.append("g")
  .attr("transform", "translate(0," + height + ")")
  .call(d3.axisBottom(x))
  .selectAll("text")
    .attr("transform", "translate(-10,0)rotate(-45)")
    .style("text-anchor", "end");

// Add Y axis
var y = d3.scaleLinear()
  .domain([0, 13000])
  .range([ height, 0]);
svg.append("g")
  .call(d3.axisLeft(y));
```

5. create bars in on the graph
```
svg.selectAll("mybar")
  .data(data)
  .enter()
  .append("rect")
    .attr("x", function(d) { return x(d.Country); })
    .attr("y", function(d) { return y(d.Value); })
    .attr("width", x.bandwidth())
    .attr("height", function(d) { return height - y(d.Value); })
    .attr("fill", "#69b3a2")
```

### think
Could you make the bar chart in a different color? 
Could you make the bars right next to each other? (no gap between bars)
Could you reorder the bars so the country are ordered by the amount of weapons sold to them, in descending order? in ascending order?
Could you make each bar's color dependent on the amount of weapon it's representing?

### tutorial from d3-graph-gallery.com