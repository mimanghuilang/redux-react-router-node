import React from "react"
import Logo from "../../component/logo/logo"
import {List, InputItem, Radio, WingBlank, WhiteSpace, Button} from "antd-mobile"
import {connect} from "react-redux";
import {register} from "../../reduex/user.redux";
const {RadioItem} = Radio;

@connect(
    state=>state.user,
    {register}
)
class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type: "genuis",
            user: "",
            pwd: "",
            repeatpwd: "",
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleRegister = this.handleRegister.bind(this);
    }

    handleChange(key, val) {
        this.setState({
            [key]: val
        })
    }

    handleRegister() {
        console.log(this.state);
        this.props.register(this.state);
    }

    render() {
        const {type} = this.state;
        return (
            <div>
                <Logo/>
                <h2>我是注册页面</h2>
                {this.props.msg?<p className="error-msg">{this.props.msg}</p>:null}
                <List>
                    <InputItem onChange={v => this.handleChange("user", v)}>用户名</InputItem>
                    <WhiteSpace/>
                    <InputItem type="password" onChange={v => this.handleChange("pwd", v)}>密码</InputItem>
                    <WhiteSpace/>
                    <InputItem type="password" onChange={v => this.handleChange("repeatpwd", v)}>确认密码</InputItem>
                    <RadioItem
                        checked={type === "genuis"}
                        onChange={v => this.handleChange("type", "genius")}
                    >牛人</RadioItem>
                    <RadioItem
                        checked={type === "boss"}
                        onChange={v => this.handleChange("type", "boss")}
                    >boss</RadioItem>

                    <WhiteSpace/>
                    <Button onClick={()=>this.handleRegister()} type="primary">注册</Button>

                </List>
            </div>
        )
    }
}

export default Register;