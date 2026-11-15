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
import storage from "redux-persist/lib/storage";
import state from "./state";
import { PREVIEW } from "../api";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

// The preview stores nothing in the visitor's browser (no localStorage); the full app keeps the login across reloads.
const persistedReducer = PREVIEW ? state : persistReducer(persistConfig, state);
if (PREVIEW) {
  try { window.localStorage.removeItem("persist:root"); } catch {}
}

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = PREVIEW ? null : persistStore(store);


