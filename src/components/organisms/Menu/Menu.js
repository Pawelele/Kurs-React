import React from 'react';
import { StyledMenu, StyledLogo, StyledLink } from './Menu.styles';

const Menu = () => {
  return (
    <StyledMenu>
      <StyledLogo>Study Buddy</StyledLogo>

      <StyledLink to="/">Dashboard</StyledLink>
      <StyledLink to="/add-user">Add user</StyledLink>
    </StyledMenu>
  );
};

export default Menu;
