import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "./storage";
import { composeWithDevTools } from "redux-devtools-extension";
import userReducer from "../reducers/userReducer";

const persistConfig = {
  key: "user",
  version: 1,
  storage,
};

const userPersistedReducer = persistReducer(persistConfig, userReducer);

const store = configureStore({ 
  reducer: { 
    user: userPersistedReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
}, composeWithDevTools);

export const persistor = persistStore(store)

export default store;
