let inialState = {
  id: "",
  password: "",
};

function loginReducer(state = inialState, action) {
  let { type, payload } = action;
  switch (type) {
    case "LOGIN":
      console.log("payload?", payload);
      return { ...state, id: state.id, password: state.password };

    default:
      return state;
  }
}

export default loginReducer;
