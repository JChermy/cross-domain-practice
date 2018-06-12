const express = require('express');
const proxy = require('http-proxy-middleware');
const app = express();

app.use('/login', proxy({
    //代理跨域的目标接口
    target: 'http://localhost:5555',
    changeOrigin: true,
    //修改响应头信息，实现跨域，并允许带cookie
    onProxyRes: function(proxyRes, req, res) {
        res.header('Access-Control-Allow-Origin', 'http://localhost');
        res.header('Access-Control-Allow-Credentials', 'true');
    },

    //修改响应信息中的cookie域名
    cookieDomainRewrite: 'http://localhost'
}));

app.use(express.static( './public'));
app.listen(3333);
console.log('proxy server is listen at port 3333');