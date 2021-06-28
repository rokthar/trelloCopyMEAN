const { Router } = require('express')
const router = Router()

const columnCtrl = require('../controllers/columns.controller')

router.get('/listar/:id', columnCtrl.getColumnsByBoard);
// router.get('/listar', columnCtrl.getColumnsByBoard);
router.post('/crear', columnCtrl.createColumn);
router.post('/editar/:id', columnCtrl.updateColumn);
router.post('/borrar/:id', columnCtrl.deleteColumn);

module.exports = router