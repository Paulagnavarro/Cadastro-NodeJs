const Usuario = require('../models/Usuario');

class UsuarioController {
    async salvar(req, res) {
        let usuario = req.body;
        const max = await Usuario.findOne({}).sort({ codigo: -1 });
        usuario.codigo = max == null ? 1 : max.codigo + 1;
        const resultado = await Usuario.create(usuario);
        res.status(201).json(resultado);
    }

    async listar(req, res) {
        const resultado = await Usuario.find({});
        res.status(200).json(resultado);
    }

    async buscarPorCodigo(req, res) {
        const codigo = req.params.codigo;
        const resultado = await Usuario.findOne({ 'codigo': codigo });
        res.status(200).json(resultado);
    }

    async atualizar(req, res) {
        const codigo = req.params.codigo;
        const _codigo = String((await Usuario.findOne({ 'codigo': codigo }))._codigo);
        await Usuario.findByIdAndUpdate(String(_codigo), req.body);
        res.status(200).send();
    }

    async excluir(req, res) {
        const codigo = req.params.codigo;
        const _codigo = String((await Usuario.findOne({ 'codigo': codigo }))._codigo);
        await Usuario.findByIdAndRemove(String(_codigo));
        res.status(200).send();
    }
}

module.exports = new UsuarioController();