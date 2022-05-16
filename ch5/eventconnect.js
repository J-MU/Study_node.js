process.on('exit',function(){
    console.log('안녕히 가거라...!');
});

process.on('uncaughtException',function(error){
    console.log('에러가 발생했군.. 봐주겠다..!!!');
});

var count=0
let test=function(){
    //탈출
    count=count+1;

    if(count>3)
        return;
    
    setTimeout(test,2000);

    error.error.error();
};
setTimeout(test,2000);