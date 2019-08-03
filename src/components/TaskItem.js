import React, { Component} from "react";
class TaskItem extends Component{
  constructor() {
    super();

  }
  
  
  render(){
    return(
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
    );
    
   
  }
}

export default TaskItem;

