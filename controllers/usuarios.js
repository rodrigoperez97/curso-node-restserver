const { response } = require('express');

const usuariosGet = (req, res = response) => {

    const {q, nombre= "no nombre", apikey = "no api key"}= req.query;

    res.json(
        {
            msg: 'Get World',
            q,
            nombre,
            apikey
        });
};

const usuariosPost = (req, res = response) => {

    const body = req.body;

    res.json({
        msg: 'Post World - controlador',
        body
    })
};

const usuariosPut = (req, res = response) => {

    const id = req.params.id;

    res.json({
        msg: 'Put World - controlador',
        id
    })
};

const usuariosDelete = (req, res = response) => {
    res.json('Delete World - controlador')
};

const usuariosPatch = (req, res = response) => {
    res.json('Patch World - controlador')
};

module.exports = {
    usuariosGet,
    usuariosDelete,
    usuariosPatch,
    usuariosPost,
    usuariosPut
}