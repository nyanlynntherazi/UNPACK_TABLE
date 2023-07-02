/**
 * Unpack Table By Specific Column
 *
 * @param {value,Split Column Index, Averaged Column Index}
 * @return Transformed Table
 * @customfunction
 */

function UNPACK_TABLE(values,iteratorColumn,averagedColumn) {

  var transformedArray = [];

  values.forEach(function(row) {
    console.info("TA"+transformedArray)  
    var items = row[iteratorColumn-1];
    var cost = row[averagedColumn-1];

    var splitItems = items.split(","); // Split the comma-separated items
      

      for(i=0; i<splitItems.length; i++) {

          var updatedRow = row.slice(); // Create a copy of the row array

            updatedRow.splice(iteratorColumn-1, 1, splitItems[i].trim());
            updatedRow.splice(averagedColumn-1, 1, cost/splitItems.length);
            
            transformedArray.push(updatedRow);
            
          };
    
  });

  
  return transformedArray
}
