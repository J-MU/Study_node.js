var fs=require('fs');
var express=require('express');
var bodyParser=require('body-parser');

var DummyDB=funtion(){
    var DummyDB={};
    var storage=[];
    var count=1;

    DummpyDB.get=funtion(id){
        if(id){
            id=(typeof id == 'string')? Number(id):id;

            for(var i in storage) if (storage[i].id==id){
                return storage[i];
            }
        }
        else{
                return storage;
        }
        
    };

    DummyDB.insert=funtion(data){
        data.id=count++;
        storage.push(data);
        return data;
    };

    DummpyDB.remove=funtion(id){
        id=(typeof id == 'string')? Number(id):id;

        for(var i in storage) if (storage[i].id==id){
            storage.splice(i,1);

            return i;
        }

        return false;
    };

    return DummyDB;
};

var app=express();


app.use(bodyParser.urlencoded(){
    extended:false;
});

app.get('/user',funtion(request,response){
    response.send(DummpyDB.get());
});

app.get('/user/:id',funtion(request,response){
    response.send(DummpyDB.get(request.params.id));
});

app.post('/user',funtion(request,response){});

app.put('/user/:id',funtion(request,response){});

app.delete('/user/:id',funtion(request,response){});

app.listen(9999,funtion(){
    console.log('Hello RESTfulAPI');
});
