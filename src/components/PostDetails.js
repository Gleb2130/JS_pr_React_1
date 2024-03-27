import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Navigation from '../app/Navigation';

const PostDetails = () => {
  const { postId } = useParams();
  const post = useSelector(state => 
    state.posts.posts.find(post => post.id === postId)
  );

  if (!post) {
    return (
      <div>
        <Navigation />
        <p>Запись не найдена.</p>
      </div>
    );
  }

  return (
    <div>
      <Navigation />
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <p>Дата создания: {new Date(post.date).toLocaleDateString()}</p>
    </div>
  );
};

export default PostDetails;