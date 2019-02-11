var tableData = data;
console.log(tableData)
var tbody = d3.select("tbody");

tableData.forEach((UFOsight) => {
    var row = tbody.append("tr");
    Object.entries(UFOsight).forEach(([key, value]) => {
      var cell = tbody.append("td");
      cell.text(value);
    });
  });

var filterbtn = d3.select("#filter-btn");

filterbtn.on("click", function() {
  d3.event.preventDefault();

  var vtbody = d3.select('tbody');
  vtbody.text(" ");
  console.log(vtbody);
  var inputElement = d3.select("#datetime");
  var inputValue = inputElement.property("value");
  console.log("value is used", inputValue);
  var filteredData = tableData.filter(sight => sight.datetime === inputValue);
  console.log("the filtered data", filteredData);
  
  filteredData.forEach(function(UFOfilter) {
    var row = tbody.append("tr");
    Object.entries(UFOfilter).forEach(function ([key, value]) {
      console.log(key, value);
      var cell1 = tbody.append("td");
      cell1.text(value);
    });
  });  
});
