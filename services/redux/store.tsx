

import { configureStore, combineReducers } from "@reduxjs/toolkit"; 
import authSlice from "./features/authSlice"
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'
  import sessionStorage from 'redux-persist/lib/storage/session'



  const persistConfig = {
    key: 'root',
    version: 1,
    storage: sessionStorage,
  }

  const rootReducer = combineReducers({user: authSlice});
  
  const persistedReducer = persistReducer(persistConfig, rootReducer)
  

export const store =  configureStore({
    reducer:persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})


export let persistor = persistStore(store)