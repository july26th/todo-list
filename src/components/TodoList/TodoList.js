import React, { Component } from "react";
import "../../App.css";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import TodoHeader from "./TodoHeader";
import Sort from "./Sort";
import { connect } from 'react-redux';
class TodoList extends Component {

  render() {
    var { display } = this.props;

    return (

      <div className="container todo-list">
        <TodoHeader />
        <div className="row mt-3">
          <Sort />
          <div className="col-md-9 p-4 border-left">

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
    );


  }
}
const mapStatetoProps = (state) => {
  return {
    display: state.display
  };
};

export default connect(mapStatetoProps, null)(TodoList);


