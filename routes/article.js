const express = require('express');

const router = express.Router();

router.get('/article', (req, res) => res.render('article'));



module.exports = router;