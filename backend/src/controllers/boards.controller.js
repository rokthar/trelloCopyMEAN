const boardsController = {}
const boardModel = require('../models/board.model')

boardsController.getBoards = async (req, res) =>{
    const boards = await boardModel.find()
    // res.json(boards)
    res.json(req.user.name)

}
boardsController.createBoard = async (req, res) =>{
    const board = new boardModel({
        name:req.body.name,
        user:req.user.name
    });
    await board.save();
    res.json({
        'mensaje':'Board creado',
        'siglas':'OK'
    });
}
boardsController.updateBoard = async (req, res) =>{
    const { id } = req.params;
    await boardModel.findByIdAndUpdate(id, {$set:req.body});
    res.json({
        'mensaje':'Board actualizado',
        'siglas':'OK'
    });
}
boardsController.deleteBoard = async (req, res) =>{
    const { id } = req.params;
    await boardModel.findByIdAndRemove(id);
    res.json({
        'mensaje':'Board eliminado',
        'siglas':'OK'
    });
}

module.exports = boardsController;