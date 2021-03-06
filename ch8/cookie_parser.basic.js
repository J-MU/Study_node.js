var express=require('express');
var cookieParser=require('cookie-parser');

var app=express();

app.use(cookieParser());

app.get('/getCookie',function(request,response){
    response.send(request.cookies);
    console.log(request.cookies);
});

app.get('/setCookie',function(request,response){
    response.cookie('string','cookie');
    response.cookie('json',{
        name:'cookie',
        property:'delicious'
    });
    response.redirect('/getCookie');
});

app.listen(9999,function(){
    console.log('Server is running at local');
})
