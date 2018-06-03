import React from "react"
class App extends React.Component {
    // constructor(props){
    //     super(props);
    // }
    render() {
        const {addGUN,removeGUN,store,addGunAsync}=this.props;
        const num = store.getState();
        return (
            <div>
                <h1>现在有机枪{num}把</h1>
                <button onClick={()=>store.dispatch(addGUN())}>申请武器</button>
                <button onClick={()=>store.dispatch(removeGUN())}>上交武器</button>
                <button onClick={()=>store.dispatch(addGunAsync())}>拖两天再给</button>
            </div>
        )
    }
}
export default  App;