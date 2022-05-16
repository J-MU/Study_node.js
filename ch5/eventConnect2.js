var onUncaughtException=function(){
    console.log('윽.. 에러라니.. 이번만 봐주겠다..!');

    process.removeListener('uncaughtException',onUncaughtException);
};

process.on('uncaughtException',onUncaughtException);

var test=function(){
    setTimeout(test,2000);

    error.error.error();
}

setTimeout(test,2000)