import React from "react"

class AddTask extends React.Component {
  taskAdd = {}
  constructor(props) {
    super(props)
    this.state = {
      task: ""
    }

    // this.AddTasks = this.addTasks.bind(this)
    //this.deleteTasks = this.deleteTasks.bind(this)
  }


  render() {
    return (
      <form className="addform">
        <input placeholder="Task" onChange={(e) => this.setState({ task: e.target.value })} />
        <button type="" onClick={() => {

                        this.taskAdd = {
                          task: this.state.task,
                          id: this.state.id

                        }

                        if (this.props.task)
                          this.taskAdd.id = this.props.task.id
                        this.props.onAdd(

                          this.taskAdd
                          //   task: this.state.task,

                        )

                      }

        }> Add </button>



      </form>
    )
  }
}
export default AddTask