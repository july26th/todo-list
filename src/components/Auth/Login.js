import React, { Component } from "react";
import { Link } from 'react-router-dom';
import * as actions from '../../actions';
import { connect } from 'react-redux';
class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            submitted: false
        };
    }

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit = e => {
        e.preventDefault();

        this.setState({ submitted: true });
        const { username, password } = this.state;
        if (username && password) {
            this.props.login(username, password);
        }
    }

    render() {
        const { username, password, submitted } = this.state;
        return (
            <div className="container">
                <div className="row pt-4">
                    <div className="col-md-3">

                    </div>
                    <div className="col-md-6 col-md-offset-3">
                        <div className="box-form">
                            <h2 className="text-center pt-3">LOGIN</h2>
                            <form name="form" onSubmit={this.handleSubmit}>
                                <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
                                    <label >Username</label>
                                    <input type="text" className="form-control" name="username"

                                        value={username} onChange={this.handleChange} />
                                    {submitted && !username &&
                                        <div className="help-block">Username is required</div>
                                    }
                                </div>
                                <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                                    <label>Password</label>
                                    <input type="password" className="form-control" name="password"
                                        value={password} onChange={this.handleChange} />
                                    {submitted && !password &&
                                        <div className="help-block">Password is required</div>
                                    }
                                </div>
                                <div className="form-group text-center btn-form mt-4">
                                    <button className="btn">Login</button>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}






const actionCreators = {
    login: actions.userActions.login
};

export default connect(null, actionCreators)(Login);

