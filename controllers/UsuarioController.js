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

    async buscarPorNome(req, res) {
        const nome = req.params.nome;
        const resultado = await Usuario.findOne({ 'nome': nome });
        res.status(200).json(resultado);
    }

    async buscarPorSobrenome(req, res) {
        const sobrenome = req.params.sobrenome;
        const resultado = await Usuario.findOne({ 'sobrenome': sobrenome });
        res.status(200).json(resultado);
    }

    async buscarPorCidade(req, res) {
        const cidade = req.params.cidade;
        const resultado = await Usuario.findOne({ 'cidade': cidade });
        res.status(200).json(resultado);
    }

    async buscarPorEstado(req, res) {
        const estado = req.params.estado;
        const resultado = await Usuario.findOne({ 'estado': estado });
        res.status(200).json(resultado);
    }

    async buscarPorStatus(req, res) {
        const status = req.params.status;
        const resultado = await Usuario.find({ 'status': status });
        res.status(200).json(resultado);
    }

    async atualizar(req, res) {
        const codigo = req.params.codigo;
        const _id = String((await Usuario.findOne({ 'codigo': codigo }))._id);
        await Usuario.findByIdAndUpdate(String(_id), req.body);
        res.status(200).send();
    }

    async excluir(req, res) {
        const codigo = req.params.codigo;
        const _id = String((await Usuario.findOne({ 'codigo': codigo }))._id);
        await Usuario.findByIdAndRemove(String(_id));
        res.status(200).send();
    }
}

module.exports = new UsuarioController();