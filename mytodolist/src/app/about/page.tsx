'use client'

import { Formik, Form, Field } from "formik"
import { useState } from "react"

import TaskTitle from "../components/TaskTitle"
import TaskDescription from "../components/TaskDescription"



interface MyFormValues {
    title: string,
    description: string
}


export default function TodoList() {

    const [tasks, setTasks] = useState<MyFormValues[]>([
        { title: "🧀 Buy cheese", description: "Get cheddar or mozzarella" },
        { title: "🥦 Pick up vegetables", description: "Broccoli, spinach, and carrots" },
        { title: "🥛 Buy milk", description: "1 liter of skimmed milk" }, {
            title: "1", description: "1"
        },{ title: "🍞 Buy bread", description: "Whole grain bread" },
        { title: "🍎 Get apples", description: "Fuji or Granny Smith apples" },
        { title: "🍗 Purchase chicken", description: "Chicken breast 500g" },
        { title: "☕ Buy coffee", description: "Ground coffee medium roast" },
        { title: "🍌 Get bananas", description: "A bunch of ripe bananas" },
        { title: "🥚 Eggs shopping", description: "A dozen organic eggs" },
        { title: "🐟 Get fish", description: "Fresh salmon filet" },
        { title: "🍅 Tomatoes", description: "Cherry tomatoes pack" },
        { title: "🧻 Toilet paper", description: "Pack of 12 rolls" },
        { title: "🧼 Laundry detergent", description: "Bottle of hypoallergenic detergent" }
    ])
   

    const deleteTask = (valueToRemove: MyFormValues) => { 
        const updateTask:any =  tasks.filter((task) => { 
            return !(task.description === valueToRemove.description && task.title === valueToRemove.title);
        })
    console.log(updateTask)
    setTasks(updateTask)
    }

    

    const initialValues: MyFormValues = { title: '', description: "" };

    return (
        <>
            <div className="w-3xs ">
                <h1>My Example</h1>
                <Formik
                    initialValues={initialValues}
                    onSubmit={(newTask, actions) => {
                        //console.log(newTask)

                        const duplicatesFound = tasks.find((task) => { return (task.title === newTask.title && task.description === newTask.description) })
                        console.log(duplicatesFound)

                        if (duplicatesFound === undefined) {
                            if (newTask.title.trim() !== "" && newTask.description.trim() !== "") {
                                setTasks(previousTasks => [...previousTasks, newTask])
                                actions.resetForm()
                                console.log(actions);
                            }
                        } else { alert("Elemento duplicado!!!") }



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
                                <li key={index} className="w-full flex flex-col justify-between py-2" >

                                    <TaskTitle title={value.title} />
                                    <TaskDescription description={value.description} />
                                    {/* <span className=" w-full bg-white text-gray-700 text-sm font-bold py-2 mb-2" >{value}</span> */}
                                    <button className="bg-red-500 hover:bg-red-700 text-white  px-2 rounded" onClick={() => deleteTask(value)}>Delete</button>


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
