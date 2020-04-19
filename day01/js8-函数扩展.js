/*
*       函数扩展
*       1、参数默认值
*       2、参数结构赋值
*       3、rest参数
*       4、...扩展符
*
*
* */

// || 或运算符
// function foo(parms1) {
//     let p = parms1 || 'hello';
//     console.log(p);
// }
//
// foo();
// foo('嘿嘿');

// 默认参数
// function foo(parms1='嘿嘿') {
//       console.log(parms1);
// }
//
// foo();
// foo('万事如意');

// 参数解构赋值
// function foo({uname='list1',age=12}={}) {
//     console.log(uname,age);
// }
//
// foo();
// foo({uname:'我是',age:14});

// rest参数 剩余参数 会将剩余参数作为一个数组传递
// function foo(a,...params) {
//     console.log(a,params);
// }
// foo(1,2,3);

// 扩展运算符 ...

function foo(a,b,c,d,e) {
    console.log(a+b+c+d+e);
}

// foo(1,2,3,4,5);

let arr = [1,2,3,4,5];
// foo.apply(null,arr);
foo(...arr);

// 合并数组
let arr1 = [1,2,3];
let arr2 =[4,5,6];
let arr3 =[...arr1,...arr2];
console.log(arr3)

