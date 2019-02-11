// from data.js
var tableData = data;
console.log(tableData)


//Getting a reference to the Table boday on the page with the element name.
var tbody = d3.select("tbody");

// // YOUR CODE HERE!

tableData.forEach((UFOsight) => {
    var row = tbody.append("tr");
    Object.entries(UFOsight).forEach(([key, value]) => {
      var cell = tbody.append("td");
      cell.text(value);
    });
  });

  ////an Event listener to filter the Data based on the value entered inside the #input-field
  // Event handlers are just normal functions that can do anything you want
var filterbtn = d3.select("#filter-btn");

filterbtn.on("click", function() {
  //to prevent the whole page to refresh
  d3.event.preventDefault();

  //We need to clear the table body before we can display the filtered data 
  var vtbody = d3.select('tbody');
  vtbody.text(" ");
  console.log(vtbody);

  //select the input element from the index html file
  var inputElement = d3.select("#datetime");

  //Get the value property of the input element
  var inputValue = inputElement.property("value");
  //validate the system is capturing the entered value.
  console.log("value is used", inputValue);

  //filtering
  var filteredData = tableData.filter(sight => sight.datetime === inputValue);

  //cosole the filtered data
  console.log("the filtered data", filteredData);
  

  //append the filtered data into the html table body
  filteredData.forEach(function(UFOfilter) {
    var row = tbody.append("tr");
    Object.entries(UFOfilter).forEach(function ([key, value]) {
      console.log(key, value);
      var cell1 = tbody.append("td");
      cell1.text(value);
    });
  });  
});
