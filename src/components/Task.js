import React from "react"
import { IoCloseCircleSharp, IoHammerSharp } from "react-icons/io5"



class Task extends React.Component {

// constructor(props) {
//     super(props)
//     this.state = { editForm: false}
// }


    onetask = this.props.onetask
    render() {
        return (
            <div className="task" >
                        {/* {this.tasks.map((el) => (<div className="task" key={el.id}>{el.task} */}

                        {/* <h3>id: {el.id}; Tasks: {el.Task}; Status: {el.Status}</h3> */}

                        <h5 className="id">id: {this.onetask.id} </h5>
                        <h3>Task: {this.onetask.task}</h3>

                        <div className="box" >

                            
                             <IoCloseCircleSharp onClick={() => this.props.onDelete(this.onetask.id)  } className="delete-icon" /> 
                            {/* <IoCloseCircleSharp onClick={() => this.props.onDelete(id="4860")  } className="delete-icon" /> */}
                            <IoHammerSharp className="edit-icon" />
                            <h5 className="status">Status: {this.onetask.status}</h5>

                        </div>


                    </div>
        )
    }
}
export default Task