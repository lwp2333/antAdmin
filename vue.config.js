const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

// 是否为生产环境
const prod = process.env.NODE_ENV === 'production'

// 资源加载路径
const resolve = dir => {
  return path.join(__dirname, dir)
}

// cdn链接
const cdn = {
  externals: {
    'ant-design-vue': 'antd',
    echarts: 'echarts',
    vue: 'Vue',
    // 'vue-router': 'VueRouter',
    vuex: 'Vuex',
    axios: 'axios'
  },
  // cdn的css链接
  css: [],
  // cdn的js链接
  js: [
    'https://cdn.bootcdn.net/ajax/libs/ant-design-vue/1.7.3/antd.min.js',
    'https://cdn.bootcdn.net/ajax/libs/echarts/5.0.1/echarts.min.js',
    'https://cdn.bootcdn.net/ajax/libs/vue/2.6.12/vue.min.js',
    // 'https://cdn.bootcdn.net/ajax/libs/vue-router/3.2.0/vue-router.min.js',
    'https://cdn.bootcdn.net/ajax/libs/vuex/3.5.1/vuex.min.js',
    'https://cdn.bootcdn.net/ajax/libs/axios/0.21.1/axios.min.js'
  ]
}
// 本地环境是否使用cdn
const devNeedCdn = false
module.exports = {
  lintOnSave: true,
  publicPath: prod ? './' : './',
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
  // webpack 配置
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      // 生产环境或者本地需要cdn时，才注入cdn
      if (prod || devNeedCdn) args[0].cdn = cdn
      return args
    })
  },
  configureWebpack: config => {
    config.resolve = {
      alias: {
        '@': resolve('src')
      }
    }
    // 分析压缩代码
    if (prod) {
      config.plugins.push(
        new UglifyJsPlugin({
          uglifyOptions: {
            compress: {
              drop_debugger: true,
              drop_console: true //生产环境自动删除console
            },
            warnings: false
          },
          sourceMap: false,
          parallel: true //使用多进程并行运行来提高构建速度。默认并发运行数：os.cpus().length - 1。
        })
      )
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
