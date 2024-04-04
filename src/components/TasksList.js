import React from "react"
import axios from "axios"
import AddTask from "./AddTask"



const baseUrl = "http://localhost:8080/consol/task/list "



class TasksList extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            tasks: []
        }


        axios.get(baseUrl).then((res) => {

            console.log(res.data)
           
            this.setState({ tasks: res.data })
           

        })
        
       
            
    }


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
         if (this.state.tasks.length > 0)
            return (
                        <div>

                

                { this.state.tasks.map((el) => (<div className="task" key={el.id}>
                {/* {this.tasks.map((el) => (<div className="task" key={el.id}>{el.task} */}

                    {/* <h3>id: {el.id}; Tasks: {el.Task}; Status: {el.Status}</h3> */}
                      <h5 className="id">id: {el.id} </h5> 
                      <h3>Tasks: {el.task}</h3>
                      <h5 className="status">Status: {el.status}</h5>
                    

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