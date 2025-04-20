interface TaskTitleProps {
    title: string;
    taskCompleted: boolean
}
// {title, taskCompleted}:TaskTitleProps
export default function TaskTitle(props:any) {
    return (
        <>
            <div className={props.taskCompleted? "border-2 border-solid py-2 px-2   line-through " 
            : "border-2 border-solid py-2 px-2  "}>{props.title}</div>
        </>
    )
}