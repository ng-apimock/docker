module.exports = {
    extend: extend
}
function extend(app) {
    console.log("extending the server");

    const { createProxyMiddleware } = require('http-proxy-middleware');

    app.use('/some/path', createProxyMiddleware({ target: 'https://some.api',changeOrigin: true,timeout: 5000}));
}
