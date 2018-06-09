import React from "react"
import {connect} from "react-redux"
import {login} from "./Auth.redux";
import {Redirect} from "react-router-dom"
// 有两个reducer,每个reducers都有一个state
// 合并reducer
@connect(
    state => state.auth,
    {login}
)
class Auth extends React.Component {
    constructor(props) {
        super(props)
        console.log(props);
        console.log("权限")
    }


    render() {
        return (
            <div>
                {this.props.isAuth?<Redirect to="/dashboard" />:null}
                <h2>你没有权限，需要登录才能看</h2>
                <button onClick={this.props.login}>登录</button>
            </div>
        )
    }
}

export default Auth;