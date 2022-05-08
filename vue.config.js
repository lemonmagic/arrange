module.exports = {
  // 配置子目录
  publicPath: '/',
  // 输出文件目录
  outputDir: "dist", 
  // eslint 是否在保存时检查
  lintOnSave: false, 
  // 配置js、css静态资源二级目录的位置
  assetsDir: 'static',  
  devServer: {
    // history模式下的url会请求到服务器端，但是服务器端并没有这一个资源文件，就会返回404，所以需要配置这一项
    historyApiFallback: {
        index: '/index.html' //与output的publicPath
    },
  },
}