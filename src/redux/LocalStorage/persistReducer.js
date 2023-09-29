import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // localStorage

import languageReducer from "./languageSlice";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, languageReducer);

export const store = configureStore({
  reducer: {
    language: persistedReducer,
  },
});

export const persistor = persistStore(store);
