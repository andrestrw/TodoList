'use client'

import { Formik, Form, Field } from "formik"
import { useState } from "react"

interface MyFormValues {
    task: string
}
export default function TodoList() {

    const [tasks, setTasks] = useState<string[]>([])
    const [newTasks, setNewTask] = useState("")

    const initialValues: MyFormValues = { task: '' };

    return (
        <>
            <div className="w-3xs ">
                <h1>My Example</h1>
                <Formik
                    initialValues={initialValues}
                    onSubmit={(values, actions) => {
 
                        if (values.task.trim() !== "" ) {
                            setTasks( previousTasks => [...previousTasks,values.task])
                            actions.resetForm()
                            console.log(actions);
                        }

                    }}
                >
                    <Form className="flex flex-col text-center" >
                        <label htmlFor="task">Task</label>
                        <Field type="number"  className="bg-white text-black text-center" id="task" name="task" placeholder="Write!" />
                        <button className="bg-white text-black" type="submit" >Add</button>
                    </Form>
                </Formik>
                <div><h1>Tasks</h1>
                <ol>
                    {tasks.map((value, index) => {return (
                        <li key={index} className="w-full flex flex-row justify-between" >
                        
                            <span className=" w-full bg-white text-gray-700 text-sm font-bold py-2 mb-2" >{value}</span>
                            {/* <button className="bg-red-500 hover:bg-red-700 text-white  px-2 rounded" onClick={ () => deleteTask(index)}>Delete</button> */}
                        
                        
                        </li>

                    )}
               

                    )}

                </ol>
            </div>
            </div>

            

        </>
    );
}
