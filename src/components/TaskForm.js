import React, { Component} from "react";

class TaskForm extends Component{
  constructor() {
    super();

  }
  
  
  render(){
    return(
         <div className="card">
            <div className="card-header bg-success">Thêm công việc</div>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label>Tên: </label>
                  <input type="text" className="form-control" name="name"/>
                </div>
                  <label>Trạng thái: </label>
                  <select className="form-control" name="status">
                    <option value={true}>Kích hoạt</option>
                    <option value={false}>Ẩn</option>
                  </select><br/>
                  <div className="text-center">
                    <button className="btn btn-warning" type="submit">Lưu lại</button>
                    <button className="btn btn-danger" type="submit">Hủy</button>
                  </div>
                
              </form>
              </div> 
          </div>
       
        
    );
    
   
  }
}

export default TaskForm;

