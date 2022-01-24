import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import CounterBox from "./component/CounterBox";
import "./App.css";

function App() {
  let counter = useSelector((state) => state.counter.counter);
  let id = useSelector((state) => state.login.id);

  let dispatch = useDispatch();
  const increase = () => {
    dispatch({ type: "INCREASE", payload: { value: 5, name: "bitna" } });
  };

  const login = () => {
    dispatch({ type: "LOGIN", payload: { id: "aaa", password: "ddd" } });
  };

  return (
    <div className="App">
      {counter}
      <CounterBox />
      <button onClick={increase}>Increase!</button>
      <button onClick={login}>Login</button>
    </div>
  );
}

export default App;
