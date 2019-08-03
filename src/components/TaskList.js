import React, { Component} from "react";
import TaskItem from "./TaskItem";
class TaskList extends Component{
  constructor() {
    super();

  }
  
  
  render(){
    return(
        <div className="row">
              <div className="col-md-12">
               <table class="table table-borderd table-hover">
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
                    <input type="text" classNama="form-control" name="filterName"
                    />
                  </td>
                  <td>
                    <select className="form-control" name="filterstatus">
                      <option value={0}>Tất cả</option>
                      <option value={1}>Ẩn</option>
                      <option value={2}>Kích hoạt</option>
                    </select>
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Học angular</td>
                  <td>
                    <span className="badge badge-danger">Kích hoạt</span>
                  </td>
                  <td>
                    <button className="btn btn-warning" type="submit">Sửa</button>
                    <button className="btn btn-danger" type="submit">Xóa</button>
                  </td>
                </tr>
                <TaskItem />
                <TaskItem />
                <TaskItem />
              </tbody>
            </table>
                </div>
        </div>
            
    );
    
   
  }
}

export default TaskList;

