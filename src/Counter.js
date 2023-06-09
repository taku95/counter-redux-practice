import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./counterSlice";
import Button from "@mui/material/Button";

const Counter = () => {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <Button
        variant="contained"
        onClick={() => dispatch(increment())}
        sx={{ margin: "0 8px" }}
      >
        +
      </Button>
      <span>{count}</span>
      <Button
        variant="contained"
        onClick={() => dispatch(decrement())}
        sx={{ margin: "0 8px" }}
      >
        -
      </Button>
    </div>
  );
};

export default Counter;
