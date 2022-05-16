var express=require('express');

var app=express();

app.use(express.static(__dirname+'/public'));
app.use(function(request,response){
    response.writeHead(200,{
        'Content-type':'text/html'
    });
    response.end("<img src='/face.jpg' width='50%' />")
})
app.listen(9999,function(){
    console.log("Server is running at local");
})