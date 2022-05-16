var http=require('http');

http.createServer(function(request,response){
    response.writeHead(200,{
        'Content-type':'text/html',
        'Set-Cookie':['breakfast=toast','dinner=chicken']
    })
}).listen(9999,function(){
    console.log('Server is Running at localhost:9999');
});