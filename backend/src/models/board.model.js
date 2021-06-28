const { Schema, model } = require('mongoose');

const boardSchema = new Schema(
    {
        name: {type: String, required:true},
        user: {type: String, required:true}
    },
    {
        timestamps: true,
        versionKey: false
    }
);

module.exports = model("board", boardSchema);
