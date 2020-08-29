const express = require('express');

const router = express.Router();

// Bring in Models
let Article = require('../models/article');


// let articles = [
//     {
//         id:1,
//         title: 'Article One',
//         author: 'Abdullah'
//     },
//     {
//         id:2,
//         title: 'Article Two',
//         author: 'Haseeb'
//     },
//     {
//         id: 3,
//         title: 'Article Three',
//         author: 'Adil'
//     }
// ];




// router.get('/', (req, res) => res.render('welcome', {  
//     title: 'Articles',
//     articles: articles
// }));

router.get('/', (req, res) => {
    Article.find({}, function(err, articles) {
     
        if(err) {
            console.log(err);
        } else {
            res.render('welcome', {
                title: 'Articles',
                articles: articles
            });
        }
    });
});


// Get Single Article
// router.get('/article/:id', (req, res) => {
//     Article.findById(req.params.id, (err, article) => {
//         console.log(article);
//         return;
//     });
// });

router.get('/article/:id', function(req, res) {
    Article.findById(req.params.id, function(err, article)   {
        res.render('article', {
            article: article
        });
    });
});


// Load Edit Form
router.get('/article/edit/:id', function(req, res) {
    Article.findById(req.params.id, function(err, article)   {
        res.render('edit_article', {
            title: 'Edit Article',
            article: article
        });
    });
});


// Delete Article
router.delete('/article/:id', (req, res) => {
    let query = {_id:req.params.id}

    Article.remove(query, (err) => {
        if(err) {
            console.log(err);
        } 
        res.send('Success');
    });
});



// Update Submit Post Route
router.post('/article/edit/:id', function(req, res) {
    let article = {};

     article.title = req.body.title;
     article.author = req.body.author;
     article.body = req.body.body;

     let query = {_id:req.params.id};


     Article.update(query, article, (err) => {
         if(err) {
             console.log(err);
             return;
         } else {
             res.redirect('/');
         }
     });
    // console.log(req.body.title);
});


// Add Route
router.post('/users/register', function(req, res) {
    let article = new Article();
     article.title = req.body.title;
     article.author = req.body.author;
     article.body = req.body.body;
     article.save((err) => {
         if(err) {
             console.log(err);
             return;
         } else {
             res.redirect('/');
         }
     });
    // console.log(req.body.title);
});

module.exports = router; 


// npm install --save body-parser