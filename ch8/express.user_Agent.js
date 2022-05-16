var express=require('express');

var app=express();

app.use(function(request,response){
    var agent=request.header('User-Agent');
    console.log(agent);
    if(agent.toLowerCase().match(/esdf/)){
        console.log('Hello Chrome');
    }
    else{
        console.log('Hello Edge');
    }
    response.sendStatus(200);
});

app.listen(9998,function(){
    console.log('Server is Running at local');
});
