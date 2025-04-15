'use client'

import { Formik, Form, Field } from "formik"
import { useState } from "react"

import TaskTitle from "../components/TaskTitle"
import TaskDescription from "../components/TaskDescription"


interface MyFormValues {
    title: string,
    description: string
}

interface test {
    title: string,
    description: string
}

export default function TodoList() {

    const [tasks, setTasks] = useState<test[]>([
        { title: "🧀 Buy cheese", description: "Get cheddar or mozzarella" },
        { title: "🥦 Pick up vegetables", description: "Broccoli, spinach, and carrots" },
        { title: "🥛 Buy milk", description: "1 liter of skimmed milk" }
    ])
    const [newTasks, setNewTask] = useState("")

    const initialValues: MyFormValues = { title: '', description: "" };

    return (
        <>
            <div className="w-3xs ">
                <h1>My Example</h1>
                <Formik
                    initialValues={initialValues}
                    onSubmit={(values, actions) => {
                        console.log(values)

                        // if (values.title.trim() !== ""  ) {
                        //     setTasks( previousTasks => [...previousTasks,values.title])
                        //     actions.resetForm()
                        //     console.log(actions);
                        // }

                    }}
                >
                    <Form className="flex flex-col text-center" >
                        <label htmlFor="title">Task</label>
                        <Field type="string" className="bg-white text-black text-center" id="title" name="title" placeholder="Write a Title!" />

                        <label htmlFor="description">Description</label>
                        <Field type="string" className="bg-white text-black text-center" id="description" name="description" placeholder="Write a Description!" />


                        <button className="bg-white text-black" type="submit" >Add</button>
                    </Form>
                </Formik>
                <div><h1>Tasks</h1>
                    <ol>
                        {tasks.map((value, index) => {
                            return (
                                <li key={index} className="w-full flex flex-row justify-between" >

                                    <TaskTitle title={value.title} />
                                    <TaskDescription description={value.description} />
                                    {/* <span className=" w-full bg-white text-gray-700 text-sm font-bold py-2 mb-2" >{value}</span> */}
                                    {/* <button className="bg-red-500 hover:bg-red-700 text-white  px-2 rounded" onClick={ () => deleteTask(index)}>Delete</button> */}


                                </li>

                            )
                        }


                        )}

                    </ol>
                </div>
            </div>



        </>
    );
}
