const path = require('path')
const resolve = dir => path.join(__dirname, dir)
module.exports = {
  devServer:{
    host:'localhost',
    port:8080,
    proxy:{
      '/api':{
        target:'https://dev.my51share.com/waimaoshuishou',
        changeOrigin:true,
        pathRewrite:{
          '/api':''
        }
      }
    }
  },
  publicPath: '/',
  runtimeCompiler: true,
  // 配置路径别名
  chainWebpack: config => {
    config.plugins.delete('prefetch');
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@components', resolve('src/components'))
      .set('@img', resolve('src/assets/img'))
  },
  // 将构建好的文件输出到哪里
  outputDir: 'dist',

  assetsDir: 'assets', // 打包之后静态资源目录 (js, css, img, fonts)
  productionSourceMap:false,
  lintOnSave: true,
  
  // 传递第三方插件选项
  pluginOptions: {
    'AMap': 'AMap',
    'QRCode': 'QRCode'
  },

  css: {
    // 将组件内的 CSS 提取到一个单独的 CSS 文件 (只用在生产环境中)
    // 也可以是一个传递给 `extract-text-webpack-plugin` 的选项对象
    extract: true,

    // 是否开启 CSS source map？
    sourceMap: false,

    // 为预处理器的 loader 传递自定义选项。比如传递给
    // sass-loader 时，使用 `{ sass: { ... } }`。
    loaderOptions: {},

    // 为所有的 CSS 及其预处理文件开启 CSS Modules。
    // 这个选项不会影响 `*.vue` 文件。
    modules: false
  },
  pwa: {
    iconPaths: {
        favicon32: 'favicon.ico',
        favicon16: 'favicon.ico',
        appleTouchIcon: 'favicon.ico',
        maskIcon: 'favicon.ico',
        msTileImage: 'favicon.ico'
    }
}
}