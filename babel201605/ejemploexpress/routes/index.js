var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

router.get('/',function (req,res) {
    req.send('recibido');
})

//Ejemplo de parametros en ruta y en query-string
router.get('/:id([0-9]+)', function (req, res, next) {
    console.log('req.params', req.params);
    console.log('req.query', req.query);
    res.send('el id es el ' + req.params.id + ' y el nombre es ' + req.query.name);
});

router.get('/admin/:usuario/piso/:piso(A|B|C)', function (req, res) {
    res.send('recibido admin ' + req.params.usuario + ' piso ' + req.params.piso);
});


//ejemplo de parametros en el body
router.post('/',function (req, res) {
    console.log('req.body', req.body);

    res.send('el body tiene un parametro price ' + req.body.price);
});


module.exports = router;
