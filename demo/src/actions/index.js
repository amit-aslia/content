
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';


export const increment = (counterValue) => {
    return {
        type: INCREMENT,
        payload: counterValue + 1
    }
}

export const decrement = (counterValue) => {
    return {
        type: DECREMENT,
        payload: counterValue - 1
    }
}

export const reset = () => {
    return {
        type: RESET,
        payload: 0
    }
}
