import { configureStore } from '@reduxjs/toolkit';
import tokenReducer from '../reducers/tokenSlice';
import userReducer from '../reducers/userSlice';

const preloadedState = JSON.parse(localStorage.getItem('state') || "{}") ;

const store = configureStore({
  preloadedState,
  reducer: {
    token: tokenReducer,
    user: userReducer,
  },

});

store.subscribe(()=>localStorage.setItem('state', JSON.stringify(store.getState())))

export {store}

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

