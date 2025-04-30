import { error } from "console"
import getPosts from "../../../_actions/taskAction"

export default async function CallCb() {
    const { data, errMsg } = await getPosts()

    if (errMsg) return <h1>{errMsg}</h1>

    console.log(data)
    return (<div>callCb test</div>
    )
}
