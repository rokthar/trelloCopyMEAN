const jwt = require('jsonwebtoken')

const verification_token = (req, res, next) => {
    const token = req.header('token')
    
    // validar que se envie el token
    if(!token) return res.status(400).json({error:true, data:'Acceso denegado'})

    // verificar el token
    try {
        const verificar = jwt.verify(token, 'TestTrelloMean')
        req.user = verificar
        next()
    } catch (error) {
        res.status(400).json({error:'Token no es valido'})
    }

}

module.exports = verification_token