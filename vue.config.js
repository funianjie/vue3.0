const ProjectsConfig = require('./src/projects/projectsConfig')
const webpack = require('webpack')

module.exports = {
  publicPath: './',
  outputDir: `dist/${process.env.NODE_ENV}/${process.env.PROJECT_NAME}/`,
  // 分模块打包配置
  ...ProjectsConfig[process.env.PROJECT_NAME],
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        'process.env.PROJECT_NAME': JSON.stringify(process.env.PROJECT_NAME)
      })
    ]
  }
}
