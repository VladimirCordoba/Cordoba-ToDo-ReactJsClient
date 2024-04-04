import React from "react"
import Header from "./components/header"
import TasksList from "./components/TasksList"
import AddTask from "./components/AddTask"

class App extends React.Component {
    render() {
        return (<div>
            <Header title="Cordoba-ToDo" />
           
            <main>
            
                <TasksList /> 
               
            </main>
            <aside>
            <AddTask />
            </aside>

        </div>)
    }

}
export default App