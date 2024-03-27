import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <Link to="/"><button>Главная</button></Link> 
      <Link to="/create-post"><button>Создать запись</button></Link>
    </nav>
  );
};

export default Navigation;