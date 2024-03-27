import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../features/posts/postsSlice';
import Navigation from '../app/Navigation';
import { nanoid } from 'nanoid';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(addPost({ id:nanoid(),date: Date.now(), title:title, content:content }));
    setTitle('');
    setContent('');
  };

  return (
    <div>
      <Navigation />

      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Заголовок" /> <br/>
      <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Зміст"></textarea> <br/>
      <button onClick={handleSubmit}>Створити запис</button> 
    </div>
  );
};

export default CreatePost;