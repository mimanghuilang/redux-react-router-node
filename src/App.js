import React from "react"
import {connect} from "react-redux"
import {addGUN, addGunAsync, removeGUN} from "./index.redux";
const  mapStatetoProps= (state)=>{
    return {num:state.counter}
};
const actionCreators={addGUN,removeGUN,addGunAsync};
// App=connect(mapStatetoProps,actionCreators)(App);
// @connect(state=>({num:state}),{addGUN,removeGUN,addGunAsync})
@connect(mapStatetoProps,actionCreators)
class App extends React.Component {
    // constructor(props){
    //     super(props);
    // }
    render() {
        const {addGUN,removeGUN,addGunAsync,num}=this.props;
        return (
            <div>
                <h1>现在有机枪{num}把</h1>
                <button onClick={addGUN}>申请武器</button>
                <button onClick={removeGUN}>上交武器</button>
                <button onClick={addGunAsync}>拖两天再给</button>
            </div>
        )
    }
}
export default  App;