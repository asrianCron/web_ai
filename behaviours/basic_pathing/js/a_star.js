var data = [10, 20, 30, 40];
var width = $( window ).width();
var barHeight = 20;
var x = d3.scale.linear().domain([0, d3.max(data)]).range([0, width]);
/*
var chart = d3.select(".chart");
var bar = chart.selectAll("div");
var bar_update = bar.data(data);
var bar_enter = bar_update.enter().append("div");
bar_enter.style("width", function(d) { return x(d) + "px";});
bar_enter.text(function (d){ return d;});
bar_enter.attr("class", "chart-bar");
*/

var chart = d3.select(".chart").attr("width", width).attr("height", barHeight * data.length);
var bar = chart.selectAll("g").data(data).enter().append("g").attr("transform", function(d, i) {return "translate(0," + i * barHeight + ")";});
bar.append("rect").attr("width", x).attr("height", barHeight - 1);
bar.append("text").attr("x", function(d) { return x(d) - 3;}).attr("y", barHeight / 2).attr("dy", ".35em").text(function(d) {return d;});