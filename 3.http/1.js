var http = require('http');
var fs = require('fs');
//请求和响应
function  serve(request,response) {
    //console.log(request.method);
    console.log(request.method,request.url);
   // console.log(request.headers);

    response.statusCode = 200;
    response.setHeader('Content-Type','text/html;charset=utf-8');
    response.setHeader('name','wwd');
    fs.readFile('index.html',function (err,data) {
        response.write(data);
        response.end();
    })

}
//有客户端请求，serve进行响应
var server = http.createServer(serve);
server.listen(8080,'localhost');