const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    'https://betapress.scaletrk.com',
    createProxyMiddleware({
      target: '/api/v2/affiliate/leads?api-key=ed38cf353283bc2600f24aebbd88c8d9e297d9a5',
      changeOrigin: true,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
        'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
      },
    })
  );
};