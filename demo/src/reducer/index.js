
import {
    INCREMENT,
    DECREMENT,
    RESET
} from '../actions/index'

const initialState = {
    count: 0
}

export const sampleReducer = (state = initialState, action) => {
    // console.log(action);
    let newState = state;
    const { type } = action;
    switch(type) {
        case INCREMENT: {
            return {
                ...newState,
                count: action.payload
            }
        }
        case DECREMENT: {
            return {
                ...newState,
                count: action.payload
            }
        }

        case RESET: {
            return {
                ...newState,
                count: action.payload
            }
        }
     
        default: {
            newState = state;
        }
    }
    return newState;
}