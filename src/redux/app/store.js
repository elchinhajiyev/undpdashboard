import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // localStorage için
import languageSlice from "../features/language/languageSlice";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, languageSlice);

export const store = configureStore({
  reducer: {
    language: persistedReducer,
  },
});

export const persistor = persistStore(store);
