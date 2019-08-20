import { React } from 'react';
import { Route } from 'react-router-dom';
import App from './components/App';
import RequireAuth from './components/Auth/requireAuth';
import Header from './components/Header';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Logout from './components/Auth/Logout';
import TodoList from './components/TodoList/TodoList';

const Routes = () => {
    return (
        <App>
            <Route exact path="/" component={Header} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/logout" component={Logout} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/todolist" component={RequireAuth(TodoList)} />
        </App>
    );
};

export default Routes;