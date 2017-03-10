var express= require('express');
var app= express();
var bodyParser= require('body-parser');
var mongoose= require('mongoose');
var Book= require('./Book.Model.js');
var db= 'mongodb://localhost/library';

mongoose.connect(db);

app.get('/',function(req,res){
    res.send('Happy to be here');
});

app.get('/books', function(req,res){
    console.log('Getting all books');
    Book.find()
    .exec(function(err,books){
        if(err){
            res.send('error has ocurred')
        }else {
            console.log(books);
            res.json(books);
        }
    });
});

app.get('/books/:id', function(req,res){
    console.log("getting one book");
    Book.findOne({
        _id: req.params.id
    })
    .exec(function(err,book){
        if (err){
            res.send('error has ocurred');
        } else {
            res.json(book);
        }
    });
});
var port =8080;

app.listen(port, function(){
    console.log(`listen to port  ${port}`);
});
