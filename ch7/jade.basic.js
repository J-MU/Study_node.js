var jade=require('jade');
var http=require('http');
var fs=require('fs');

http.createServer(function(request,response){
    fs.readFile('./JadePage.jade','utf-8',function(error,data){
        var fn=jade.compile(data);

        response.writeHead(200,{
            'Content-type':'text/html'
        });
        response.end(fn());
    })
}).listen(9999,function(){
    console.log('Server is running at local');
})