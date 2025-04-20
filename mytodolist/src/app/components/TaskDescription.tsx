interface MyFormValues  {
    title: string,
    description: string,
    stateRealized: boolean
}
export default function TaskDescription({ task }: { task: MyFormValues }) {
    return (
        <>
            <div className={task.stateRealized ? "border-2 border-solid py-2 px-2 line-through  " : "border-2 border-solid py-2 px-2"}>{task.description}</div>
        </>
    )
}