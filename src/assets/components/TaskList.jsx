import React, { useEffect, useState } from 'react'

const TaskList = ({ taskList, taskListUpdate, editedValue }) => {
    const [activeStatus, setActiveStatus] = useState(null);

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
        const editValue = taskList.map((item, index) => {
            if (id === index) {
                setActiveStatus(id);
                return { value: item.value, id: id };
            }
        })

        editedValue(() => ([{ value: editValue[id].value, id: editValue[id].id }]));
    }

    useEffect(() => {
        setActiveStatus(null)
    }, [taskList])

    return (
        <div className="task_list_wrapper mt-3">
            {taskList && taskList.map((task, index) => (
                <div className={`task_cards ${activeStatus === index ? "active__card" : null}`} key={index}>
                    <span className="text-label">{task.value}</span>
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