var fs=require('fs');

var data='Hello World';

fs.writeFile('TextFileOtherWrite.txt',data,'utf-8',function(error){
    console.log('write file async complete');
})

fs.writeFileSync('TextFileOtherWriteSync.txt',data,'utf-8');
console.log('write file sync complete');