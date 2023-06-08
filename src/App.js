import React from "react";
import Counter from "./Counter";
import { Provider } from "react-redux";
import store from "./store";
import { Box } from "@mui/system";

function App() {
  return (
    <Provider store={store}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <Counter />
      </Box>
    </Provider>
  );
}

export default App;
