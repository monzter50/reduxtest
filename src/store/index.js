import {createStore,compose} from 'redux';
import {person} from '../reducer/person';
const initinialState = {
    person:'Andrea Castro'
};

export const store = createStore(person,initinialState,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
