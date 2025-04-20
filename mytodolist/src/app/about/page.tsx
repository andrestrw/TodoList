'use client'

import { Formik, Form, Field } from "formik"
import { useCallback, useEffect, useState } from "react"

import TaskTitle from "../components/TaskTitle"
import TaskDescription from "../components/TaskDescription"
import TaskCompleted from "../components/TaskCompleted"

interface MyFormValues {
    title: string,
    description: string,
    new?: {},
    stateRealized?: boolean
}

export default function TodoList() {

    const [tasks, setTasks] = useState<MyFormValues[]>([
        { title: "🍞 Buy bread", description: "Whole‑grain baguette", stateRealized: false },
        { title: "🥗 Prep salad", description: "Wash lettuce and slice tomato", stateRealized: true },
        { title: "📚 Read 10 pages", description: "Continue 'Clean Code'", stateRealized: false },
        { title: "🏃‍♂️ Morning run", description: "5 km around the park", stateRealized: false },
        { title: "💧 Water plants", description: "Succulents and fern", stateRealized: true },
        { title: "🧹 Vacuum living room", description: "Focus under the sofa", stateRealized: false },
        { title: "💻 Fix bug #42", description: "Null pointer in login flow", stateRealized: false },
        { title: "🎸 Practice guitar", description: "Pentatonic scales – 15 min", stateRealized: true },
        { title: "📦 Ship package", description: "Return shoes via courier", stateRealized: false },
        { title: "🐕 Walk the dog", description: "20‑minute evening stroll", stateRealized: true },
        { title: "🛒 Grocery run", description: "Milk, eggs, pasta", stateRealized: false },
        { title: "✉️ Inbox zero", description: "Archive old newsletters", stateRealized: false },
        { title: "🎨 Sketch idea", description: "Logo concept for side project", stateRealized: true },
        { title: "🧘‍♀️ Meditation", description: "10 min breathing exercise", stateRealized: false },
        { title: "🧾 Pay electricity bill", description: "Due next Monday", stateRealized: true }
    ])

    const deleteTask = (taskToRemove: MyFormValues) => {
        setTasks((previousTasks) => [...previousTasks].filter((task, index) => !(task.description === taskToRemove.description && task.title === taskToRemove.title)))
    }
    useEffect(() => {
        console.log("🔁 tasks updated:", tasks);
      }, [tasks]); 

    const getData = useCallback((checked: boolean, idX: number) => {
        setTasks(previousTasks =>
            previousTasks.map((task, i) =>
                i === idX ? { ...task, stateRealized: checked } : task
            )
        );
    }, []);


    const initialValues: MyFormValues = {
        title: '', description: ""
    };


    return (
        <>
            <div className="w-3xs ">
                <h1>My Example</h1>
                <Formik
                    initialValues={initialValues}
                    onSubmit={(newTask, actions) => {

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
                <div>
                    <h1>Tasks</h1>
                    <ol>
                        {tasks.map((value, index) => {
                            return (
                                <li key={index} className="w-full flex flex-col justify-between py-2" >
                                    <TaskTitle title={value.title} taskCompleted={value.stateRealized} />
                                    <TaskDescription task={value} />
                                    <button className="bg-red-500 hover:bg-red-700 text-white  px-2 rounded" onClick={() => deleteTask(value)}>Delete</button>
                                    <TaskCompleted vaueTaskRealized={value.stateRealized} onSubmit={getData} idcheck={index} />
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

