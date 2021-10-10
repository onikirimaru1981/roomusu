const express = require('express');
const cors = require('cors');
const compression = require('compression')
const Home = require('../models/home');
require('colors')


class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.paths = { homes: '/api/homes' };

        //Middlewares
        this.middlewares();


        // inicializa modelo; metodo init del modelo es asincronio,y ya que en el contructor no puedo hacerlo async lo hago de esta manera
        this.init();

        //Rutas de la aplicacion
        this.routes();

    };
    // Funcion para evitar tiempo de carga excesivo,por motivo de que el json de origen es de gran tamaño,consiguiendo que el archivo sea cargado
    // una unica vez y su informacion sea almacenada en una variable con el metodo de la clase Home
    async init() {


        await Home.init()

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

        // Compressor 

        this.app.use(compression())

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
    };
};

module.exports = new Server();