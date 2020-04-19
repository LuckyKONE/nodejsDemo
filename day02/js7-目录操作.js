/*
*      目录操作
*       创建目录
* fs.mkdir(path[, options], callback)
* fs.mkdirSync(path[, options])
*
* 读取目录
* fs.readdir(path[, options], callback)
* fs.readdirSync(path[, options])
*
*
*
* */

const  path = require('path');
const  fs = require('fs');

// 创建目录
// fs.mkdir(path.join(__dirname,'abc'),(err)=>{
//     console.log(err);
// });

// fs.mkdirSync(path.join(__dirname,'hello'));

fs.readdir(__dirname,(err,files)=>{
    files.forEach((item,index)=>{
        console.log(item);
    });
});














