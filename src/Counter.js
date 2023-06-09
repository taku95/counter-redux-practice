/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./counterSlice";
import { setUsers } from "./usersSlice";

import Button from "@mui/material/Button";

const Counter = () => {
  const { count } = useSelector((state) => state.counter);
  const { users } = useSelector((state) => state.users);
  console.log(users, count);
  const dispatch = useDispatch();
  console.log(users);
  useEffect(() => {
    const getPosts = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      dispatch(setUsers(data));
    };
    getPosts();
  }, [dispatch]);

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
      {users && users.map((user, index) => <div key={index}>{user.name}</div>)}
    </div>
  );
};

export default Counter;
