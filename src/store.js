// import { configureStore } from '@reduxjs/toolkit'
// //import rootReducer from '/reducer';
// export const store = configureStore({
//   reducer:{} ,//rootReducer 
// })

// // Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch
import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import { authReducer } from "./auth.reducer";
import { messageReducer } from "./Redux/Massage/message.reducer";

const rootReducers = combineReducers({
    auth :  authReducer,
    message:messageReducer


});

export const store = legacy_createStore(rootReducers , applyMiddleware(thunk))