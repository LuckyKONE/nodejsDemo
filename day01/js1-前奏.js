// node.js前奏

// 包含文件名的全路径
console.log(__filename);
// 当前文件所在文件夹的路径
console.log(__dirname);

// 定时函数
var timer = setTimeout(function () {
    console.log('hello world');
},1000);

// 在清空定时器之前，得先让console先输出
setTimeout(function () {
    clearTimeout(timer);
},2000)

global.console.log('1234556');

// argv 是一个数组，默认情况下，前两项数据分别是：
//  1、node.js环境的路径
// 2、当前执行的js文件的全路径
// 注意：从第三个参数开始表示命令行参数，所加的参数会在argv数组中
console.log(process.argv);

// 打印当前系统的架构信息
console.log(process.arch);























