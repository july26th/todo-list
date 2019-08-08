import React, { Component} from "react";
import TaskItem from "./TaskItem";
import { connect } from 'react-redux';
import * as actions from './../actions/index'

class TaskList extends Component{
  constructor() {
    super();
    this.state = {
      filterName: '',
      filterStatus: -1
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


    return(
        <div className="row">
              <div className="col-md-12">
               <table className="table table-borderd table-hover mt-3">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Tên</th>
                  <th>Trạng thái</th>
                  <th>Hành động</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                  <td>
                    <input type="text" className="form-control" name="filterName"
                    value={this.state.filterName} onChange={this.onChange}
                    />
                  </td>
                  <td>
                    <select className="form-control" name="filterStatus"
                    value={this.state.filterStatus} onChange={this.onChange} >
                      <option value={-1}>Tất cả</option>
                      <option value={0}>Ẩn</option>
                      <option value={1}>Kích hoạt</option>
                    </select>
                  </td>
                  <td></td>
                </tr>
                
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
