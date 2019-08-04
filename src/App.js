import React, { Component} from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import Control from "./components/Control";
import TaskList from "./components/TaskList";
class App extends Component{
  constructor() {
    super();
    this.state = {
      tasks: [],
      isEditing: null,
      isDisplay: false
    }
  }
  
  componentWillMount() {
    if(localStorage && localStorage.getItem('tasks')) {
      let items = JSON.parse(localStorage.getItem('tasks'));
      this.setState({
        tasks: items
      })
    }
  }

  randomID(){
    return Math.floor((Math.random()*0x10000)+1).toString(16);
  }
  // onGenerate = () => {
  //   const taskslist = [
  //     {
  //       id: this.generateID(),
  //       taskName: 'Học ReactJS',
  //       status: true
  //     },
  //     {
  //       id: this.generateID(),
  //       taskName: 'Học HTML & CSS',
  //       status: true
  //     },
  //     {
  //       id: this.generateID(),
  //       taskName: 'Học Javascript',
  //       status: false
  //     }
  //   ];
  //   this.setState({
  //     tasks: taskslist
  //   });
  //   localStorage.setItem('tasks', JSON.stringify(taskslist));
  // };
  generateID(){
    return this.randomID() + this.randomID() + this.randomID() + '-' 
    + this.randomID() + this.randomID() + this.randomID();
  }

  onSubmit = (data) => {
    var {tasks} = this.state;
    if(data.id === ""){
    data.id = this.generateID();
    tasks = tasks.concat(data);
    }
    else {
      var neww = tasks.map((key, index) => {
        if(key.id === data.id)
        {
        tasks[index] = data;
        }
      });
    }

    this.setState({
      tasks: tasks,
      isDisplay: false,
      isEditing: null
    });
    localStorage.setItem('tasks', JSON.stringify(tasks)); 
    
  }
  onUpdateStatus = (id) => {
    var { tasks } = this.state;
    var s = tasks.map((key, index) => {
      if(index === id) {
        tasks[index].status = !tasks[index].status;
        this.setState({
          tasks: tasks
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
        
      }
    });
  };
  onDelete = (id) => {
    var { tasks } = this.state;
    var s = tasks.map((key, index) => {
      if(index === id) {
        tasks.splice(index, 1);
        this.setState({
          tasks: tasks
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
      }
    });


  }
  onEdit = (id) => {
    var { tasks } = this.state;
    var s = tasks.map((key, index) => {
      if(index === id) {
        this.setState({
          isEditing: tasks[index],
          isDisplay: true
        });
        const $ = window.$;
        $("#myModal").modal('show');
      }
    });
  }
  isDisplay = () => {
    this.setState({
      isDisplay: true
    });
  }
  onCloseForm = (value) => {
    if(value)
    this.setState({
      isDisplay: false
    })
  }
  deleteEdit = (value) => {
    if(value) 
    this.setState({
      isEditing: null
    })
  }
  render(){
    var { tasks, isEditing, isDisplay } = this.state;
    const $ = window.$;
    if(isDisplay) {
      $("#myModal").modal('show');
    }
    else {
      $("#myModal").modal('hide');
    }
    return(
      <div className="App">
      <div className="container">
           <div className="page-title text-center">Quản lý công việc</div>
      <div className="row">
        <div className="col-md-12">
        <button type="button" className="btn btn-primary" data-toggle="modal" 
         data-backdrop="static" data-keyboard="false"
        onClick={this.isDisplay} data-target="#myModal">Thêm mới</button>
          {/* <button className="btn btn-primary" onClick={this.onGenerate} type="submit">Tạo key</button> */}
          <div id="myModal" className="modal fade" role="dialog">
          <div className="modal-dialog">
            {
             isDisplay ? 
            <TaskForm deleteEdit={this.deleteEdit} onCloseForm={this.onCloseForm} onSubmit={this.onSubmit} isEditing = {isEditing} /> : null
            }
          </div>
          </div>
            <Control />
            <TaskList tasks = {tasks} onDelete={this.onDelete}
             onUpdateStatus={this.onUpdateStatus} onEdit={this.onEdit}/>
        </div>
      </div>
      </div>
      </div>
    );
    
   
  }
}

export default App;

