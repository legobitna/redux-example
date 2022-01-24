import React from "react";
import { useSelector } from "react-redux";

const CouterBox = () => {
  let counter = useSelector((state) => state.counter.counter);
  return <div>counter form box : {counter}</div>;
};

export default CouterBox;
