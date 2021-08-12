// Creando store
import { createStore } from 'redux';

const initialState = {
    counter1: 0, 
    counter2: 0
}

// Reducer recibe un estado anterior y cambia el store (retorna un valor nuevo basado en su estado anterior, ya que el store es inmutable)
// action es un objeto
const reducer = (prevState = initialState, action) => {
    switch (action.type) {
        case 'COUNTER_ADD':
            return {...prevState, counter1: prevState.counter1 + action.payload}
        case 'COUNTER_SUB':
            return {...prevState, counter1: prevState.counter1 - action.payload}
        default:
            return prevState;
        }
    }
const store = createStore(reducer);

export default store