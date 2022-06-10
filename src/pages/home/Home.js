import React from 'react';
import {Link} from 'react-router-dom';
import {HomeContainer} from './Home.styles';

const Home = () => {
  return (
    <HomeContainer>
      <h1>Welcome to WizeStore!</h1>
      <p>
        Browse our <Link to='/products'>products</Link>
      </p>
    </HomeContainer>
  );
};

export default Home