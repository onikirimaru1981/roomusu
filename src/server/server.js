const express = require('express');
const cors = require('cors');
const compression = require('compression');
const Home = require('../models/home');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.paths = { homes: '/api/homes' };

        //Middlewares
        this.middlewares();


        // inicializando metodo
        this.init();

        //Rutas de la aplicacion
        this.routes();

    }

    async init() {
        await Home.init()
    }

    routes() {   // Middlewar condicional

        this.app.use(this.paths.homes, require('../routes/homes.routes'));
    }

    middlewares() {

        // CORS
        this.app.use(cors());

        // Lectura y parseo de body

        this.app.use(express.json());

        // Directorio publico
        this.app.use(express.static('public'));

        // Compressor 

        this.app.use(compression());

        // Cambiar content type a application/json

        this.app.use((req, res, next) => {
            res.header('Content-Type', 'application/json');
            next();
        });


    }

    //                                             Configuracion puerto del servidor

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Conexion establecida corrrectamente en puerto:${process.env.PORT}`);

        });
    }
};

module.exports = new Server();