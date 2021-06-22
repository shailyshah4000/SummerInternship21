/*const express=require('express');
const app=express();
const mongoose=require('mongoose');
const user=require('./user');
mongoose.connect('mongodb+srv://shaily:shaily4000@cluster0.ejaqh.mongodb.net/prectice?retryWrites=true&w=majority',
       { 
           useNewUrlParser:true,
           useUnifiedTopology:true
        }

);

const data=new user({
    _id:new mongoose.Types.ObjectId(),
    name:"rakesh",
    email:"rakesh@gmail.com",
    address:"paldi"
});
data.save().then((result)=>{
    console.log(result);
})
.catch(err=>console.log(err))    */

//--------------------------------------------

/*user.find({},function(err,User){
    if(err) console.log(err);
    console.log(User);
})*/

//---------------------------------


//get API

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const users = require('./user');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
mongoose.connect('mongodb+srv://shaily:shaily4000@cluster0.ejaqh.mongodb.net/prectice?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
app.get('/user', function (req, res) {
    users.find().select('name').then((data) => {
        res.json(data);
    })
})



//post API

app.post('/user', jsonParser, function (req, res) {
    const data = new users({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        email: req.body.email,
        address: req.body.address
    })
    data.save().then((result) => {
        res.status(201).json(result)
    })
        .catch((error) => console.log(error))
})

//delete API

app.delete('/user/:id',function(req,res){
    users.deleteOne({_id:req.params.id}).then((result)=>{
        res.status(200).json(result)
    })
    .catch((error)=>console.log(error))
})



//put API

app.put("/user/:id",jsonParser,function(req,res){
    users.updateOne(
        {_id:req.params.id},
        {$set:{name:req.body.name,
                email: req.body.email,
                address:req.body.address
        }}
        ).then((result)=>{
            res.status(200).json(result)
        }).catch((err)=>{console.log(error)})
})

app.get("/search/:name",function(req,res){
    var regex=new RegExp(req.params.name,'i');
    users.find({name:regex}).then((result)=>{
        res.status(200).json(result)
    })
})

app.listen(5000);
