const express = require('express')
const morgan = require('morgan')
require('dotenv').config();
const cors = require('cors')

const app = express()

app.set('port',process.env.PORT || 3000);
app.use(morgan('dev'))
app.use(express.json())
app.use(cors({origin:'http://localhost:4200',optionsSuccessStatus:200}))

// RUTAS
app.use('/board',require('./middlewares/validarToken'),require('./router/boards.router'))
app.use('/column',require('./middlewares/validarToken'),require('./router/columns.router'))
app.use('/task',require('./middlewares/validarToken'), require('./router/tasks.router'))
app.use('/user', require('./router/user.router'));


module.exports = app;