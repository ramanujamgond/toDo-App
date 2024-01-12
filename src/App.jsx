import { useEffect, useState } from "react"
import AddTask from "./assets/components/AddTask"
import TaskList from "./assets/components/TaskList";

function App() {
  const [taskList, setTaskList] = useState([]);
  const [editedValue, setEditedValue] = useState([]);

  return (
    <>
      <div className="main_wrapper">
        <div className="inner_wrapper">
          <div className="to_do_heading">Get things Done!</div>
          <AddTask task={setTaskList} editedValue={editedValue} />
          <TaskList taskList={taskList} taskListUpdate={setTaskList} editedValue={setEditedValue} />
        </div>
      </div>
    </>
  )
}

export default App
