import React from "react"
import ReactDom from "react-dom"
import {createStore, applyMiddleware, compose} from "redux"
import thunk from "redux-thunk"
import {Provider} from "react-redux"
import {BrowserRouter, Route,Switch} from "react-router-dom"
import reducers from "./reducer"
import Auth from "./Auth"
import  Dashboard from "./Dashboard"

const reduxDevtools = window.devToolsExtension;
const store = createStore(
    reducers,
    compose(applyMiddleware(thunk), reduxDevtools() || {})
);
// 登录
// 没有登录信息，统一跳转到login
// 页面
//  一营
//  二营
//  三营
// router+redux
ReactDom.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                {/*只渲染第一个命中的Route*/}
                <Route path="/login" exact component={Auth}></Route>
                <Route path="/dashboard" component={Dashboard}></Route>
                {/*<Redirect to="/dashboard"></Redirect>*/}
            </Switch>

        </BrowserRouter>
    </Provider>
    , document.getElementById("root")
);
