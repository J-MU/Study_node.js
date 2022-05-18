var express=require('express');
var session=require('express-session');

var app=express();

app.use(session({
    secret:'secret key',
    resave: false,
    saveUninitialized:true
}));

app.use(function(request,response){
    request.session.now=(new Date()).toUTCString();

    response.send(request.session);
});


app.listen(9999,function(){
    console.log('Server is running at local');
})