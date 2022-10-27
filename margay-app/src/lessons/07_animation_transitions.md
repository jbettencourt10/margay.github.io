`let svg = d3.select("#animation1"); //Write code below`\
`svg.selectAll('*').remove()`

`svg.append('rect')`\
    `.attr('x',10)`\
    `.attr('y',10)`\
    `.attr('rx', 100)`\
    `.attr('ry', 100)`\
    `.attr('width',100)`\
    `.attr('height',100)`\
    `.attr('stroke', '#234362')`\
    `.attr('fill', '#234362')`
    
`svg.selectAll('rect').transition().duration(1000).attr('x',200).attr('rx',10).attr('ry',10)`