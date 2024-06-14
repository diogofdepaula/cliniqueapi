const Atendimentos = require('../models/atendimentos');

exports.Insert = (req, res, next) => {
    Atendimentos.create(req.body)
        .then(atendimento => {
            return res.json(atendimento);
        })
        .catch(error => next(error))
}

exports.SearchAll = (req, res, next) => {
    // tinha que fazer um query para buscar somente o nome
    Atendimentos.findAll()
        .then((atendimentos) => {
            return res.json(atendimentos)
        })
}

exports.SearchOne = (req, res, next) => {
    const id = req.params.id;

    Atendimentos.findAll({
        where: { id: id },
    }).then((atendimentos) => {
        return res.json(atendimentos[0])
    })
}

exports.Update = (req, res, next) => {
    const id = req.params.id;
    Atendimentos.findByPk(id)
        .then(atendimento => {
            atendimento.update(req.body, { where: { id: id } })
        }).then((atendimento) => {
            return res.json(atendimento)
        })
}

exports.Delete = (req, res, next) => {

    const id = req.params.id;

    Atendimentos.findByPk(id)
        .then(atendimento => {
            atendimento.destroy({ where: { id: id } })
        }).then((atendimento) => {
            return res.json(atendimento)
        })
}