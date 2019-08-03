import React, { Component} from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import Control from "./components/Control";
import TaskList from "./components/TaskList";
class App extends Component{
  constructor() {
    super();
    this.state = {
      tasks: []
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
  onGenerate = () => {
    const taskslist = [
      {
        id: this.generateID(),
        name: 'Học ReactJS',
        status: true
      },
      {
        id: this.generateID(),
        name: 'Học HTML & CSS',
        status: true
      },
      {
        id: this.generateID(),
        name: 'Học Javascript',
        status: false
      }
    ];
    this.setState({
      tasks: taskslist
    });
    localStorage.setItem('tasks', JSON.stringify(taskslist));
  };
  generateID(){
    return this.randomID() + this.randomID() + this.randomID() + '-' 
    + this.randomID() + this.randomID() + this.randomID();
  }
  render(){
    var { tasks } = this.state;
    return(
      <div className="App">
      <div className="container">
           <div className="page-title">Quản lý công việc</div>
      <div className="row">
        <div className="col-md-12">
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">Thêm mới</button>
          <button className="btn btn-primary" onClick={this.onGenerate} type="submit">Tạo key</button>
          <div id="myModal" class="modal fade" role="dialog">
            <TaskForm />
          </div>
            <Control />
            <TaskList tasks = {tasks}/>
        </div>
      </div>
      </div>
      </div>
    );
    
   
  }
}

export default App;

