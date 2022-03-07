import React from 'react';
import { StyledAverage } from './Average.styles';

const Average = ({ userData }) => (
  <StyledAverage>
    <p>{userData.average}</p>
  </StyledAverage>
);

export default Average;
