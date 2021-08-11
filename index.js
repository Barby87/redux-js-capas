// Creando store
import { createStore } from 'redux';

const initialState = 0

// Reducer recibe un estado anterior y cambia el store
// action es un objeto
const reducer = (prevState = initialState, action) => {
    switch (action.type) {
        case 'COUNTER_ADD':
            return prevState + 1;
        default:
            return prevState;
        }
    }

const store = createStore(reducer);

// Despachando action
store.dispatch({type: "COUNTER_ADD"});

console.log(store.getState());
