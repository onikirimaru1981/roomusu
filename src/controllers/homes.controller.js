const { response, request } = require('express');
const Home = require('../models/home');

// Peticiones

 const homesGet = async (req = request, res = response) => {

    try {

        // Variables query

        const orderFor = req.query.orderFor;
        const page = req.query.page;
        const limit = req.query.limit;
        const asc = req.query.asc;

        const respHomes = Home.getJson(orderFor, asc, page, limit);

        res.status(200).send(respHomes);

    } catch (error) {

        res.status(401).json({

            msg: `Error en peticion,pongase en contacto con el administrador ${error}`
        });

    };

};

module.exports = {
    homesGet,

};






