const { Router } = require('express')
const router = Router()

const boardCtrl = require('../controllers/boards.controller')

router.get('/listar', boardCtrl.getBoards);
router.post('/crear', boardCtrl.createBoard);
router.post('/editar/:id', boardCtrl.updateBoard);
router.post('/borrar/:id', boardCtrl.deleteBoard);

module.exports = router