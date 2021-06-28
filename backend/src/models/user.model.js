const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        name: {type: String, min:6, max:25, required:true},
        email: {type: String, min:6, max:25, required:true},
        password: {type:String, min:6, max:25, required:true}
    },
    {
        timestamps: true,
        versionKey: false
    }
);

module.exports = model("user", userSchema);
