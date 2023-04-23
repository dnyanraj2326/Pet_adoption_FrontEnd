import {configureStore,getDefaultMiddleware} from '@reduxjs/toolkit'
import rootReducer from './rootReducer'
// import {persistReducer} from 'redux-persist/es/persistReducer'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist';


let persistConfig = {
    key:'root',
    storage: AsyncStorage,
}
let persistedReducer = persistReducer(persistConfig,rootReducer)

const store = configureStore({
    reducer:persistedReducer,
    middleware: getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
})


export default store