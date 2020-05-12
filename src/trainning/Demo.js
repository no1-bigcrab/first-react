import { createStore } from 'redux';
import { status, soft } from './actions/index';
import  myReducer  from './reducers/index';

const store = createStore(myReducer);
console.log('Default:', store.getState());
// thuwjc hiejen cong viec ve toggle state
store.dispatch(status());

console.log('TOGGLE', store.getState());
// thuc hien cong viec ten a-z


store.dispatch(soft({
    by: 'name',
    value: -1
}));

console.log('softAction', store.getState())