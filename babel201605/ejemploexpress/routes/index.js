var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/:id',function (req, res, next) {
  console.log(req.params);
  res.send('el id es el ' + req.params.id);
})


module.exports = router;
