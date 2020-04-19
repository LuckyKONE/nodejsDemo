/*
*     字符串相关扩展方法：
*     includes() 判断字符串中是否包含指定的字符，包含则返回 true ，反之则为false
*         ： 参数一：匹配的字符串
*            参数二：从第几个开始匹配
*     startWith() ：判断字符串是否以指定的字串开始
*     endsWith()：判断字符串是否以指定的字串结束
*
*     模板字符串 ： ``
*
* */
//
// var str='hello world';
// console.log(str.includes('hello'));// true
// console.log(str.includes('world',6));// true

//
// let url ='admin/list.php';
// console.log(url.startsWith('admin'))
//
// console.log(url.endsWith('php'))

let obj={
    username:'lisi',
    age:12,
    gender:'male'
};

let tag='<div><span>'+obj.username+'</span><span>'+obj.age+'</span><span>'+obj.gender+'</span></div>';
console.log(tag)


// 反引号 表示模板，模板中的内容可以有格式，通过 ${}方式填充数据
let tag1 = `
      <div>
      <span>${obj.username}</span>
      <span>${obj.age}</span>
      <span>${obj.gender}</span>
</div>
`;
console.log(tag1);


