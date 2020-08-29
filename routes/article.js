const express = require('express');

const router = express.Router();

router.get('/article', (req, res) => res.render('article'));
router.get('/edit_article', (req, res) => res.render('edit_article'));


module.exports = router;