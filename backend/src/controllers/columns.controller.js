const columnController = {}
const columnModel = require('../models/column.model')

columnController.getColumnsByBoard = async (req, res) =>{
    const { id } = req.params;
    // const columns = await columnModel.findById(id)
    const columns = await columnModel.find({'board':id})
    res.json(columns)
}
columnController.createColumn = async (req, res) =>{
    const column = new columnModel(req.body);
    await column.save();
    res.json({
        'mensaje':'Column creado',
        'siglas':'OK'
    });
}
columnController.updateColumn = async (req, res) =>{
    const { id } = req.params;
    await columnModel.findByIdAndUpdate(id, {$set:req.body});
    res.json({
        'mensaje':'Column actualizado',
        'siglas':'OK'
    });
}
columnController.deleteColumn = async (req, res) =>{
    const { id } = req.params;
    await columnModel.findByIdAndRemove(id);
    res.json({
        'mensaje':'Column eliminado',
        'siglas':'OK'
    });
}

module.exports = columnController;