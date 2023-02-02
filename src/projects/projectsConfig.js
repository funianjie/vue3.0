const ProjectsConfig = {
  default: {
    pages: {
      index: {
        entry: "src/projects/default/main.js",
        template: "public/index.html",
        filename: "index.html"
      }
    },
    devServer: {
      // 设置代理
      // proxy: {
      //   "/eopenhapi": {
      //     target: "http://open.jdpay.com",
      //     changeOrigin: true
      //   },
      //   "/hapi": {
      //     target: "http://open.jdpay.com",
      //     changeOrigin: true
      //   }
      // }
    }
  },
}
module.exports = ProjectsConfig
