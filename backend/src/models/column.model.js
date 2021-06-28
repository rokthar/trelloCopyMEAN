const { Schema, model } = require('mongoose');

const columnSchema = new Schema(
    {
        name: {type: String, required:true},
        board: {type: String, required:true}
    },
    {
        timestamps: true,
        versionKey: false
    }
);

module.exports = model("column", columnSchema);
