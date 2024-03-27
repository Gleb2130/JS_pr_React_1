import { createStore, combineReducers } from 'redux';
import { blogReducer } from './reducers/blogReducer';

const rootReducer = combineReducers({
  blog: blogReducer,
  // можна додати інші редюсери тут
});

export const store = createStore(rootReducer);