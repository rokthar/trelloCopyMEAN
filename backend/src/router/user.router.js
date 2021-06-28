const { Router } = require('express')
const router = Router()

const userCtrl = require('../controllers/user.controller')

router.post('/registrar', userCtrl.register);
router.post('/login', userCtrl.login);
router.post('/editar', userCtrl.edit);

module.exports = router