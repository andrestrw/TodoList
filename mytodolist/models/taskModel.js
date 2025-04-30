import { Schema, models, model } from 'mongoose'
import { type } from 'os';

const taskSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: '',

    },
    stateRealized: {
        type: Boolean, 
        default: false
    }

}, { timeStamps: true })

const TaskModel = models.post || model('Task', taskSchema, 'Tasks')

export default TaskModel;