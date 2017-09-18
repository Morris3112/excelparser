const XLSX = require('xlsx')

    var wb = XLSX.readFile('./src/dataDB.xlsx')
    // console.log(wb.Sheets[wb.SheetNames[0]])
    var worksheet = wb.Sheets[wb.SheetNames[0]]
    var headers = {}
    var data = []
    for(z in worksheet) {
        if(z[0] === '!') continue;
        //parse out the column, row, and value
        var col = z.substring(0,1);
        var row = parseInt(z.substring(1));
        var value = worksheet[z].v;

        //store header names
        if(row == 1) {
            headers[col] = value;
            continue;
        }

        if(!data[row]) data[row]={};
        data[row][headers[col]] = value;
    }
    data.shift()
    data.shift()
    return(data)

module.exports = data
