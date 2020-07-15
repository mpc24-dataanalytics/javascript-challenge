// from data.js
var tableData = data;

// display UFO sightings
function tableDisplay(ufoSightings) {
    var tbody = d3.select("tbody");
    tbody.html("");
    ufoSightings.forEach((ufoRecord) => {
      var row = tbody.append("tr");
      Object.entries(ufoRecord).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.html(value);
      });
    });
  };
  
  tableDisplay(tableData);

  //create filter on date
  function datefilter (){
    var date=d3.select ("#datetime").property("value");
    filterdata = tableData.filter (row => row.datetime== date);
    console.log(filterdata);
    tableDisplay(filterdata);
  }
  
  d3.selectAll("#filter-btn").on("click",datefilter);

  

