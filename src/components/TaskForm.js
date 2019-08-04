import React, { Component} from "react";

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
    if(this.props.isEditing)
    {
     this.setState({
        id: this.props.isEditing.id,
        taskName: this.props.isEditing.taskName,
        status: this.props.isEditing.status
      })
    }
  }
  componentWillUnmount() {
    return this.props.deleteEdit(true);
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
    this.props.onSubmit(this.state);
    this.onClear();  
  }
  onClear = () => {
    this.setState({
      id: '',
      taskName: '',
      status: false
    });
  }
  onCloseForm = () => {
    this.props.onCloseForm(true);
  };
  render(){
    
    return(
          
              <div className="modal-content">
                <div className="modal-header header-taskform ">
                  <h4 className="modal-title">
                  {this.props.isEditing ? 'Sửa công việc' : 'Thêm công việc'}</h4>
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

export default TaskForm;

