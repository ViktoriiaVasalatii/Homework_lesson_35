import { configureStore, createSlice } from "@reduxjs/toolkit";

const feedSlice = createSlice({
  name: "feed",
  initialState: {
    posts: [
      {
        id: 1,
        avatar: "https://via.placeholder.com/50",
        name: "John Doe",
        username: "@johndoe",
        date: "2023-05-08",
        content: "Lorem ipsum dolor sit amet",
      },
      {
        id: 2,
        avatar: "https://via.placeholder.com/50",
        name: "Jane Doe",
        username: "@janedoe",
        date: "2023-05-07",
        content: "Consectetur adipiscing elit",
      },
    ],
  },
  reducers: {
    addPost: (state, action) => {
      state.posts.push(action.payload);
    },
    editPost: (state, action) => {
      const { id, content } = action.payload;
      const post = state.posts.find((p) => p.id === id);
      if (post) {
        post.content = content;
      }
    },
    deletePost: (state, action) => {
      const index = state.posts.findIndex((p) => p.id === action.payload);
      if (index !== -1) {
        state.posts.splice(index, 1);
      }
    },
  },
});

const store = configureStore({
  reducer: {
    feed: feedSlice.reducer,
  },
});

export const { addPost, editPost, deletePost } = feedSlice.actions;
export default store;
