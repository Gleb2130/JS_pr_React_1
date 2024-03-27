import React from 'react';
import { useSelector } from 'react-redux';
import Navigation from '../app/Navigation';
import { Link } from 'react-router-dom';

const Home = () => {
  const posts = useSelector((state) => state.posts.posts);

  return (
    <div>
      <Navigation />
      <h1>Блоги</h1>
      <div>
        {posts.map(post => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <Link to={`/post/${post.id}`}><button>Детали</button></Link><br></br>
            <Link to={`/edit-post/${post.id}`}><button>Редактировать запись</button></Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;