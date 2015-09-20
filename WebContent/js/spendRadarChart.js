  var showRadarChart = function(d){

  if ($('#svg_radar') != null){
     $('#svg_radar').remove();
  }

  var width = 500,
  height = 500,
  outerRadius = height / 2 - 50,
  innerRadius = 30;
  
  var storeCategories = function(d) {
    switch(d){
    case 0: return "Cafeteria"; break;
    case 1: return "Exhibits"; break;
    case 2: return "EMC"; break;
    case 3: return "Industry/Lines of Business"; break;
    case 4: return "Exhibits"; break;
    default: return 0;
    }
  }
  
  var angle = d3.time.scale()
  .range([0, 2 * Math.PI]);
  var radius = d3.scale.pow()
  .exponent(.5)
  //.ticks(2)
  .range([innerRadius, outerRadius]);
  var z = d3.scale.category20b();
  var stack = d3.layout.stack()
    .offset("zero")
    .offset("zero")
    .values(function(d) { return d.values; })
    .x(function(d) { return d.categoryID; })
    .y(function(d) { return d.value; });
	//.y0(function(d) { return d.timeBlock; });
  var nest = d3.nest()
    .key(function(d) { return d.timeBlock; });
  var line = d3.svg.line.radial()
    .interpolate("cardinal-closed")
    .angle(function(d) { return angle(d.categoryID); })
    .radius(function(d) { return radius(d.y0 + d.y); });
  var area = d3.svg.area.radial()
    .interpolate("cardinal-closed")
    .angle(function(d) { return angle(d.categoryID); })
    .innerRadius(function(d) { return radius(d.y0); })
    .outerRadius(function(d) { return radius(d.y0 + d.y); });
  var svg = d3.select("#reports").append("svg")
    .attr("id", "svg_radar")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

 //d3.json("data/spendPatternData.json", function(data) {
// d3.json("http://67.84.50.220:8888/SalesOnDemandWS/webresources/com.ibm.hana.radar", function(data){
d3.csv("data/RADAR.csv", function(data){

//var data2 = _.filter(data.RADAR, function(d){ return d.customerName == getSelectedBubbleName(); });
// underscore won't run :(   :   var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
//use for json: data = data.RADAR;

    data.forEach(function(d) {
		d.categoryID = +d.categoryID;
		d.value = +d.value;
		d.timeBlock = +d.timeBlock;
	if (d.customerName != getSelectedBubbleName()){
		d.value = 0;
	}
  });
  var layers = stack(nest.entries(data));
  
  // Extend the domain slightly to match the range of [0, 2p].
  angle.domain([0, d3.max(data, function(d) { return d.categoryID + 1; })]);
  radius.domain([0, d3.max(data, function(d) { return d.y0 + d.y; })]);
  svg.append("circle")
	.attr("class","background")
    .attr("r", 240)
    .attr("cx", 0)
    .attr("cy", 0)
	.transition()
	.duration(2000)
    .attr("stroke", "darkgray")
    .attr("stroke-width", "2")
    .attr("fill", "lightgray");
    
  svg.selectAll(".layer")
  .data(layers)
  .enter().append("path")
  .attr("class", "layer")
  .transition()
  .duration(2000)
  .attr("d", function(d) { return area(d.values); })
  .style("fill", function(d, i) { return z(i); })
  
  svg.selectAll(".axis")
  .data(d3.range(angle.domain()[1]))
  .enter().append("g")
  .attr("class", "axis")
  .transition()
  .duration(1500)
  .attr("transform", function(d) { return "rotate(" + angle(d) * 180 / Math.PI + ")"; })
  .call(d3.svg.axis()
  .scale(radius.copy().range([-innerRadius, -outerRadius]))
  .orient("left"));
  
  svg.selectAll(".axis")
  .append("text")
  .attr("y", -outerRadius + 10)
  .attr("text-anchor", "middle")
  .attr("font", "16px sans-serif")
  .attr("fill", "black")  
  .attr("transform", function(d) { return "rotate("+ (-angle(d) * 180 / Math.PI) + " 0 " + (-outerRadius) + ")"
  + ", translate(" + Math.sin(angle(d))*-0.50 + " " + (-1*Math.cos(angle(d))*20-10) + ")"
  ;})
  .text(function(d) { return storeCategories(d); });
 
//predictive function
var predFunc=Math.floor(Math.random()*5);

  svg.append("ellipse")
  .attr("class", "predictCircle")
  .attr("rx", 20)
  .attr("ry", 100)
  .attr("cx", 0)
  .attr("cy", -100)
  .attr("stroke", "darkgreen")
  .attr("stroke-width", "2")
  .attr("fill", "lightgreen")
  .attr("opacity", 0.6)
  .attr("transform", function(d) { return ("rotate(" + (72*predFunc) + ",0,0)"); });

  svg.append("text")
  .attr("class", "predictCircle")
  .attr("text-anchor", "left")
  .attr("font", "12px sans-serif")
  .attr("x", 0)
  .attr("y", 0)
  .attr("fill", "none")
  .attr("stroke", "black")
  .text("Predicted Interest")
  .attr("transform", function(d) { return ("translate(" + 120*Math.sin(Math.PI*predFunc/2.5) + " " + -120*Math.cos(Math.PI*predFunc/2.5) + ")"); });
  });
  
  
  
}