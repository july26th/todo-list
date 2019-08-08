import React, { Component} from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import Control from "./components/Control";
import TaskList from "./components/TaskList";
import { connect } from 'react-redux';
import * as actions from './actions/index'
class App extends Component{
  
  componentWillMount() {
    if(localStorage && localStorage.getItem('tasks')) {
      let items = JSON.parse(localStorage.getItem('tasks'));
      this.setState({
        tasks: items
      })
    }
  }




  onOpenForm = () => {
    this.props.onOpenForm();
    this.props.onClearTask({
      id: '',
      name: '',
      status: false
    }
    );
  }

  render(){
    var { tasks, keyword} = this.state;
    var { display } = this.props;
    const $ = window.$;
    if(display) {
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
        onClick={this.onOpenForm} data-target="#myModal">Thêm mới</button>
          {/* <button className="btn btn-primary" onClick={this.onGenerate} type="submit">Tạo key</button> */}
          <div id="myModal" className="modal fade" role="dialog">
          <div className="modal-dialog">
            {
             display ? 
            <TaskForm 
           /> : null
            }
          </div>
          </div>
            <Control  />
            <TaskList />
        </div>
      </div>
      </div>
      </div>
    );
    
   
  }
}


const mapStatetoProps = (state) => {
  return {
    display: state.display
  };
};

const mapDispatchtoProps = (dispatch, props) => {
  return {
    onOpenForm: () => {
      dispatch(actions.openForm());
    },
    onClearTask: (task) => {
      dispatch(actions.editTask(task));
    }
  };
};

export default connect(mapStatetoProps, mapDispatchtoProps)(App);


