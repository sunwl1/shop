const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.set('port', process.env.PORT || 80);
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://ec2-54-180-88-25.ap-northeast-2.compute.amazonaws.com:5000',
            changeOrigin: true,
        })
    );
};