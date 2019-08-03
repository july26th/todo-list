import React, { Component} from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import Control from "./components/Control";
import TaskList from "./components/TaskList";
class App extends Component{
  constructor() {
    super();

  }
  
  
  render(){
    return(
      <div className="App">
         <div className="container">
           <div className="page-title">Quản lý công việc</div>
      <div className="row">
        <div className="col-md-4"> 
        <TaskForm />
        </div>
        <div className="col-md-8">
          <button className="btn btn-primary" type="submit">Thêm mới</button>
            <Control />
            <TaskList />
      </div>
    </div>
      </div>
      </div>
    );
    
   
  }
}

export default App;

