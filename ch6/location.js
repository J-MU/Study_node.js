var http=require('http');

http.createServer(function(request,response){
    response.writeHead(302,{'Location':'http://www.naver.com'});
    response.end();
}).listen(9999,function(){
    console.log('Server is running at localhost');
})