import React from "react"
import Header from "./components/header"
import TasksList from "./components/TasksList"
import AddTask from "./components/AddTask"
import axios from "axios"
import Task from "./components/Task"



const baseUrl = "http://localhost:8080/consol/task/list "
const postAddUrl = "http://localhost:8080/react/addtask"
 const postDelUrl = "http://localhost:8080/react/deltask"
 const postEditUrl = "http://localhost:8080/react/edittask"
 const poschStatusUrl = "http://localhost:8080/react/editstatus"


class App extends React.Component {




    // перенесли этот конструктор в App.js


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


    render() {
        return (<div>
            <Header title="Cordoba-ToDo" />

            <main>

                <TasksList chStat={this.chStatus} tasks={this.state.tasks} onEdit={this.editTask} onDelete={this.deleteTasks}/>
               
            </main>
            <aside>
                <AddTask onAdd={this.addTasks} />

{/*                 
                <div class="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="light" 
                data-type="VERTICAL" data-vanity="vladimirs-rjazanovs-259b79300" data-version="v1">
                    
                    </div>
               */}
              
              

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

    editTask(task){
    console.log(task)

    axios.post(postEditUrl, task).then(res => {
        
     })

    }
// new methot status change
chStatus(task){
    console.log(task)
    axios.post(poschStatusUrl, task).then(res => {
        
    })
    window.location.reload()
}


}
export default App