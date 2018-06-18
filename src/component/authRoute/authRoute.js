import React from "react"
import axios from "axios";
import { withRouter } from "react-router-dom"
@withRouter
class AuthRoute extends React.Component {

    componentDidMount(){
        const  publicList=["/login","/register"];
        const {pathname}=this.props.location;
        if(publicList.indexOf(pathname)>-1){
            return null;
        }
        // 获取用户信息
        axios.get("/user/info").then(res=>{
            if(res.status===200){
                if(res.data.code===0){
                    // 有登录信息
                }
                else{
                    // console.log(this.props.history);
                    this.props.history.replace("/login");
                }
                console.log(res.data);
            }
        })
        // 是否登陆
        // 现在的url地址
        // 用户的身份，是boss还是牛人
        // 用户是否完善信息（选择头像，个人简介）
    }
    render(){
        return null;
    }
}

export default AuthRoute;