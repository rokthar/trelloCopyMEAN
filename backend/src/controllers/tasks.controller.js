const taskController = {}
const taskModel = require('../models/task.model')

taskController.getTasksByColumn = async (req, res) =>{
    const { id } = req.params;
    const tasks = await taskModel.find({'column':id})
    res.json(tasks)
}
taskController.createTask = async (req, res) =>{
    const task = new taskModel(req.body);
    await task.save();
    res.json({
        'mensaje':'Task creado',
        'siglas':'OK'
    });
}
taskController.updateTask = async (req, res) =>{
    const { id } = req.params;
    await taskModel.findByIdAndUpdate(id, {$set:req.body});
    res.json({
        'mensaje':'Task actualizado',
        'siglas':'OK'
    });
}
taskController.deleteTask = async (req, res) =>{
    const { id } = req.params;
    await taskModel.findByIdAndRemove(id);
    res.json({
        'mensaje':'Task eliminado',
        'siglas':'OK'
    });
}

taskController.completeTask = async (req, res) =>{
    const { id } = req.params;
    await taskModel.findByIdAndUpdate(id,{$set:req.body});
    res.json({
        'mensaje':'Task completada',
        'siglas': 'OK'
    });
}

module.exports = taskController;