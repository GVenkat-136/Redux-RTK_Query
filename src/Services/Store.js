import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {StateReducer} from "./slices";
import { userServiceApi } from "./ApiService";

const reducers = combineReducers({
    State: StateReducer,
    [userServiceApi.reducerPath]: userServiceApi.reducer,
});

const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(userServiceApi.middleware),
});

export default store;   