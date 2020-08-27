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


// Add Route
router.post('/users/register', function(req, res) {
    let article = new Article();
     article.title = req.body.title;
     article.author = req.body.author;
     article.save((err) => {
         if(err) {
             console.log(err);
             return;
         } else {
             console.log('Submitted');
         }
     });
    // console.log(req.body.title);
});

module.exports = router; 