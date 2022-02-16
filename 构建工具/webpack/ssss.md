/**
 * webpack有哪些功能？
 * 核心流程有哪些？
 * 常见webpack配置有哪些？
 * 常见的优化方案有哪些？
 */

1. webpack有哪些功能？
  1.依赖管理， 避免重复加载， 合并代码
    - ast， ast分析页面，然后
  2. code split
    - 含义: 单文件无法有效的利用浏览器缓存，多入口情况下
      代码分成很多很多块（ chunk ）
    - 方式
      1. 分离业务代码和第三方库（ vendor ）
      2. 按需加载（利用 import() 语法）
    什么时候会出现代码重复？
    - 多入口引用代码会应用重复
    - 引用编译过后的npm包代码
 - 打包js代码
 - 图片css
 - 常见loader
  raw-loader
  file-loader
  url-loader
  
2. 如何是实现treeshakeing
3. 如果兼容不同的模块化
 - es6 静态模块是值的引用，会把变量放一起
 - commonjs是值的拷贝
4. code split怎么实现
5. hmr热更新原理(https热更新)
6. 实践项目中遇到的问题
 - 如何在文件
 - 如何写一个loader
 - 如何写一个plugin
7. loader
8. plugin
9. webpack常见的概念
10. sourcemap