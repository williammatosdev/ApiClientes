const express = require('express');
const router = express.Router();

const ClienteController = require('./controllers/ClienteController');
const EnderecoController = require('./controllers/EnderecoController');

router.get('/usuarios',ClienteController.buscarTodos);
router.get('/usuario/:id_usuario',ClienteController.buscarUm);
router.post('/usuarios',ClienteController.inserir);
router.put('/usuario/:id_usuario',ClienteController.alterar);
router.delete('/usuario/:id_usuario',ClienteController.excluir);

router.get('/enderecos',EnderecoController.buscarEnderecos);
router.get('/endereco/:id',EnderecoController.buscarUmEndereco);
router.post('/enderecos',EnderecoController.inserirEndereco);
router.put('/endereco/:id',EnderecoController.alterarEndereco);
router.delete('/endereco/:id',EnderecoController.excluirEndereco);



module.exports = router;