import React from "react"
import ReactDom from "react-dom"
import {createStore, applyMiddleware, compose} from "redux"
import thunk from "redux-thunk"
import {Provider} from "react-redux"
import {BrowserRouter, Route, Switch} from "react-router-dom"
import Register from "./container/register/register";
import AuthRoute from "./component/authRoute/authRoute"
import Login from "./container/login/login";
import reducers from "./reducer"
import "./config"
import "./index.css"

const reduxDevtools = window.devToolsExtension;
const store = createStore(
    reducers,
    compose(applyMiddleware(thunk), reduxDevtools() || {})
);
function Boss() {
    return <h2>Boss页面</h2>
}

ReactDom.render(
    (<Provider store={store}>
        <BrowserRouter>
            <div>
                <AuthRoute></AuthRoute>
                <Route path="/boss" component={Boss}></Route>
                <Route path="/login" component={Login}></Route>
                <Route path="/register" component={Register}></Route>
            </div>
        </BrowserRouter>
    </Provider>),
    document.getElementById("root")
)
