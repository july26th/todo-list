import React, { Component } from "react";
import TaskItem from "./TaskItem";
import { connect } from 'react-redux';
import * as actions from '../../actions/index'

class TaskList extends Component {
  constructor() {
    super();
    this.state = {
      filterName: '',
      filterStatus: -1,
      filterDate: "today"
    };
  }

  render() {
    var { tasks, sort } = this.props;
    var today = new Date();
    if (sort.by === "date") {
      if (sort.value === 1) {
        tasks = tasks.filter((key) => {
          let taskDate = new Date(JSON.parse(key.startDate));
          return (taskDate.getDate() === today.getDate() &&
            taskDate.getMonth() === today.getMonth() &&
            taskDate.getFullYear() === today.getFullYear())
        });
      }
      else if (sort.value === -1) {
        tasks = tasks.filter((key) => {
          let timeTaskDate = (new Date(JSON.parse(key.startDate))).setHours(0, 0, 0, 0);
          var timeToday = today.setHours(0, 0, 0, 0);
          return (timeTaskDate > timeToday)
        });
      }
      else {
        tasks.sort((a, b) => {
          return (new Date(JSON.parse(a.startDate))).getTime() - (new Date(JSON.parse(b.startDate))).getTime();
        });
      }
    }

    var elmTasks = tasks.map((item, index) => {
      if (item.userid === this.props.user.id) 
        return <TaskItem key={index} id={index} task={item} />
    });
    var countDone = 0;
    var countNotDone = 0;
    tasks.map((item) => {
      if (item.userid === this.props.user.id)
        return item.status ? countDone++ : countNotDone++
    });
    var test = "";
    if (sort.value === 1) test = `Due Today (${countNotDone})`;
    else if (sort.value === -1) test = `Upcoming (${countNotDone})`;
    else test = `Tasks Done (${countDone})`

    return (
      <div className="row">
        <div className="col-md-12">
          <h4> {test}</h4>;
          <table className="table table-borderd table-hover mt-3">

            <tbody>

              {elmTasks}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStatetoProps = (state) => {
  return {
    tasks: state.tasks,
    sort: state.sortTask,
    user: state.authentication.user
  };
};

const mapDispatchtoProps = (dispatch) => {
  return {
    onFilterTable: (filter) => {
      dispatch(actions.filterTable(filter));
    }
  };
};

export default connect(mapStatetoProps, mapDispatchtoProps)(TaskList);
