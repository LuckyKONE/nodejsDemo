/*
    文件操作案例（初始化结构目录）

 */

const  path = require('path');
const  fs = require('fs');


let root ='C:\\Users\\Administrator\\Desktop';

let initData={
    projectname:'mydemo',
    data:[
        {
            name:'img',
            type:'dir'
        },
        {
            name:'css',
            type:'dir'
        },
        {
            name:'js',
            type:'dir'
        },
        {
            name:'index.html',
            type:'file'
        }
    ]
};

let fileContent=`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>welcome to home</title>
</head>
<body>

</body>
</html>
`;

// 创建项目根目录
fs.mkdir(path.join(root,initData.projectname),(err)=>{
    if(err) return;
    // 创建子目录和文件
    initData.data.forEach((item)=>{
        if(item.type == 'dir'){
            fs.mkdirSync(path.join(root,initData.projectname,item.name));
        }else if(item.type == 'file'){
            // 创建文件并写入内容
            fs.writeFileSync(path.join(root,initData.projectname,item.name),fileContent);
        }
    })
})

