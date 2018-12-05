import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

import Login from './Login';
class Loginscreen extends Component {
    state = {
        username: '',
        password: '',
        loginscreen: [],
        isLogin: true
    }
    componentWillMount() {
        const loginscreen = [];
        loginscreen.push(<Login parentContext={this} appContext={this.props.parentContext} />);
        this.setState({
            loginscreen: loginscreen,
        })
    }
    render() {
        return (
            <div className="loginscreen">
                {this.state.loginscreen}
                {/* <div>
                    {this.state.loginmessage}
                </div> */}
            </div>
        )
    }
}
const style = {
    margin: 15,
};
export default Loginscreen;