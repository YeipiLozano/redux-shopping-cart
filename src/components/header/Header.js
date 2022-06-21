import React from 'react';
import {Bar, Links, FlexContainer} from './Header.styles.js';
import {useSelector} from 'react-redux';

const Header = () => {
  const isLoggedIn = useSelector((state) => state.user.user.isLoggedIn);
  return (
    <Bar className='topnav' id='myTopnav'>
      <Links to='/'>Wizestore</Links>
      <FlexContainer>
        <Links to='/products'>Products</Links>
        <Links to='/cart'>Cart</Links>
        {isLoggedIn ? (
          <Links to='/login'>Logout</Links>
        ) : (
          <Links to='/login'>Login</Links>
        )}
      </FlexContainer>
    </Bar>
  );
};
export default Header;
