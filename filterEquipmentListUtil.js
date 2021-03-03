const fs = require('fs');
const equipmentList = require('./equipmentList');



const  filteredData = (arr) => {

  const jsonOutput = JSON.stringify(arr, null, 2)
  
  return fs.writeFileSync("./equipmentListJson.json",jsonOutput)
 
  
  
  
};


filteredData(equipmentList)




