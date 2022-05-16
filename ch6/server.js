var http=require('http');

var server=http.createServer(function(request,response){
    console.log('Request on');
    response.writeHead(200,{'Content-Type':'text/html'});
    response.end('<h1>Hello Web Server with Node.js</h1>');
}).listen(9999,function(){
    console.log('Server Running at http://localhost:9999');
})

server.on('connection',function(){
    console.log('connection on');
})

server.on('close',function(){
    console.log('server is closed');
})

var test=function(){
    console.log('서버를 종료합니다.');

    server.close();
}

setTimeout(test,15000);