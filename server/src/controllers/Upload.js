var fs = require('fs');;
var async = require('async');
var Excel = require('exceljs');

module.exports = function(Wagon) {
  Wagon.handleUpload  = function(date,file,cb){
    console.log('handling file in wagon',file)
    var uploaded = new Excel.Workbook();
    uploaded.xlsx.readFile("./fileUpload/wagons/"+file.name).then(function(){
      console.log('sheet loaded')
      var kijfhoek = uploaded.getWorksheet("Beschikbaar")
      var wagons = [];
      kijfhoek.eachRow(function(row, rowNumber) {
        wagons.push({wagonNumber:kijfhoek.getCell('H'+rowNumber).value.trim(),availableDate:date,location:"Kijfhoek"})
      });
      var sloe = uploaded.getWorksheet("SLOE")
      sloe.eachRow(function(row, rowNumber) {
        wagons.push({wagonNumber:sloe.getCell('G'+rowNumber).value.trim(),availableDate:date,location:"Sloe"})
      });
      async.each(wagons,function(wagon,ecb){
        Wagon.findOrCreate(wagon,function(err, created){
          ecb();
        })
      },function(){
        cb();
      })
    })
  }
