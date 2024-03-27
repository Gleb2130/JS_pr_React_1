import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  posts: [],
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost: (state, action) => {
        state.posts.push(action.payload);
      },
      deletePost: (state, action) => {
        state.posts = state.posts.filter(post => post.id !== action.payload);
      },
    editPost: (state, action) => {
      const index = state.posts.findIndex(post => post.id === action.payload.id);
      if (index !== -1) {
        state.posts[index] = {
          ...state.posts[index],
          ...action.payload,
          date: Date.now()
        };
      }
    },
  },
});

export const { addPost, editPost } = postsSlice.actions;
export default postsSlice.reducer;