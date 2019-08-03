import React, { Component} from "react";

class TaskForm extends Component{
  constructor() {
    super();

  }
  
  
  render(){
    return(
           
            <div class="modal-dialog">

              <div class="modal-content">
                <div class="modal-header header-taskform ">
                  <h4 class="modal-title">Thêm công việc</h4>
                  <button type="button" class="close" data-dismiss="modal">&times;</button>
                </div>
                <div class="modal-body">
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
                  
                    </form>
                </div>
                <div class="modal-footer">
                  <button className="btn btn-warning" type="submit">Lưu lại</button>
                  <button type="button" class="btn btn-default" data-dismiss="modal">Hủy</button>
                </div>
              </div>

            </div>
            
       
          
      
    );
    
   
  }
}

export default TaskForm;

