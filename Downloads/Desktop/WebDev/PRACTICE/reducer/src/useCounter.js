
import { useReducer } from 'react'

const initialState = {
    count: 0,
};

const reducerFunction = (state, action) => {
    switch (action.type) {
        case "PLUS":
            return { count: state.count + 1 };
        case "MINUS":
            return { count: state.count - 1 };
        case "RESET":
            return { count: 0 };
        default:
            return { count: state.count };
    }
};

function useCounter() {

    const [state, dispatch] = useReducer(reducerFunction, initialState);

    console.log("Bhai main toh chal rha hoon")

    return { dispatch,state}
}


export default useCounter