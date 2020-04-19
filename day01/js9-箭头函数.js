/*
*
*   箭头函数
*
*
* */

// function foo() {
//     console.log('hello');
// }
//
// let foo1 = () => console.log('world');
// foo1();
//
// function foo2(v) {
//     return v;
// }

// let foo3 = v =>v;
//
// let res = foo3(111)
// console.log(res)

// let foo4 = (a,b)=>console.log(a+b);
// foo4(3,5);

// 多个参数必须采用小括号框起来
// let foo4 = (a,b)=>{
//     let c = 12;
//     console.log(a+b +c);
// }
// foo4(3,5);

let arr =[123,432,543];
// arr.forEach(function (element,index) {
//     console.log(element,index)
// });

arr.forEach((element,index)=>{
    console.log(element,index);
});

// 箭头函数的注意事项
// 1、箭头函数的this取决于的定义，而不是调用
// 2、箭头函数不可以New
// 3、箭头函数不可以使用arguments获取参数列表，可以使用rest参数代替
function foo() {
    console.log(this);
}
foo()




