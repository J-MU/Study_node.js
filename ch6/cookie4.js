var http=require('http');


http.createServer(function(request,response){
    if(request.headers.cookie){
        console.log('cookie있음');
        var cookie=request.headers.cookie.split(';').map(function(element){
            console.log(element);
            var element=element.split('=')
            console.log(element);

            return{
                key: element[0],
                value: element[1]
            };
        });
        response.end('<h1>'+JSON.stringify(cookie)+'</h1>');
    }else{
        console.log('cookie없음');
        response.writeHead(200,{
            'Content-type':'text/html',
            'Set-Cookie':[
                'name=Uk',
                'region=Daegu'
            ]
        })
        response.end('<h1>'+'쿠키를 생성하셨습니다!'+'</h1>')
    }
}).listen(9999,function(){
    console.log('Server is Running');
})