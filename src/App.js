import React, { Component } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import Search from "./components/Search";
import Sort from "./components/Sort";
import todoImg from './img/todo.png';
import { connect } from 'react-redux';
import * as actions from './actions/index'
class App extends Component {

  componentWillMount() {
    if (localStorage && localStorage.getItem('tasks')) {
      let items = JSON.parse(localStorage.getItem('tasks'));
      this.setState({
        tasks: items
      })
    } else {
      this.setState({
        tasks: ""
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

  render() {
    var { tasks, keyword } = this.state;
    var { display } = this.props;
    const $ = window.$;
    if (display) {
      $("#myModal").modal('show');
    }
    else {
      $("#myModal").modal('hide');
    }



    return (
      <div className="App">

        <div className="container">
        <div className="row header">
            <div className="col-md-3">
              <div className="page-title d-flex align-items-center ">
                <img src={todoImg} alt='' width="90px" height="90px" />
                <h2>Todo List</h2>
              </div>

            </div>
            <div className="col-md-7 d-flex align-items-center">
              <Search />
            </div>
            <div className="col-md-2 d-flex justify-content-end align-items-center">
              <button type="button" className="btn btn-hover" data-toggle="modal"
                data-backdrop="static" data-keyboard="false"
                onClick={this.onOpenForm} data-target="#myModal">New Task</button>
            </div>
          </div>

          <div className="row mt-3">
            
            <Sort />
        
          
          
            <div className="col-md-9 p-4 border-left">

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


