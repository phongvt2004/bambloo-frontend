import { createStore } from "redux";
import reducers from "./reducers"
import { configureStore } from "@reduxjs/toolkit";
// const store = (rootReducer)
const store = configureStore({
    reducer: {
        userInfo: reducers,
    }
  })
export default store;