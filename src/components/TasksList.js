import React from "react"

class TasksList extends React.Component {

    tasks = [
        {
            id: 1,
            Task: 'aaa',
            Status: "OPEN"

        },
        {
            id: 2,
            Task: 'bbb',
            Status: "OPEN"

        }

    ]
    render() {
        if(this.tasks.length > 0)
        return (<div>

            {this.tasks.map((el) => (<div className="task" key={el.id}>

                <h3>id: {el.id}; Tasks: {el.Task}; Status: {el.Status}</h3>

            </div>))}
        </div>)
                else
                return (<div className="task">
                    <h3>Task list empty</h3>

                </div>
            )
        
    }
}
export default TasksList