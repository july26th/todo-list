import React, { Component } from "react";
import { connect } from 'react-redux';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import * as actions from './../actions/index'
class TaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      taskName: '',
      priority: 'Medium',
      status: false,
      startDate: new Date()
    }
  }
  handleChange = (date) => {
    this.setState({
      startDate: date
    });
    console.log(date);
  }
  componentWillMount() {
    if (this.props.editTask && this.props.editTask.id !== "") {
      this.setState({
        id: this.props.editTask.id,
        taskName: this.props.editTask.taskName,
        priority: this.props.editTask.priority,
        status: this.props.editTask.status,
        startDate: new Date(JSON.parse(this.props.editTask.startDate))
      })
    }
    else {
      this.onClear();
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.editTask) {
      this.setState({
        id: this.props.editTask.id,
        taskName: this.props.editTask.taskName,
        priority: this.props.editTask.priority,
        status: this.props.editTask.status,
        startDate: this.props.editTask.startDate
      })
    }
    else {
      this.onClear();
    }
  }
  onChange = (event) => {
    var name = event.target.name;
    var value = event.target.value;
    if (name === 'status')
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
      priority: 'Medium',
      status: false,
      startDate: new Date() 
    });
  }
  onCloseForm = () => {
    this.onClear();
    this.props.onCloseForm();
  };
  render() {
    var { display } = this.props;
    console.log(typeof this.state.startDate);
    return (

      <div className="modal-content">
        <div className="modal-header header-taskform ">
          <h4 className="modal-title">
            {this.props.editTask.id ? 'Sửa công việc' : 'Thêm công việc'}</h4>
          <button type="button" onClick={this.onCloseForm} className="close" >&times;</button>
        </div>
        <form onSubmit={this.onSubmit}>

          <div className="modal-body">
            <div className="form-group">
              <label>Task Name: </label>
              <input required type="text" className="form-control"
                name="taskName" value={this.state.taskName} onChange={this.onChange} />
            </div>

            <label>Priority: </label>

            <select className="form-control" name="priority"
              value={this.state.priority} onChange={this.onChange}>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select><br />
            <label>Status: </label>
            <select className="form-control" name="status"
              value={this.state.status} onChange={this.onChange}>
              <option value={true}>Compelte</option>
              <option value={false}>Incomplete</option>
            </select><br />
            <label>Datetime: </label>
            <div className="form-group">
              <DatePicker
                selected={this.state.startDate}
                onChange={this.handleChange}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                dateFormat="MMMM d, yyyy h:mm aa"
                timeCaption="time"
                className="form-control"
              />
            </div>
          </div>
          <div className="modal-footer">
            <button className="btn btn-warning" type="submit">Save</button>
            <button type="button" className="btn btn-default" onClick={this.onClear}>Clear</button>
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

