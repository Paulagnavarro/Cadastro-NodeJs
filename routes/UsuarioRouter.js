const express = require('express');
const router = express.Router();
const UsuarioController = require('../controllers/UsuarioController');

router.get('/', UsuarioController.listar);
router.get('/:codigo', UsuarioController.buscarPorCodigo);
router.get('/buscanome/:nome', UsuarioController.buscarPorNome);
router.get('/buscasobrenome/:sobrenome', UsuarioController.buscarPorSobrenome);
router.get('/buscacidade/:cidade', UsuarioController.buscarPorCidade);
router.get('/buscaestado/:estado', UsuarioController.buscarPorEstado);
router.get('/buscastatus/:status', UsuarioController.buscarPorStatus);
router.post('/', UsuarioController.salvar);
router.put('/:codigo', UsuarioController.atualizar);
router.delete('/:codigo', UsuarioController.excluir);

module.exports = router;