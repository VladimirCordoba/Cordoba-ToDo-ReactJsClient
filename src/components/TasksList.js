import React from "react"
import AddTask from "./AddTask"


import Task from "./Task"



// const baseUrl = "http://localhost:8080/consol/task/list "

class TasksList extends React.Component {
    //********************************* */
    //перенесли этот конструктор в App.js

    //     constructor(props) {
    //         super(props)

    //         this.state = {
    //             tasks: []
    //         }


    //         axios.get(baseUrl).then((res) => {

    //             console.log(res.data)

    //             this.setState({ tasks: res.data })

    //         }) 

    //     }
    //*********************************************************** */

    // tasks = [
    //     {
    //         id: 1,
    //         Task: 'aaa',
    //         Status: "OPEN"

    //     },
    //     {
    //         id: 2,
    //         Task: 'bbb',
    //         Status: "OPEN"

    //     }

    // ]

    render() {
        if (this.props.tasks.length > 0)
            return (
                <div>

                    {this.props.tasks.map((el) => (

                        <Task chStat={this.props.chStat} onEdit={this.props.onEdit} onDelete={this.props.onDelete} key={el.id} onetask={el}/>
                    ))}
                </div>)
        else
            return (<div className="task">
                <h3>Task list empty</h3>

            </div>
            )

    }
}
export default TasksList