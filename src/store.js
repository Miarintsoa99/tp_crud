import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./Features/UserReducer";

// Configurez le store Redux avec les reducers appropriés
const store = configureStore({
  reducer: {
    users: UserReducer,
  },
});

export default store;
