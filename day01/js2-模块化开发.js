/*
*     模块化开发
*     传统非模块化开发有如下的缺点：
*     1、命名冲突
*     2、文件依赖
*
*     前端标准的模块化规范
*     1、AMD - require,js
*     2、CMD - seajs
*
*     服务器端的模块化规范
*     1、CommonJS - Node.js
*
*     模块化相关的规则：
*     1、如何定义模块：一个js文件就是一个模块，模块内部的成员都是相互独立的
*     2、模块成员的导入和导出
*

* */

var sum = function (a,b) {
    return parseInt(a) + parseInt(b);
}
// 导出模块成员 方式1
// exports.sun = sum;

// 导出模块成员 方式2
module.exports = sum;


// 可使用global导出 很少使用

// var flag=123;
// global.flag = flag;



