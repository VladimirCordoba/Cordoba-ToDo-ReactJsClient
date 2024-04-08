import React from "react"
import Header from "./components/header"
import TasksList from "./components/TasksList"
import AddTask from "./components/AddTask"
import axios from "axios"
import Task from "./components/Task"



const baseUrl = "http://localhost:8080/consol/task/list "
const postAddUrl = "http://localhost:8080/react/addtask"
// const postDelUrl = "http://localhost:8080/task/delate"
 const postDelUrl = "http://localhost:8080/react/deltask"



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

                <TasksList tasks={this.state.tasks} onDelete={this.deleteTasks}/>
               
            </main>
            <aside>
                <AddTask onAdd={this.addTasks} />
            </aside>

        </div>)
    }

    // deleiting Tasks method

    deleteTasks(id) {
      //  console.log({id})
        //  this.setState({
        //     tasks: this.state.tasks.filter(id)
        // })
        axios.post(postDelUrl, {id}).then(res => {
            //   console.log(res);
            //   console.log(res.data)
            
         // })
         })
         window.location.reload()

    }


    // adding NEW task
    addTasks(task) {
      //  console.log(task)
        // Send a POST request
        // // axios.post(postUrl, task).then((res1) => {this.setState({tasks:res1.data})
         axios.post(postAddUrl, task).then(res => {
           //  console.log(res);
           //  console.log(res.data)

        // })
        })

    }





}
export default App