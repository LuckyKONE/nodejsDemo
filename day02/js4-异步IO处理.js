/*
*
*
*          异步I/O input/output
*          1、文件操作
*          2、网络操作
*
*          在浏览器中也存在异步操作
*          1、定时任务
*          2、事件处理
*          3、ajax回调处理
*          js 的运行是单线程的
*          引入了事件队列机制
*
*          Node.js中的事件模型与浏览器中的事件模型类似
*          单线程 + 事件队列
*
*          Node.js中执行异步的任务
*          1、文件I/O
*          2、网络I/O
*
*          基于函数回调的编码风格
*
*
*         文件操作
*         带Sync结尾的方法是同步操作，不带Sync的是异步操作
*
* */


const  fs = require('fs');

fs.stat('./data.txt',(err,states) =>{
    if(err) return;
    if(states.isFile()){
        console.log('文件');
    }else if(states.isDirectory()){
        console.log('文件夹');
    }
    console.log(states);
    /*
    * Stats {
  dev: 1952756842,
  mode: 33206,
  nlink: 1,
  uid: 0,
  gid: 0,
  rdev: 0,
  blksize: 4096,
  ino: 4503599627523169,
  size: 7,
  blocks: 0,
  atimeMs: 1587198206913.37,
  mtimeMs: 1587198206913.37,
  ctimeMs: 1587198206913.37,
  birthtimeMs: 1587198204258.47,
  atime: 2020-04-18T08:23:26.913Z, 访问时间
  mtime: 2020-04-18T08:23:26.913Z,文件数据发生变化的时间
  ctime: 2020-04-18T08:23:26.913Z,文件的状态信息发送改变的时间（如文件的权限）
  birthtime: 2020-04-18T08:23:24.258Z 文件创建的时间
}

    * */
});




















