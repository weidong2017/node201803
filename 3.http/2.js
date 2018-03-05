var http = require('http');
var fs = require('fs');
var mime = require('mime');//获取文件content-type
//请求和响应
function  serve(request,response) {
    var url = request.url;

    console.log(url);
    if (url == '/') {
        // response.statusCode = 200;
        response.setHeader('Content-Type', 'text/html;charset=utf-8');
        response.setHeader('name', 'wwd');
        fs.readFile('index.html', function (err, data) {
            response.write(data);
            response.end();
        })
    }else{
        static(url, response);
    }
}

function static (url ,response) {
    response.setHeader('Content-Type',mime.getType(url)+';charset=utf-8');

    fs.readFile(url.slice(1),function (err,data) {
        response.write(data);
        response.end();
    })
}
//有客户端请求，serve进行响应
var server = http.createServer(serve);
server.listen(8080,'localhost');


