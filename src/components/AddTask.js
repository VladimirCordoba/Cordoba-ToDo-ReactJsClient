import React from "react"

class AddTask extends React.Component {
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
        <input placeholder="Task" onChange={(e) => this.setState({task: e.target.value})}/>
        <button type=""onClick={() => this.props.onAdd({
          task: this.state.task,
        })}> Add new tasks</button>



      </form>
    )
  }
}
export default AddTask