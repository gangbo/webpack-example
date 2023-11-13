# 代码分离
解决的问题
> 在index.js和another-module.js中都引入lodash, 打包后会发现lodash被打包了两次, 这样会导致打包后的文件体积变大, 且浏览器需要加载两次lodash.
