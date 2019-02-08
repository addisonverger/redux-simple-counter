const { createStore } = Redux;

// Initialize the Redux store by passing it our reducer (defined globally in reducer.js)
const { subscribe, dispatch, getState } = createStore(reducer);

// Re-render the application every time the state changes
// Here we pass the Redux state to our render method (defined globally in render.js)
subscribe(() => render(getState()))

// Dispatch the "INCREMENT" action every time the +1 button is pressed
const incrementButton = document.getElementById('increment');
incrementButton.addEventListener('click', e => dispatch({ type: "CHANGE_COUNTER", value: 1 }));

const decrementButton = document.getElementById('decrement')
decrementButton.addEventListener('click', e => dispatch({ type: "CHANGE_COUNTER", value: -1 }))

const incrementFiveButton = document.getElementById('incrementFive')
incrementFiveButton.addEventListener('click', e => dispatch({ type: "CHANGE_COUNTER", value: 5 }))

const decrementFiveButton = document.getElementById('decrementFive')
decrementFiveButton.addEventListener('click', e => dispatch({ type: "CHANGE_COUNTER", value: -5 }))

const changeColor = document.getElementById('color')
changeColor.addEventListener('change', e => dispatch({ type: "CHANGE_COLOR", color: changeColor.value }))

const setCounterSubmit = document.getElementById('setCounterSubmit')
const setCounter = document.getElementById('setCounter')
setCounterSubmit.addEventListener('click', e => dispatch({ type: "SET_COUNTER", input: setCounter.value }))
