/*
*
*       全局安装 -g
*       全局安装的包位于Node.js环境的node_modules目录下，全局安装的包一般用于命令行工具
*       本地安装
*       本地安装的包在当前目录下的node_modules里面，本地安装的包一般用于实际的开发工作
*       npm常用的命令：
*       1、安装包（如果没有指定版本号，那么安装最新版本）
*          npm install -g 包名称 （全局安装）
*          npm install 包名称 （本地安装）
*
*       2、卸载包
*          npm uninstall - g 包名称 全局安装的包卸载时也需要加-g
*          npm uninstall 包名称
*
*       3、安装包的时候可以指定版本
*          npm install -g 包名称@版本号
*
*       4、更新包（更新到最新版本）
*          npm update -g 包名称 注意：有时候Update不好使，可以直接换成install
*
*       5、生成package.json文件
*          npm init -y 一键生成
*
*       6、执行包文件
*          npm run 命令名称
*
*       --save  生产环境中添加依赖 这些依赖在dependencies中
*       --save-dev 开发环境添加依赖  devdependencies
*
*       用于安装依赖包
*
*       在生成环境中，使用 npm install --production 命令安装包
*       如果使用npm install 会将开发环境包和生成环境包全部安装
*
* */