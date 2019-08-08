import React, { Component} from "react";
import { connect } from 'react-redux';
import * as actions from './../actions/index'
class TaskForm extends Component{
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      taskName: '',
      status: false
    }
  }
  componentWillMount() {
    if(this.props.editTask && this.props.editTask.id !== "")
    {
     this.setState({
        id: this.props.editTask.id,
        taskName: this.props.editTask.taskName,
        status: this.props.editTask.status
      })
    }
    else {
      this.onClear();
    }
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps && nextProps.editTask)
    {
     this.setState({
        id: this.props.editTask.id,
        taskName: this.props.editTask.taskName,
        status: this.props.editTask.status
      })
    }
    else {
      this.onClear();
    }
  }
  onChange = (event) => {
    var name = event.target.name;
    var value = event.target.value;
    if(name === 'status') 
    value === 'false' ? value = false : value = true;
    this.setState({
      [name]: value
    });
  }
  onSubmit = (event) => {
    event.preventDefault();
    this.props.onSaveTask(this.state);
    this.props.onSubmitForm(); 
    this.onClear(); 
  }
  onClear = () => {
    this.setState({
      taskName: '',
      status: false
    });
  }
  onCloseForm = () => {
    this.onClear();
    this.props.onCloseForm();
  };
  render(){
    var {display} = this.props;
    
    return(
          
              <div className="modal-content">
                <div className="modal-header header-taskform ">
                  <h4 className="modal-title">
                  {this.props.editTask.id ? 'Sửa công việc' : 'Thêm công việc'}</h4>
                  <button type="button" onClick={this.onCloseForm} className="close" >&times;</button>
                </div>
                <form onSubmit={this.onSubmit}>
                  
                <div className="modal-body">
                  <div className="form-group">
                    <label>Tên: </label>
                    <input required type="text" className="form-control" 
                    name="taskName"  value={this.state.taskName} onChange={this.onChange}/>
                  </div>
                    <label>Trạng thái: </label>
                    <select className="form-control" name="status"
                    value={this.state.status} onChange={this.onChange}>
                      <option value={true}>Kích hoạt</option>
                      <option value={false}>Ẩn</option>
                    </select><br/>             
                </div>
                <div className="modal-footer">
                  <button className="btn btn-warning" type="submit">Lưu lại</button>
                  <button type="button" className="btn btn-default" onClick={this.onClear}>Hủy</button>
                </div>
                </form>
              </div>

            
      
    );
    
   
  }
}


const mapStatetoProps = (state) => {
  return {
    display: state.display,
    editTask: state.editTask
  };
};

const mapDispatchtoProps = (dispatch, props) => {
  return {
    onSaveTask: (task) => {
      dispatch(actions.saveTask(task));
    },
    onSubmitForm: () => {
      dispatch(actions.submitForm());
    },
    onCloseForm: () => {
      dispatch(actions.closeForm());
    }
  };
};

export default connect(mapStatetoProps, mapDispatchtoProps)(TaskForm);

