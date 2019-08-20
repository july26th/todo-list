import React, { Component } from "react";
import { Link } from 'react-router-dom';
import * as actions from '../actions';
import { connect } from 'react-redux';
class Header extends Component {
    showHeader = () => {
        if(this.props.user !== undefined){ return (
            <li className="nav-item" onClick={() => this.hello()}>
                <Link className="nav-link" to="/">Logout</Link>
            </li>   )  }
            else {
            return [<li className="nav-item active" key='1'>
                <Link className="nav-link" to="/login">Login</Link>
            </li>,
            <li className="nav-item" key='2'>
                <Link className="nav-link" to="/register">Register</Link>
            </li>
            ]
        }  

    }
    hello () {
      this.props.logout();
    }
    render() {  
        return (
            <nav className="navbar navbar-expand-sm navbar-light bg-light">
                <a className="navbar-brand" href="#"></a>
                <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">

                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        {this.showHeader()}

                        <li className="nav-item">
                            <Link className="nav-link" to="/todolist">Todo List</Link>
                        </li>
                    </ul>

                </div>
            </nav>

        );


    }
}


const mapStatetoProps = (state) => {
    return {
        user: state.authentication.user
    };
};
const actionCreators = {
    logout: actions.userActions.logout
};


export default connect(mapStatetoProps, actionCreators)(Header);



