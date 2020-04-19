/*
*
*        大文件操作（流式操作）
*        fs.createReadStream(path[, options])
*        fs.createWriteStream(path[, options])
*
* */

const path = require('path');
const  fs = require('fs');

let strpath = path.join(__dirname,'filezt.rar');
let dpath = path.join('C:\\Users\\Administrator\\Desktop','zt.rar');

// 基于事件的方式读取
let readStream = fs.createReadStream(strpath);
let writeStream = fs.createWriteStream(dpath);
//
// let num=1;
// readStream.on('data',(chunk)=>{
//     num++;
//     writeStream.write(chunk);
// });
//
// readStream.on('end',()=>{
//     console.log('文件处理完成：'+num);
// });

// pipe 的作用直接把输入流和输出流存入内容进行读取
readStream.pipe(writeStream);




