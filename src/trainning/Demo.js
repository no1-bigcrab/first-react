import { createStore } from 'redux';

var initialState = {
    status: false,
    soft: {
        by: 'name',
        value: 1
    }
}

var myReducer = (state = initialState, action ) => {
    if (action.type === 'TOGGLE_STATUS') {
        state.status = !state.status;
        return state;
    }
    if (action.type === 'SOFT') {
        var { by, value } = action.soft;
        var { status } = state;

        // state.soft = {
        //     by: action.soft.by,
        //     value: action.soft.value
        // }

        return {
            status: status,
            soft : {
                by: by,
                value: value
            }
        };
    }
    return state;
}
const store = createStore(myReducer);
console.log('Default:', store.getState());
// thuwjc hiejen cong viec ve toggle state
var action = { type: 'TOGGLE_STATUS' };
store.dispatch( action );


console.log('TOGGLE', store.getState());
// thuc hien cong viec ten a-z
var softAction ={
    type: 'SOFT',
    soft:{
        by: 'name',
        value: -1
    }
}

store.dispatch(softAction);

console.log('softAction', store.getState())