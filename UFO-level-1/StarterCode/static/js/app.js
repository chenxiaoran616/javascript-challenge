
//Get a reference to the table body
var tbody=d3.select("tbody");

console.log(data);

//Append table and the data to web page
data.forEach(function(ufoSighting){
    console.log(ufoSighting);
    var row=tbody.append("tr");
    Object.entries(ufoSighting).forEach(function([key,value]){
        console.log(key,value);
        var cell=row.append("td");
        cell.text(value);
    });
});

// from data.js
var tableData = data;

// YOUR CODE HERE!
var button=d3.select("#filter-btn");

button.on("click",function(){

    var tbody=d3.select("tbody");
    // console.log(data);

    var inputElement=d3.select(".form-control");
    var inputValue=inputElement.property("value");

    console.log(inputValue);
    console.log(tableData);

    var filteredData=tableData.filter(ufoSighting => ufoSighting.datetime === inputValue);

    console.log(filteredData);

    tbody.html(``);

    filteredData.forEach(ufoSighting=>{
        console.log(ufoSighting);
        var row=tbody.append("tr");

        row.append('td').text(ufoSighting.datetime);
        row.append('td').text(ufoSighting.city);
        row.append('td').text(ufoSighting.state);
        row.append('td').text(ufoSighting.country);
        row.append('td').text(ufoSighting.shape);
        row.append('td').text(ufoSighting.durationMinutes);
        row.append('td').text(ufoSighting.comments);
    });
})


