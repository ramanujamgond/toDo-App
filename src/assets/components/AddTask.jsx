import React, { useEffect, useState } from 'react'

const AddTask = ({ task, editedValue }) => {
    const [addTask, setAddTask] = useState("");

    // console.log("editedValue[0]?.id", editedValue[0]?.id);

    useEffect(() => {
        setAddTask(editedValue[0]?.value || "")
    }, [editedValue]);

    const addTaskToList = (e) => {
        e.preventDefault();

        if (addTask !== "") {
            task((prev) => ([...prev, { value: addTask }]));
            setAddTask("");
        }
    }

    const editTaskToList = (e, id) => {
        e.preventDefault();
        if (addTask !== "") {
            task(prevTask => prevTask.map((item, index) => index === id ? { value: addTask } : item));
            setAddTask("");
            editedValue[0] = {};
        }
    }

    return (
        <>
            <div className="add_task_wrapper">
                <input type="text" placeholder="What is the task today?" value={addTask} onChange={(e) => setAddTask(e.target.value)} />
                {typeof editedValue[0]?.id === "number" ? (
                    <button onClick={(e) => editTaskToList(e, editedValue[0]?.id)}>Edit Task</button>
                ) : (
                    <button onClick={(e) => addTaskToList(e)}>Add Task</button>
                )}
            </div>
        </>
    )
}

export default AddTask