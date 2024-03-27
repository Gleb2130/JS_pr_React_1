import React from 'react';
import { useDispatch } from 'react-redux';
import { deletePost, editPost } from '../actions/blogActions';

const BlogPost = ({ post }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deletePost(post.id));
  };

  const handleEdit = (updates) => {
    dispatch(editPost(post.id, updates));
  };

  return (
    <div>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      <button onClick={handleDelete}>Видалити</button>
      <button onClick={() => handleEdit({ title: 'Новий заголовок' })}>Редагувати</button>
    </div>
  );
};

export default BlogPost;