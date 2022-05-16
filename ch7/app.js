var http=require('http');

http.createServer(function(request,response){
    if(request.url == '/'){
        response.write('<!DOCTYPE html>');
        response.write('<html>');
        response.write('<head>');
        response.write('<title>Forever</title>');
        response.write('</head>');
        response.write('<body>');
        response.write(' <h1>Forever</h1>');
        response.write(' </body>');
        response.write('</html>');
    }else{
        error.error.error();
    }
    
}).listen(9999,function(){
    console.log('Server is running at local');
})