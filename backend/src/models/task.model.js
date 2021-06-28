const { Schema, model } = require('mongoose');

const taskSchema = new Schema(
    {
        name: {type: String, required:true},
        column: {type: String, required:true},
        description: {type:String},
        status: {type:String, default:'not completed'}
    },
    {
        timestamps: true,
        versionKey: false
    }
);

module.exports = model("task", taskSchema);
