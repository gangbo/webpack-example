## 要想在 JavaScript 模块中 import CSS 文件，需要安装 style-loader 和 css-loader，并在 module 配置 中添加这些 loader：

```angular2html
npm install --save-dev style-loader css-loader
```

## 在webpack.config.js中的module中使用

```angular2html
  module: {
        rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
        ],
        },
```

加载图片

```angular2html
{
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
}
```

加载字体

```angular2html
{
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
}
```

加载数据, json是默认支持的

```angular2html
{
        test: /\.(csv|tsv)$/i,
        use: ['csv-loader'],
},
{
        test: /\.xml$/i,
        use: ['xml-loader'],
}
```
