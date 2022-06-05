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
import questionReducer from "../reducers/questionReducer"

const userPersistConfig = {
  key: "user",
  version: 1,
  storage,
};

const questionPersistConfig = {
  key: "question",
  version: 1,
  storage,
};

const userPersistedReducer = persistReducer(userPersistConfig, userReducer);
const questionPersistedReducer = persistReducer(questionPersistConfig, questionReducer);

const store = configureStore({ 
  reducer: { 
    user: userPersistedReducer,
    question: questionPersistedReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
}, composeWithDevTools);

export const persistor = persistStore(store)

export default store;
