const { Router } = require('express')
const router = Router()

const taskCtrl = require('../controllers/tasks.controller')

router.get('/listar/:id', taskCtrl.getTasksByColumn);
router.post('/crear', taskCtrl.createTask);
router.post('/editar/:id', taskCtrl.updateTask);
router.post('/completar/:id', taskCtrl.completeTask);
router.post('/borrar/:id', taskCtrl.deleteTask);

module.exports = router