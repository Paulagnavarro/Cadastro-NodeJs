const express = require('express');
const router = express.Router();
const UsuarioController = require('../controllers/UsuarioController');

router.get('/', UsuarioController.listar);
router.post('/', UsuarioController.salvar);
router.get('/:codigo', UsuarioController.buscarPorCodigo);
router.put('/:codigo', UsuarioController.atualizar);
router.delete('/:codigo', UsuarioController.excluir);

module.exports = router;