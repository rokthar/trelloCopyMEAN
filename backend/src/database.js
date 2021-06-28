const mongoose = require('mongoose')
require('dotenv').config();
// const _url='mongodb://localhost/trellomean';
const _url = `mongodb+srv://trelloUser:k0IJ8CzsJxPgqePf@cluster0.huaa8.mongodb.net/trellomean?retryWrites=true&w=majority`
// const _url = `mongodb+srv://process.env.USER:k0IJ8CzsJxPgqePf@cluster0.huaa8.mongodb.net/trellomean?retryWrites=true&w=majority`

mongoose.connect(_url,{
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})
    .then(db => console.log('DB is conected'))
    .catch(err => console.log(err));
module.exports = mongoose;