import React from "react"
import ReactDom from "react-dom"
import {createStore, applyMiddleware, compose} from "redux"
import thunk from "redux-thunk"
import {Provider} from "react-redux"
import {BrowserRouter, Link, Route,Redirect,Switch} from "react-router-dom"
import App from "./App";
import {counter} from "./index.redux"

const reduxDevtools = window.devToolsExtension;
const store = createStore(
    counter,
    compose(applyMiddleware(thunk), reduxDevtools() || {})
);

function Erying() {
    return <h2>二营</h2>
}

function Sanying() {
    return <h2>三营</h2>
}
class Test extends React.Component{
    render(){
        return <h2>测试组件{this.props.match.params.location}</h2>
    }
}

ReactDom.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <ul>
                    <li><Link to="/">一营</Link></li>
                    <li><Link to="/erying">二营</Link></li>
                    <li><Link to="/sanying">三营</Link></li>
                </ul>
                <Switch>
                    {/*只渲染第一个命中的Route*/}
                    <Route path="/" exact component={App}></Route>
                    <Route path="/erying" component={Erying}></Route>
                    <Route path="/sanying" component={Sanying}></Route>
                    <Route path="/:location" exact component={Test}></Route>
                </Switch>

            </div>
        </BrowserRouter>
    </Provider>
    , document.getElementById("root")
);
