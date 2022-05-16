var express=require('express');

var app=express();

app.get('/a',function(request,response){
    response.send('<a href="/b">Go to B</a>');
});

app.get('/b',function(request,response){
    response.send('<a href="/a">Go to A</a>');
});

app.get('/page/:id',function(request,response){
    var name=request.params.id;

    response.end('<h1>'+name+' hoi Page</h1>');
});

app.listen(9999,function(request,response){
    console.log("Server is running at local");
});