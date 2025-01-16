var fspromises = require('fs').promises;
var path = require('path');

const fileops = async () => {  
    try {
        const data = await fspromises.readFile('./files/lorem.txt','utf8');
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

fileops();