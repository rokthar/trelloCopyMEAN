const userController = {}
const userModel = require('../models/user.model')
const joi = require('@hapi/joi')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const schemaRegistrer = joi.object({
    name: joi.string().min(6).max(25).required(),
    email: joi.string().min(6).max(25).required().email(),
    password:joi.string().min(6).max(25).required()
})

userController.register = async (req, res) => {
    // validaciones
    const { error } = schemaRegistrer.validate(req.body)
    if (error) return res.status(400).json({error: error.details[0].message})
    
    // email unico
    const emailUnico = await userModel.findOne({email:req.body.email})
    if (emailUnico) return res.status(400).json({error:true, data:'El email ya esta registrado'})
    
    // Hash password
    const saltos = await bcrypt.genSalt(10)
    const passwordHash = await bcrypt.hash(req.body.password,saltos)

    const user = new userModel({
        name:req.body.name,
        email:req.body.email,
        password:passwordHash
    });
    try {
        await user.save();
        res.status(200).json({
            error:null,
            data:'usuario creado'
        });    
    } catch (error) {
        res.status(400).json({error})
    }
    
}

userController.login = async (req, res) =>{
    const schemaLogin = joi.object({
        email:joi.string().min(6).max(25).required().email(),
        password:joi.string().min(6).max(25).required()
    })
    // validaciones
    const { error } = schemaLogin.validate(req.body)
    if (error) return res.status(400).json({error: error.details[0].message})
    
    // buscamos al usuario
    const user = await userModel.findOne({email:req.body.email})
    if(!user) return res.status(400).json({error:true, data:'Credenciales incorrectas'})
    
    // comparamos la contraseña guardada y al enviada
    const passValidate = await bcrypt.compare(req.body.password, user.password)
    
    // verificamos que la comparacion sea true
    if(!passValidate) return res.status(400).json({error:true, data:'Credenciales incorrectas'})

    // creación de JWT
    const token = jwt.sign({
        name:user.name,
        id:user._id
    },'TestTrelloMean')

    res.header('token', token).json({error:null, data:'Bienvenido',token:token})
}

userController.edit = (req, res) =>{}

module.exports = userController;