var http = require('http');
//请求和响应
function  serve(request,response) {
    console.log(request.method);
    console.log(request.url);
    console.log(request.headers);

    response.statusCode = 404;
    response.setHeader('Content-Type','text/html;charset=utf-8');
    response.setHeader('name','wwd');
    response.write(new Date().toString());

    response.end();
}
//有客户端请求，serve进行响应
var server = http.createServer(serve);
server.listen(8080,'localhost');