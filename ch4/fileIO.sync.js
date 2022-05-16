var fs=require('fs');
const { CLIENT_RENEG_LIMIT } = require('tls');

try{
    const data='Hello World!';
    fs.writeFileSync('textFile.txt',data,'utf-8');
    console.log('file write complete');
}catch(e){
    console.error(e);
}
try{
    var data=fs.readFileSync('textFile.txt','utf-8');
    console.log(data);
}catch(e){
    console.log('error 실행');
    console.error(e);
}
