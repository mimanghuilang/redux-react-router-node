import React, {Component} from 'react';
import {Button} from "antd-mobile"
// import "antd-mobile/dist/antd-mobile.css"
import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <Button type="primary" onClick={()=>{console.log("你妹")}}>你妹</Button>
            </div>
        );
    }
}

export default App;
