const {
  webpack,
  commonsPlugin,
  webpackCommonConfig
} = require('./common.js')

module.exports = Object.assign(webpackCommonConfig, {
  plugins: [
    commonsPlugin,
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    })
  ]
})
