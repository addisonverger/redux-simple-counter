const initialState = {
    value: 0,
    color: "black"
}

const reducer = (state = initialState, action) => {
    let { type } = action;
    if (type === "INCREMENT") {
        return {
            ...state,
            value: state.value + 1
        }
    } else if (type === "DECREMENT") {
        return {
            ...state,
            value: state.value - 1
        }
    } else if (type === "INCREMENT_FIVE") {
        return {
            ...state,
            value: state.value + 5
        }
    } else if (type === "DECREMENT_FIVE") {
        return {
            ...state,
            value: state.value - 5
        }
    } else if (type === "CHANGE_COLOR") {
        return {
            ...state,
            color: action.color
        }
    } else if (type === "SET_COUNTER") {
        return {
            ...state,
            value: parseInt(action.input)
        }
    }
    return state
}
