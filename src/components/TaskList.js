import React, { Component} from "react";
import TaskItem from "./TaskItem";
import { connect } from 'react-redux';
import * as actions from './../actions/index'

class TaskList extends Component{
  constructor() {
    super();
    this.state = {
      filterName: '',
      filterStatus: -1,
      filterDate: "today"
    };
  }
  onChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({
      [name] : value
    });
    let filter = {
      filterName: name === 'filterName' ? value : this.state.filterName,
      filterStatus: name === 'filterStatus' ? value : this.state.filterStatus
    };
    this.props.onFilterTable(filter)
  }
  render(){
    var { tasks, filterTable, searchTask, sort } = this.props;
    var today = new Date();
    // if(parseDate.getDate() == today.getDate() &&
    // parseDate.getMonth() == today.getMonth() &&
    // parseDate.getFullYear() == today.getFullYear())
    // {
    //   console.log('is today');
    // }
    // else console.log('not today');
    console.log(sort);
    if(sort.by === "date") {
      if(sort.value === 1) {
      tasks = tasks.filter((key) => {
        let taskDate = new Date (JSON.parse(key.startDate));
        return ( taskDate.getDate() == today.getDate() &&
        taskDate.getMonth() == today.getMonth() &&
        taskDate.getFullYear() == today.getFullYear() )
     });
    }
    else if (sort.value === -1) {
      tasks = tasks.filter((key) => {
        let timeTaskDate = (new Date (JSON.parse(key.startDate))).setHours(0, 0, 0, 0);
        var timeToday = today.setHours(0, 0, 0, 0);
        console.log(timeTaskDate, timeToday);
        return ( timeTaskDate > timeToday)
     });
    }
    else {
       tasks.sort((a, b) => {
     //   return a.taskName.length - b.taskName.length;
 return (new Date (JSON.parse(a.startDate))).getTime() - (new Date (JSON.parse(b.startDate))).getTime();
      });
    }
    }
    if(filterTable.filterName)
    {
      tasks = tasks.filter((key) => {
         return key.taskName.toLowerCase().indexOf(filterTable.filterName) !== -1;
       
      });
    }
    tasks = tasks.filter((key) =>{
      if(filterTable.filterStatus === -1) return key;
      else  return key.status === (filterTable.filterStatus === 0 ? false : true);
    });
    tasks = tasks.filter((key) => {
      return key.taskName.toLowerCase().indexOf(searchTask) !== -1;
    });
    
    if(sort.by === 'name')
    {
      tasks.sort((a, b) => {
        if(a.taskName > b.taskName) return sort.value;
        else if(a.taskName < b.taskName) return -sort.value;
        else return 0;
      });
    } else {
      tasks.sort((a, b) => {
        if(a.status > b.status) return -sort.value;
        else if(a.status < b.status) return sort.value;
        else return 0;
      });
    }

    var elmTasks = tasks.map((item, index) => {
      return <TaskItem key={index} id={index} task={item} />
    }); 
    var count = 0;
    tasks.map((item) => {
      return item.status ? "" : count++ 
    });
    return(
        <div className="row">
              <div className="col-md-12">
                <h4>Due Today ({count})</h4>
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
    filterTable: state.filterTable,
    searchTask: state.searchTask,
    sort: state.sortTask
  };
};

const mapDispatchtoProps = (dispatch, props) => {
  return {
    onFilterTable: (filter) => {
      dispatch(actions.filterTable(filter));
    }
  };
};

export default connect(mapStatetoProps, mapDispatchtoProps)(TaskList);
