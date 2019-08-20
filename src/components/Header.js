import React, { Component } from "react";
import { Link } from 'react-router-dom';
import * as actions from '../actions';
import { connect } from 'react-redux';
class Header extends Component {
    showHeader = () => {
        if (this.props.user !== undefined) {
            return [
              
                <li className="nav-item" key="1" onClick={() => this.onLogOut()}>
                    <Link className="nav-link" to="/">Logout</Link>
                </li>,
                  <li className="nav-item" key="2" >
                  <Link className="nav-link" to="/">Welcome, {this.props.user.lastName}</Link>
              </li>
            ]
        }
        else {
            return [<li className="nav-item" key='1'>
                <Link className="nav-link" to="/login">Login</Link>
            </li>,
            <li className="nav-item" key='2'>
                <Link className="nav-link" to="/register">Register</Link>
            </li>
            ]
        }

    }
    onLogOut() {
        this.props.logout();
    }
    render() {
        return (
            <div className="nav-header">
                <nav className="container navbar navbar-expand-sm bg-light">
                    {/* <a className="navbar-brand" href="#"></a> */}
                    <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavId">

                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/todolist">Todo List</Link>
                            </li>
                            {this.showHeader()}

                          
                        </ul>

                    </div>
                </nav>
            </div>
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



