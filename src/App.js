import { useState, useEffect } from 'react';


import TaskRow from './components/TaskRow/TaskRow';
import TaskBanner from "./components/TaskBanner/TaskBanner"
import TaskCreator from './components/TaskCreator/TaskCreator';
import VisibilityControl from './components/VisibilityControl/VisibilityControl';

function App() {

  const [userName, setUserName] = useState("Samuel");
  const [taskItem, setTaskItem] = useState([{
    name: "Task one",
    done: false,
  }, {
    name: "Task two",
    done: false,
  }, {
    name: "Task three",
    done: true,
  },])
  const [showCompleted, setShowCompleted] = useState(true)

  useEffect(() => {
    let data = localStorage.getItem("task");
    if (data != null) {
      setTaskItem(JSON.parse(data))
    } else {
      setUserName("Samuel Example")
      setTaskItem([{
        name: "Task one  example",
        done: false,
      }, {
        name: "Task two example",
        done: false,
      }, {
        name: "Task three example",
        done: true,
      },])
      setShowCompleted(true)
    }
  }, [])

  useEffect(()=> {
    localStorage.setItem("task" , JSON.stringify(taskItem))
  }, [taskItem])

  const createNewTask = (taskName) => {
    if (!taskItem.find(t => t.name === taskName)) {
      setTaskItem([...taskItem, { name: taskName, done: false }])
    }
  }

  const toggleTask = (task) => {
    setTaskItem(taskItem.map((t) => (
      t.name === task.name ? { ...t, done: !task.done } : t
    )))
  }

  const taskTableRows = (doneValue) =>
    taskItem
      .filter(task => task.done === doneValue)
      .map((task) => (
        <TaskRow task={task} key={task.name} toggleTask={toggleTask} />
      ))


  return (
    <div>
      <TaskBanner userName={userName} taskItem={taskItem} />
      <TaskCreator createNewTask={createNewTask} />

      <table className="table table-striped table-bordered">
        <thead>
          <th>Description</th>
          <th>Done</th>
        </thead>
        <tbody>
          {taskTableRows(false)}
        </tbody>
      </table>

      <div className="bg-secondary-text-white text-center p-2">
        <VisibilityControl description="completed tasks" isChecked={showCompleted} callback={checked => setShowCompleted(checked)} />
      </div>

      {
        showCompleted && (
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Description</th>
                <th>Done</th>
              </tr>
            </thead>
            <tbody>
              {taskTableRows(true)}
            </tbody>
          </table>
        )
      }

    </div>
  );
}

export default App;
