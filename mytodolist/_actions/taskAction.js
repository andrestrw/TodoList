'use server'

import connectDB from "../config/database"
import TaskModel from "../models/taskModel"

export default async function getTasks() {
    try {
        await connectDB()
        const tasks = JSON.parse(JSON.stringify(await TaskModel.find())) 
        //console.log(data)
        return {tasks}
    } catch (error) {
        return {
            errMsg: error.message
        }
    }
}