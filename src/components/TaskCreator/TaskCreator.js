import { useState } from "react"


const TaskCreator = (props) => {

    const [newTaskName, setNewTaskName] = useState("")
    const updateNewTaskValue = (e) => {
        setNewTaskName(e.target.value)
    }

    const createNewTask = () => {
        props.createNewTask(newTaskName)
        setNewTaskName("")
    }

    return (
        <div className="my-1">
            <input type="text" className="form-control" value={newTaskName} onChange={updateNewTaskValue} />
            <button onClick={createNewTask} className="btn btn-primary mt-1">Add</button>
        </div>
    )
}

export default TaskCreator
