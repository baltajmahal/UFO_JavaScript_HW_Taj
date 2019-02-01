// from data.js
var tableData = data;

// YOUR CODE HERE!

//--1--collect the value from the input field
//--2--filter the data for the data inputed
//--3--use the foreach toappend the data of each cell
var button = d3.select("#filter-btn");

button.on("click", function(){

    d3.event.preventDefault();

    var query = d3.select("#datetime").property("value");
    console.log(query);
    var filtered_results = tableData.filter(d => d.datetime === query)
    console.log(filtered_results);

    var tbody = d3.select("tbody");

    filtered_results.forEach(function(entry) {
        var row = tbody.append("tr")
        Object.entries(entry).forEach(function([key,value]) {
          row.append("td").text(value);
        });
    });
    

});