
const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  publicPath: '/EX.github-io/html/', // 部署应用包时的基本 URL。用法和 webpack 本身的 output.publicPath 一致，但是 Vue CLI 在一些其他地方也需要用到这个值，所以请始终使用 publicPath 而不要直接修改 webpack 的 output.publicPath
  outputDir: 'html',
  assetsDir: 'static', // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录
  indexPath: 'index.html', // 指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径。
  filenameHashing: true, // 默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存。然而，这也要求 index 的 HTML 是被 Vue CLI 自动生成的。如果你无法使用 Vue CLI 生成的 index HTML，你可以通过将这个选项设为 false 来关闭文件名哈希。
  lintOnSave: true, // 开发环境下校验eslint
  productionSourceMap: true, // 生成map文件
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('./src'))
      .set('assets', resolve('./src/assets'))
      .set('components', resolve('./src/components'))
  },
  css: {
    modules: false, // 默认情况下，只有 *.module.[ext] 结尾的文件才会被视作 CSS Modules 模块
    loaderOptions: {}
  },
  devServer: {
    host: 'smd.my.com',
    port: '8009'
    // https: false
  },
  parallel: require('os').cpus().length > 1
}
