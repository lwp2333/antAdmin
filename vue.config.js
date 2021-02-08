const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  lintOnSave: true,
  publicPath: process.env.NODE_ENV === 'production' ? './' : './',
  /* 输出文件目录：在npm run build时，生成文件的目录名称 */
  outputDir: 'dist',
  /* 放置生成的静态资源 (json、css、img、fonts) 的 (相对于 outputDir 的) 目录 */
  assetsDir: 'static',
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            '@border-color-base': '#dce3e8'
          },
          javascriptEnabled: true
        }
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  },
  devServer: {
    proxy: {
      '/dev/api': {
        target: 'http://localhost:7000',
        changeOrigin: true,
        pathRewrite: {
          '^/dev/api': ''
        }
      }
    }
  },
  productionSourceMap: false
}
