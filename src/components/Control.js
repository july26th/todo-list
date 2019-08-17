import React, { Component} from "react";
import Search from "./Search";
import Sort from "./Sort";
class Control extends Component{
  constructor() {
    super();

  }
  
  
  render(){
    return(
        <div className="row w-100">
        <Search  />  
        <Sort />
        </div>
            
    );
    
   
  }
}

export default Control;

