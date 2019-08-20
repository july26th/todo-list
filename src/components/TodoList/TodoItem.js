import React, { Component} from "react";
import classNames from 'classnames';
import check from '../img/check.svg';
import checked from '../img/checked.svg';

class TodoItem extends Component {
    constructor() {
        super();
        
      
    }  
    render() {
        const { item, onClick } = this.props;
        let url = check;
        if(item.isComplete) {
            url = checked;
        }
        return (
            <div  className ={classNames('TodoItem', {'Todo-complete': item.isComplete})}>
                <img onClick = {onClick} src = {url} width={30} />
                <p>{this.props.item.title}</p>
            </div>
        );
    }
}

export default TodoItem;