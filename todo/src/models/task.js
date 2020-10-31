const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
        trim: true
    },
    state: {
        type: String,
        enum: ['to do', 'done'],
        default: 'to do'
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
}, {
    timestamps: true,
    versionKey: false
})

taskSchema.methods.toJSON = function () {
    const task = this
    const taskObject = task.toObject()

    delete taskObject.createdAt
    delete taskObject.updatedAt

    return taskObject
}

const Task = mongoose.model('Task', taskSchema)

module.exports = Task