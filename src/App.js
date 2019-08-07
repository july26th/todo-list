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
      isDisplay: false,
      filter: {
        name: '',
        status: -1
      },
      keyword: '',
      sortBy: 'name',
      sortValue: 1
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
  };
  deleteEdit = (value) => {
    if(value) 
    this.setState({
      isEditing: null
    })
  };
  onFilter = (filterName, filterStatus) =>{
    filterStatus = parseInt(filterStatus)
    this.setState({
      filter: {
        name: filterName.toLowerCase(),
        status: filterStatus
      }
    });
  };
  onSearch = (value) => {
    this.setState({
      keyword: value
    });
  };
  onSort = (sortBy, sortValue) => {
    this.setState({
      sortBy: sortBy,
      sortValue: sortValue
    }
    // ,() => console.log(this.state)
    );
    
  }
  render(){
    var { tasks, isEditing, isDisplay, filter, keyword, sortBy, sortValue } = this.state;
    const $ = window.$;
    if(sortBy === 'name')
    {
      tasks.sort((a, b) => {
        if(a.taskName > b.taskName) return sortValue;
        else if(a.taskName < b.taskName) return -sortValue;
        else return 0;
      });
    } else {
      tasks.sort((a, b) => {
        if(a.status > b.status) return -sortValue;
        else if(a.status < b.status) return sortValue;
        else return 0;
      });
    }
    if(isDisplay) {
      $("#myModal").modal('show');
    }
    else {
      $("#myModal").modal('hide');
    }
    if(keyword) {
      tasks = tasks.filter((key) => {
        return key.taskName.toLowerCase().indexOf(keyword) !== -1;
      });
    }
    if(filter) {
      if(filter.name)
      {
        tasks = tasks.filter((key) => {
          return key.taskName.toLowerCase().indexOf(filter.name) !== -1;
        });
      }
      tasks = tasks.filter((key) =>{
        if(filter.status === -1) return key;
        else  return key.status === (filter.status === 0 ? false : true);
      });
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
            <Control onSearch={this.onSearch} onSort={this.onSort}/>
            <TaskList onFilter={this.onFilter} onDelete={this.onDelete}
             onUpdateStatus={this.onUpdateStatus} onEdit={this.onEdit}/>
        </div>
      </div>
      </div>
      </div>
    );
    
   
  }
}

export default App;

