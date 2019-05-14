// from data.js
var tableData = data;
console.log(tableData)

// go to table
var tbl = d3.select('table')
var tbody = d3.select('tbody')

// loop through data and create rows in table for data
tableData.forEach(function(ufoData){
    console.log(ufoData)
    var row = tbody.append("tr")
    
    Object.entries(ufoData).forEach(function([key,value]){
        console.log(key, value)
        var cell = row.append("th")
        cell.text(value)
    })

})
// create event 
var submit = d3.select("#filter-btn")
submit.on("click", function() {
    d3.event.preventDefault()

    var inputDate = d3.select("#datetime")
    var inputValue = inputDate.property("value")
    console.log(inputDate)
 

    var filteredDate = tableData.filter(ufo => ufo.datetime === inputValue)
    console.log(filteredDate)


tbody.html("")


        filteredDate.forEach(function(searchData){
        console.log(searchData)
        // var row = tbody.html()
        var row = tbody.append("tr")
        
        Object.entries(searchData).forEach(function([key,value]){
            console.log(key, value)
            var cell = row.append("td")
            cell.text(value)
        
    }) 
    
})
})
