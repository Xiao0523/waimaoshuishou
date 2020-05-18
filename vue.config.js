const path = require('path')
const resolve = dir => path.join(__dirname, dir)
// const fs = require('fs')

module.exports = {
  publicPath: './',
  runtimeCompiler: true,
  // 配置路径别名
  chainWebpack: config => {
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
  // use the full build with in-browser compiler?
  // https://vuejs.org/v2/guide/installation.html#Runtime-Compiler-vs-Runtime-only
  // runtimeCompiler: true, //关键点在这  原来的 Compiler 换成了 runtimeCompiler

  // 用于多页配置，默认是 undefined
  pages: {
    index: {
      // 入口文件
      entry: 'src/main.js',　　/*这个是根入口文件*/
      // 模板文件
      template: 'public/index.html',
      // 输出文件
      filename: 'index.html'
    },
    // 简写格式
    // 模板文件默认是 `public/subpage.html`
    // 如果不存在，就是 `public/index.html`.
    // 输出文件默认是 `subpage.html`.
    subpage: 'src/main.js'　　　　/*注意这个是*/
  },
  // 传递第三方插件选项
  pluginOptions: {
    'AMap': 'AMap',
    'QRCode': 'QRCode'
  },
  // 全局注入通用样式
  // css: {
  //   loaderOptions: {
  //     stylus: {
  //       data: fs.readFileSync('./src/assets/stylus/mixins.styl', 'utf-8')
  //     }
  //   }
  // }
  // CSS 相关选项
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
 
}