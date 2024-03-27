import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'; 
import { editPost } from '../features/posts/postsSlice';
import Navigation from '../app/Navigation';

const EditPost = () => {
  const { postId } = useParams(); 
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const dispatch = useDispatch();

  const handleEdit = () => {
    if (title && content) {
      dispatch(editPost({ id: postId,  title:title, content:content }));
    }
  };

  return (
    <div>
        <Navigation/>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Новый заголовок" /><br/>
      <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Новый контент"></textarea><br/>
      <button onClick={handleEdit}>Сохранить изменения</button>
    </div>
  );
};

export default EditPost;