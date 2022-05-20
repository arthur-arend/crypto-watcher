const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  publicPath: '/crypto-watcher/',

  // devServer: {
  //   proxy: 'http://localhost:4000'
  // }
})

