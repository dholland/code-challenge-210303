const fs = require('fs');
const { Module } = require('module');
const equipmentList = require('./equipmentList');




const  filteredData = (arr) => {

  const arr2 = arr.map(object => ({
      name: object.itemMake + " " + object.itemModel,
      category: object.itemCategory,
      image: object.itemImageURL

  })
  )

  const jsonOutput = JSON.stringify(arr2, null, 2)
  return fs.writeFileSync("./equipmentListJson.json",jsonOutput)
};

  filteredData(equipmentList)



  