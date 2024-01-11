import React, { useEffect, useState } from 'react'

const AddTask = ({ task, editedValue }) => {
    const [addTask, setAddTask] = useState("");

    useEffect(() => {
        if (editedValue) {
            setAddTask(editedValue);
        }
    }, [editedValue])

    const addTaskToList = (e) => {
        e.preventDefault();

        if (addTask !== "") {
            task((prev) => ([...prev, addTask]));
            setAddTask("");
        }
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && addTask !== "")
            addTaskToList(e);
    }

    return (
        <>
            <div className="add_task_wrapper">
                <input type="text" placeholder="What is the task today?" value={addTask} onChange={(e) => setAddTask(e.target.value)} onKeyDown={handleKeyDown} />
                <button onClick={(e) => addTaskToList(e)}>Add Task</button>
            </div>
        </>
    )
}

export default AddTask