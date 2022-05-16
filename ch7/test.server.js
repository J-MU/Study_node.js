var http=require('http');

http.createServer(function(request,response){
    response.writeHead(200,{
        'Content-type':'text/html'
    });

    response.end('<h1>Test-File-2</h1>');
}).listen(9999,function(){
    console.log('Server is running at local');
})