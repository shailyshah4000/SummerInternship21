/*
var http=require('http');
http.createServer(function(req,res)
{
    res.write("hello node");
    res.end();
}).listen(5000)

*/

/*var other=require('./other');
console.log(other());*/

/*var data=[
    {name:"shaily",age:"20",email:"shaily4000@gmail.com" },
   { name:"rajal",age:"20",email:"shaily4000@gmail.com"}
    ]
var http=require('http');
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'application\json'})
    res.write(JSON.stringify(data));
    res.end();
}).listen(5000);*/

/*
//html page using node.
var http=require('http');
var page=`
            <h1>hello node</h1>
            <input type="text" placeholder="enter"/> <br><br>
            <input type="button">Click Me</button>`
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':"text/html"})
    res.write(page);
    res.end();
}).listen(5000);*/

/*
//npm
var http=require('http');
var up=require('upper-case');
http.createServer(function(req,res){
    res.write(up.upperCase("hello nodemon"));
    res.end();
}).listen(5000);*/

/*
//read file

var http=require('http');
var fs=require('fs');
http.createServer(function(req,res){
    fs.readFile('prectice.html',function(err,data){
    res.writeHead(200,{'Content-Type':'text/html'})
    res.write(data);
    return res.end();
    })
}).listen(5000);*/

/*
// Routing with express js

 const express=require('express');
 const app=express();
 app.get('/',function(req,res){
     res.send("hello")
});
app.get('login',function(req,res){
    res.send("this is login get")
});
app.post('login',function(req,res){
    res.send("this is login post")
});
app.put('/',function(req,res){
    res.send("this is login put")
});
app.delete('/',function(req,res){
    res.send("this is login delete")
});

 app.listen(5000);*/


 /*
 //middleware

 const express=require('express');
 const app=express();
 const router=express.Router();
 const checkUrl=require('./middleware');
  app.get('/',function(req,res){
     //res.send("this is home get")
     res.sendFile(__dirname+"/home.html")
 });
 router.get('/login',checkUrl,function(req,res){
    //res.send("this is login get")
    res.sendFile(__dirname+"/login.html");
});
app.use('/',router);

 app.listen(5000);*/



 //template engine(ejs)

 const express=require('express');
 const app=express();
 app.use('assets',express.static('assert'));
 var bodyParser=require('body-parser');
 var encoder=bodyParser.urlencoded();
 app.set('view engine','ejs');
 app.get('/profile/:name',function(req,res)
 {
     //console.log(req.params.name);
     data={email:'202012041@daiict.ac.in',address:'paldi',skils:['node js','java','c++']} 
     res.render('profile',{name:req.params.name});
 })
 app.post('/login',encoder,function(req,res)
 {
     console.log(req.body.email);
     res.render('home');
 })
 app.get('/login',function(req,res)
 {
     console.log(req.query);
     res.render('login');
 })
 app.get('/',function(req,res)
 {
     res.render('home');
 })

 app.listen(5000);




 