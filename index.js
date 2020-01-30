const moment = require('moment');
const fs = require('fs');

var wstream = fs.createWriteStream('time.txt');
let writtenStr = () =>  {wstream.write(moment().format() + '\n')};
setInterval( writtenStr, 1000);
