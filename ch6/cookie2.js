var http=require('http');

http.createServer(function(request,response){
    var date=new Date();
    console.log(date.getDate());
    date.setDate(date.getDate()+7);

    response.writeHead(200,{
        'Content-type': 'text/html',
        'Set-Cookie':[
            'breakfast=toast;Expires='+date.toUTCString(),
            'dinner=chicken'
        ]
    });
    response.end('<h1>'+request.headers.cookie+'</h1>');
}).listen(9999,function(){
    console.log('Server is Running at local:9999');
})