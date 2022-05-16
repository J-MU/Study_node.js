var express=require('express');

// 서버를 생성합니다.
var app=express();

app.use(function(request,response){
    var output=[];
    for(var i=0; i<3; i++){
        output.push({
            count: i,
            name: 'name-'+i
        });
    }

    response.send(output);
});
app.listen(9998,function(){
    console.log('Server is running at local');
})

