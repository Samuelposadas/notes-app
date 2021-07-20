

const TaskRow = (props) => {
    return (
        <>
            <tr key={props.task.name}>
                <td>{props.task.name}</td>
                <input type="checkbox" checked={props.task.done} onChange={() => props.toggleTask(props.task)} />
            </tr>
        </>
    )
}

export default TaskRow
