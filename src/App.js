import React from "react"
import Header from "./components/header"
import TasksList from "./components/TasksList"
import AddTask from "./components/AddTask"
import axios from "axios"



const baseUrl = "http://localhost:8080/consol/task/list "
//const postUrl = "http://localhost:8080/consol/task/create"
const postUrl = "http://localhost:8080/react/addtask"

class App extends React.Component {




    // перенесли этот конструктор в App.js


    constructor(props) {
        super(props)

        this.state = {
            tasks: []
        }


        axios.get(baseUrl).then((res) => {

            //  console.log(res.data)

            this.setState({ tasks: res.data })

        })

    }


    render() {
        return (<div>
            <Header title="Cordoba-ToDo" />

            <main>

                <TasksList tasks={this.state.tasks} />

            </main>
            <aside>
                <AddTask onAdd={this.addTasks} />
            </aside>

        </div>)
    }
    addTasks(task) {
        console.log(task)
        // Send a POST request
        // // axios.post(postUrl, task).then((res1) => {this.setState({tasks:res1.data})
         axios.post(postUrl, task).then(res => {
             console.log(res);
             console.log(res.data)

        // })
        })

    }





}
export default App