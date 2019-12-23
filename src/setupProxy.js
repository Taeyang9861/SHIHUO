const proxy = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/homefis',
    proxy({
      target: 'http://m.shihuo.cn',
      changeOrigin: true,
    })
  )
  app.use(
    '/youhui',
    proxy({
      target: 'http://m.shihuo.cn',
      changeOrigin: true,
    })
  )
  app.use(
    '/find',
    proxy({
      target: 'http://m.shihuo.cn',
      changeOrigin: true,
    })
  )
}