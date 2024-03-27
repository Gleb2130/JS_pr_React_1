import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import CreatePost from './components/CreatePost';
import EditPost from './components/EditPost';
import PostDetails from './components/PostDetails';
import './styleD.css'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/create-post",
    element: <CreatePost />,
  },
  {
    path: "/edit-post/:postId",
    element: <EditPost />,
  },
  {
    path: "/post/:postId",
    element: <PostDetails />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);