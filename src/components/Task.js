import React from "react"
import { IoCloseCircleSharp, IoHammerSharp } from "react-icons/io5"
import AddTask from "./AddTask"




class Task extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            editForm: false,
            // isTrue: false
          
        }

    }


    

    onetask = this.props.onetask
    render() {
        return (
            <div className="task" >
                {/* {this.tasks.map((el) => (<div className="task" key={el.id}>{el.task} */}

                {/* <h3>id: {el.id}; Tasks: {el.Task}; Status: {el.Status}</h3> */}

                <h5 className="id">id: {this.onetask.id} </h5>
                 {/* getting the task */}
                <h3 className={this.onetask.status}>{this.onetask.task}</h3>  

                <div className="box" >


                    <IoCloseCircleSharp onClick={() => this.props.onDelete(this.onetask.id)} className="delete-icon" />
                    {/* <IoCloseCircleSharp onClick={() => this.props.onDelete(id="4860")  } className="delete-icon" /> */}
                    <IoHammerSharp onClick={() => {
                        this.setState({
                            editForm: !this.state.editForm
                        })
                    }} className="edit-icon" />
                     <h5 onClick={() => this.props.chStat(this.onetask)}  
//                     {/* <h5 onClick={() => {this.props.chStat(this.onetask);this.setState({isTrue: !this.state.isTrue}) } } */}
// {/*                         

//                         // className={!this.state.isTrue ? "greentxt" : "redtxt"}>  {this.onetask.status} </h5> */}
                        className={this.onetask.status}>  {this.onetask.status} </h5>


                    {/*  displaing form for task edit */}
                    {this.state.editForm && <AddTask task={this.onetask} onAdd={this.props.onEdit} />}
                    {/* {this.state.statusForm && <h5 className="statusColose"> {this.onetask.status}</h5>} */}

                    

                </div>


            </div>
        )
    }
}
export default Task