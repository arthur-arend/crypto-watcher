const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,


  
  publicPath: process.env.NODE_ENV === 'production'
    ? '/crypto-watcher/'
    : '/',

  // devServer: {
  //   proxy: 'http://localhost:4000'
  // }
})

