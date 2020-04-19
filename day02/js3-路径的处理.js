/*
*        路径操作
*
* */

const path  = require("path");

// 获取路径的最后一部分
// console.log(path.basename('/a/b/as.html'));// as.html
// console.log(path.basename('/a/b/as.html','.html'));// as

// 获取路径
// console.log(__dirname);// D:\project\webjs\nodejs\day02
// console.log(path.dirname('/a/ad/mn.html'));// /a/ad

// 获取扩展名
// console.log(path.extname('index.html'));// .html

// 路径的格式化处理

// path.format(); obj -> string
// path.parse(); string -> obj

// let obj = path.parse(__filename);
// console.log(obj);
// console.log(obj.base);
/*
* {
  root: 'D:\\',根路径
  dir: 'D:\\project\\webjs\\nodejs\\day02',文件的全路径
  base: 'js3-路径的处理.js',文件的名称
  ext: '.js',文件扩展名
  name: 'js3-路径的处理' 文件名称
}


* */


// let objpath ={
//     root:'d:\\',
//     base:'abc.txt',
//     ext:'.txt',
//     name:'abc'
// };
// let strpath = path.format(objpath);
// console.log(strpath); // d:\abc.txt

// 判断路径是否为绝对路径
// console.log(path.isAbsolute('d:\\ff\\'));// true

// 拼接路径 .. 表示上层路径，. 表示当前路径
// 在连接路径的时候，会格式化路径
// console.log(path.join('/foo','bar','bzs/asd','ssa','..'));// \foo\bar\bzs\asd

// 规范化路径
// console.log(path.normalize('/foo/bar//bza/saa/qaa/..'));// \foo\bar\bza\saa
// console.log(path.normalize('c:\\ds\\\\sss\\ff\\qwe\\..\\'));// c:\ds\sss\ff\

// 计算相对路径
//path.relative() 方法根据当前工作目录返回 from 到 to 的相对路径。 如果 from 和 to 各自解析到相同的路径（分别调用 path.resolve() 之后），则返回零长度的字符串。
// 如果将零长度的字符串传入 from 或 to，则使用当前工作目录代替该零长度的字符串。
// console.log(path.relative('/data/orandea/test/aaa', '/data/orandea/impl/bbb'));// ..\..\impl\bbb
// console.log(path.relative('C:\\orandea\\test\\aaa', 'C:\\orandea\\impl\\bbb'));// ..\..\impl\bbb

// 解析路径
// console.log(path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif')); // D:\project\webjs\nodejs\day02\wwwroot\static_files\gif\image.gif

// 两个特殊属性
// console.log(path.delimiter); // ; 表示路径分隔符
// console.log(path.sep);// \ 环境变量分隔符




















