module.exports = {
  // 代码入口文件
  entry: './src/js/index.js',
  // 打包代码出口文件
  output: {
    path:__dirname + '/dist',
    filename: 'main.js'
  },
  // 配置中提供mode选项
  mode: 'development',
  //需要依赖的插件或是加载器
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { 
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          }
        ]
      }
      ,
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
};