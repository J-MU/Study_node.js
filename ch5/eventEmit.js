process.on('exit',function (code){
    console.log('안녕히 계세요..!');
});

process.emit('exit');
process.emit('exit');
process.emit('exit');
process.emit('exit');

console.log('프로그램 실행중');

