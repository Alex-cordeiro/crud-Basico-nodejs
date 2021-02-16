var express = require('express');
var router = express.Router();
var db = require('../db');
var logger = require('../logger');
/* GET home page. */
router.get('/', async function(req, res, next) {
  try{
    const results = await db.selectClientes();
    console.log(results);
    logger.imprimeRegistros(results);
    res.render('index', { results });
  }
  catch(error){
    res.redirect('/?erro='+error);
  }
});

router.get('/index', function(req, res, next){
  res.render('index');
}); 
  

router.get('/new', function(req, res, next) {
  res.render('new', {title: "Cadastro de Cliente", result: {}, action: "/new"});
})

router.get('/edit/:id', async function (req, res) {
  const id = parseInt(req.params.id);
  try{
    const result = await global.db.selectCliente(id);
    res.render('new', {title: 'Edição de Cliente', result, action: '/edit/' +id});
  }
  catch(error){
    res.redirect('/?erro='+ error);
  }  
})

router.post('/new', async function(req, res) {
  const nome = req.body.nome
  const idade = !req.body.idade?null:parseInt(req.body.idade);
  const uf = req.body.uf

  try{
    await global.db.insertClientes({nome, idade, uf});
    res.redirect('/?new=true');
  }
  catch(error){
    res.redirect('/?erro='+error);
  }
})

router.post('/edit/:id', async function(req, res) {
  const id = parseInt(req.params.id);
  const nome = req.body.nome;
  const idade = !req.body.idade ? null : parseInt(req.body.idade);
  const uf = req.body.uf;
  try{
    await global.db.updateCliente(id, {nome, idade, uf});
    res.redirect('/?edit=true')
  }
  catch (error){
    res.redirect('?/erro=' + error)
  }
})

router.get('/delete/:id', async function (req, res){
  const id = parseInt(req.params.id);
  try{
    await global.db.deleteCliente(id);
    res.redirect('/?delete=true');
  }
  catch(error) {
    res.redirect('/?erro='+ error)
  }
  
})

module.exports = router;
