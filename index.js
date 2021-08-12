import { COUNTER_ADD, COUNTER_SUB } from './store/actions.js';
import store from './store/store.js'

// Suscribirse al store, para estar atento a algún cambio (dispatch) en el store, siempre debe ir antes del dispatch
store.subscribe(() => {
    console.log(store.getState());
})

// Acción automática (creador de acción para el add)
const counterAdd = (payload) => ({
    type: COUNTER_ADD, payload: payload,
})

const counterSub = (payload) => ({
    type: COUNTER_SUB, payload: payload,
})

// Despachando action
// store.dispatch({type: "COUNTER_ADD", payload:10});

store.dispatch(counterAdd(3));
store.dispatch(counterSub(2));


