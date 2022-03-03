import React from 'react';
import { StyledInfo } from './Info.styles';

const Info = ({ userData }) => (
  <StyledInfo>
    <p>{userData.name}</p>
    <p>attendance: {userData.attendance}</p>
  </StyledInfo>
);

export default Info;
