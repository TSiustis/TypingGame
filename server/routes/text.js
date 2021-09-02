const express = require('express');

const textRoutes = express.Router();

const dbo = require('../db/conn');

textRoutes.route('/text').get(function(req, res){
    let db_connect = dbo.getDb('Typing');
    db_connect.collection('Texts')
    .find({})
    .toArray(function(err, result){
        if(err) throw err;
        res.json(result);
    });
});

textRoutes.route('/text/:id').get(function(req, res){
    let db_connect = dbo.getDb('Typing');
    let myQuery = {id: parseInt(req.params.id)};
    db_connect.collection('Texts')
            
              .findOne(myQuery, function(err, result){
                  if(err) console.log(err);
                  res.json(result);
              });
   
});
textRoutes.route('/text/add').post(function(req, res) {
    let db_connect = dbo.getDb('Typing');
    let text = {
        content: req.body.content,
        source: req.body.souce,

    };
    db_connect.collection('Texts').insertOne(text, function(err, res){
        if(err) throw err;
    });
});

textRoutes.route('/text/update:id').post(function(req,res){
    let db_connect = dbo.getDb('Typing');
    let query = {id: req.body.id};
    let newValue = {
        $set: {
            content: req.body.content,
            source: req.body.source,
        },
    };
    db_connect.collection('Texts')
               .updateOne(query,newValue, function(err,res){
                   if(err) throw err;
                   console.log('document updated');
               })
});

textRoutes.route('/text/:id').delete((req, res) => {
    let db_connect = dbo.getDb('Typing');
    var query = {id: req.body.id};
    db_connect.collection('Texts').deleteOne(query, function(err, obj){
        if(err) throw err;
        console.log('1 document deleted');
    });
});

module.exports = textRoutes;
