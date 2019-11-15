module.exports = {
  devServer: {
    // public:'http://10.125.24.152:8080'
    // proxy: {
    //   "/s": "http://localhost:3000"
    // }
    proxy: {
      '/s': {
        target: 'http://localhost:3000'
        // pathRewrite: {'^/api' : ''}
      }
    }
  }
}