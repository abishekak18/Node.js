// var http = require('http');
// var dt = require('./mymodule');
// var fs=require('fs');

// http.createServer(function(req, res){
//     // fs.readFile('./files/lorem.txt','utf8' ,function(err, data){
//     //     if(err){
//     //         console.log(err);
//     //     }
//     //     res.writeHead(200, {'Content-Type': 'text/html'});
//     //     res.write(data);
//     //     res.end();
//     // });
//     res.write(dt.mydate().toString());
//     res.end('Hello World');
// }).listen(8080);

// // var path = require('path');
// // console.log(path.parse(__filename));

// // var http = require('http');
// // var fspromises = require('fs').promises;
// // var path = require('path');

// // http.createServer(async function(req, res){
// //     res.writeHead(200, {'Content-Type': 'text/html'});
// //     try {
// //         var data = await fileops();
// //         res.write(data);
// //     } catch (error) {
// //         res.write('Error reading file');
// //     }
// //     res.end();
// // }).listen(8080);

// // const fileops = async () => {  
// //     try {
// //         const data = await fspromises.readFile('./files/hello.txt', 'utf8');
// //         return data;
// //     } catch (error) {
// //         console.log(error);
// //         throw error;
// //     }
// // }

// var http = require('http');
// const PORT = 3000;
// const fs = require('fs');

// const server=http.createServer((req, res)=>{
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     fs.readFile('index.html', 'utf8', (err, data)=>{
//         if(err){
//             console.log(err);
//             res.write('Error reading file');
//         }
//         res.write(data);
//         res.end();
//     });
// });

// server.listen(PORT, (error)=>{
//     if(error){
//         console.log('Error starting server');
//     }
//     console.log('Server started on port '+PORT);
// });

// var http = require('http');
// var formidable = require('formidable');
// var fs = require('fs');

// http.createServer(function (req, res) {
//   if (req.url == '/fileupload') {
//     var form = new formidable.IncomingForm();
//     form.parse(req, function (err, fields, files) {
//       if (err) {
//         res.write('Error parsing the file');
//         res.end();
//         return;
//       }
//       var oldpath = files.filetoupload.filepath;
//       var newpath = 'C:/Users/ABISHEK/' + files.filetoupload.originalFilename;
//       fs.rename(oldpath, newpath, function (err) {
//         if (err) {
//           res.write('Error moving the file');
//           res.end();
//           return;
//         }
//         res.write('File uploaded and moved!');
//         res.end();
//       });
//     });
//   } else {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
//     res.write('<input type="file" name="filetoupload"><br>');
//     res.write('<input type="submit">');
//     res.write('</form>');
//     return res.end();
//   }
// }).listen(8080);

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'youremail@gmail.com',
    pass: 'yourpassword'
  }
});

var mailOptions = {
  from: 'youremail@gmail.com',
  to: 'myfriend@yahoo.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

var mailOptions = {
  from: 'youremail@gmail.com',
  to: 'myfriend@yahoo.com, myotherfriend@yahoo.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
}