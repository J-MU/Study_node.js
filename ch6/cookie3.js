var http=require('http');

http.createServer(function(request,response){
    var cookie=request.headers.cookie;

    response.writeHead(200,{
        'Content-type':'text/html',
        'Set-Cookie':['name=Uk','region=Daegu']
    });
    
    response.end('<h1>'+JSON.stringify(cookie)+'</h1>');
}).listen(9999,function(){
    console.log('Server is running at local');
});