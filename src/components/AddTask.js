import React from "react"

class AddTask extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tasks: ""
    }

  }


  render() {
    return (
      <form className="addform">
        <input placeholder="Task" />
        <button type="button"> Add new tasks</button>



      </form>
    )
  }
}
export default AddTask