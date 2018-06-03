// 新建store
import {createStore} from "redux";

function counter(state = 0, action) {
    switch (action.type) {
        case "add":
            return state += 1;
        case "reduce":
            return state -= 1;
        default:
            return 10;
    }
}

const store = createStore(counter);
const init = store.getState();
console.log(init);

function listener() {
    const current = store.getState();
    console.log(`现在有机枪${current}把`)
}

store.subscribe(listener);
store.dispatch({
    type: "add",
});
console.log(store.getState());
store.dispatch({
    type: "reduce",
});
console.log(store.getState());
