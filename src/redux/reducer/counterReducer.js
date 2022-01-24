const initalState = {
  counter: 0,
  decreaseCounter: 100,
};

function counterReducer(state = initalState, action) {
  let { type, payload } = action;
  switch (type) {
    case "INCREASE":
      console.log("payload?", payload);
      return { ...state, counter: state.counter + payload.value };
    case "DECREASE":
      return { ...state, decreaseCounter: state.decreaseCounter - 1 };
    default:
      return state;
  }
}

export default counterReducer;
