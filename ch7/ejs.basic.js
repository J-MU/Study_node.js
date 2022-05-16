var http=require('http');
var fs=require('fs');
var ejs=require('ejs')
http.createServer(function(request,response){
    fs.readFile('./ejsPage.ejs','utf8',function(error,data){
        response.writeHead(200,{
            'Content-type':'text/html'
        });
        response.end(ejs.render(data,{
            name: 'Uk',
            description: "Hello ejs I'm Uk"
        }));
    });
}).listen(9999,function(){
    console.log('Server is running at local');
});