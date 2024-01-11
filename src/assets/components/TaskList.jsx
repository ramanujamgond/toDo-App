import React, { useEffect, useState } from 'react'

const TaskList = ({ taskList, taskListUpdate, editedValue }) => {

    const deleteTask = (id) => {
        const updatedList = taskList.filter((list, index) => {
            return index !== id;
        })

        if (updatedList.length === 0) {
            taskListUpdate([]);
            return;
        }

        taskListUpdate(updatedList);
    }

    const editTaskItem = (id) => {
        const editedIem = taskList.filter((item, index) => {
            return id === index;
        })

        const updatedList = taskList.filter((item, index) => {
            return id !== index;
        })
        taskListUpdate(updatedList);
        editedValue(editedIem);
    }

    return (
        <div className="task_list_wrapper mt-3">
            {taskList && taskList.map((task, index) => (
                <div className="task_cards" key={index}>
                    <span className="text-label">{task}</span>
                    <span className="icon_wrapper">
                        <span><i className="bi bi-pencil-square" onClick={() => editTaskItem(index)}></i></span>
                        <span><i className="bi bi-trash ms-3" onClick={() => deleteTask(index)}></i></span>
                    </span>
                </div>
            ))}

        </div>
    )
}

export default TaskList