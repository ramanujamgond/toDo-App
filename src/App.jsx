function App() {

  return (
    <>
      <div className="main_wrapper">
        <div className="inner_wrapper">
          <div className="to_do_heading">Get things Done!</div>
          <div className="add_task_wrapper">
            <input type="text" placeholder="What is the task today?" />
            <button>Add Task</button>
          </div>
          <div className="task_list_wrapper">
            <div className="task_cards">
              <span className="text-label">eat the milk</span>
              <span className="icon_wrapper">
                <span><i className="bi bi-pencil-square"></i></span>
                <span><i className="bi bi-trash ms-3"></i></span>
              </span>
            </div>

            <div className="task_cards">
              <span className="text-label">eat the milk</span>
              <span className="icon_wrapper">
                <span><i className="bi bi-pencil-square"></i></span>
                <span><i className="bi bi-trash ms-3"></i></span>
              </span>
            </div>

            <div className="task_cards">
              <span className="text-label">eat the milk</span>
              <span className="icon_wrapper">
                <span><i className="bi bi-pencil-square"></i></span>
                <span><i className="bi bi-trash ms-3"></i></span>
              </span>
            </div>

            <div className="task_cards">
              <span className="text-label">eat the milk</span>
              <span className="icon_wrapper">
                <span><i className="bi bi-pencil-square"></i></span>
                <span><i className="bi bi-trash ms-3"></i></span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
