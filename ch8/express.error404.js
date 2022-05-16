var express=require('express');

var app=express();

app.use(function(request,response){
    response.status(404).send('<h1>ERROR</h1>');
});

app.listen(9998,function(){
    console.log('Server is Running at local');
});