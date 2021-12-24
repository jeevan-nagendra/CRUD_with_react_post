const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const cors = require('cors')
//import modules
const Post = require('./src/models/post');
const { TextEncoder, TextDecoder } = require("util");
//define apllication

const app = express()
app.use(cors())
app.use(express.json())
//define db connection 
const db = mongoose.connect('mongodb://localhost:27017/create-crud-operations-db')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}));
app.get('/', function(req,res){
    //handle the request
    res.send({ping:'pong'})
})
//Operation 1.create 2.Read 3.Update 4.Delete{CRUD}
app.post('/posts', function(req,res){
   //get request from reqire payload 
   const title=req.body.title
   const author=req.body.author
   const content=req.body.content
   //assign value to post model
   const post = new Post();
   post.title = title
   post.author = author
   post.content = content
   post.save(function(error,savedPost){
       if(error){
           //send error response 
           res.status(500).send({error:"unable to save post"})
       }
       else{
           res.status(200).send(savedPost)
       }
   })


   //res.send({title:title,author:author,content:content})
});

app.get('/posts',function(req,res){
    Post.find({}, function(error,posts){
        if(error){
            //send error response 
            res.status(422).send({error:"unable to save post"})
        }
        else{
            res.status(200).send(posts)
        }
    })

})
//update
app.patch('/posts/:id',async(req,res)=>{
    try{
        const post = await Post.findById(req.params.id)
        post.hidden = req.body.hidden
        post.title = req.body.title
        post.content = req.body.content
        const a1 = await post.save()
        res.json(a1)
    }
    catch(err){
        res.send("error" +err)
    }
})
//Delete
app.delete('/posts/:id',async(req,res)=>{
    try{
        const post = await Post.findById(req.params.id)
        post.hidden = req.body.hidden
        const a1 = await post.remove()
        res.json(a1)
    }
    catch(err){
        res.send("error" +err)
    }
})
app.listen(3002, function(){
    console.log("server is running at port 3002...")
});
