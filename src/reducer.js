const initialState = {
    value: 0,
    color: "black"
}

const reducer = (state = initialState, action) => {
    let { type } = action;
    if (type === "CHANGE_COUNTER") {
        return {
            ...state,
            value: state.value + action.value
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
