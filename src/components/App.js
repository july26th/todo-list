import React, { Component } from "react";
import Header from "./Header";
import '../App.css';
import { Route, Router } from 'react-router-dom';
import Login from './Auth/Login';
import Home from './Home';
import Register from './Auth/Register';
import TodoList from './TodoList/TodoList';
import { Switch } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
import { history } from '../history';
import * as actions from '../actions';
import { connect } from 'react-redux';
class App extends Component {
  constructor(props) {
    super(props);

    history.listen((location, action) => {
      // clear alert on location change
      this.props.clearAlerts();
    });
  }
  render() {
    const { alert } = this.props;
    return (
      <Router history = {history}>    
      <div>
        <Header />
        {alert.message &&
          <div className={`alert ${alert.type}`}>{alert.message}</div>
        }
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <PrivateRoute exact path="/todolist" component={TodoList} />
        </Switch>    
      </div>
      </Router> 

    );


  }
}
function mapState(state) {
  const { alert } = state;
  return { alert };
}

const actionCreators = {
  clearAlerts: actions.alertActions.clear
};

export default connect(mapState, actionCreators)(App);


