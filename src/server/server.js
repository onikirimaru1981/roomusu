const express = require('express');
const cors = require('cors');
require('colors');
const Home = require('../models/home');


class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.paths = { homes: '/api/homes' };

        this.init_data();

        //Rutas de la aplicacion
        this.routes();

        //Middlewares
        this.middlewares();
    };

    //                                           
    init_data() {
        new Home();
    };

    routes() {   // Middlewar condicional

        this.app.use(this.paths.homes, require('../routes/homes.routes'));
    };

    middlewares() {

        // CORS
        this.app.use(cors());

        // Lectura y parseo de body

        this.app.use(express.json());

        // Directorio publico
        this.app.use(express.static('public'));
    }

    //                                             Configuracion puerto del servidor

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Conexion satisfactoria en el puerto: ${'http://localhost:'.red} ${this.port.yellow}`.green);
        });
    };
};

module.exports = Server;