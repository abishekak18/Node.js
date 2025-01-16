// var fs=require('fs');
// fs.readFile('./files/lorem.txt','utf8' ,function(err, data){
//     if(err){
//         console.log(err);
//     }
//     console.log(data);
// });

var format = require('date-fns');
console.log(format.format(new Date(), 'yyyy-dd-MM  HH:mm:ss'));