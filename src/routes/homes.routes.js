const { Router } = require('express');
const { homesGet } = require('../controllers/homes.controller')

const router = Router();

// Peticiones 

router.get('/', homesGet);





module.exports = router;