import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const StyledLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 130px;
  height: 60px;
  margin-bottom: 25px;
  text-align: right;
  color: ${({ theme }) => theme.colors.white};
  padding-right: 15px;
  padding-left: 14px;
  font-size: 15px;
  font-weight: 700;
  background-color: ${({ theme }) => theme.colors.grey};
`;

export const StyledMenu = styled.nav`
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 130px;
  height: 100%;
  border-right: 1px solid ${({ theme }) => theme.colors.darkPurple};
`;

export const StyledLink = styled(Link)`
  font-weight: bold;
  font-size: 15px;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.darkGrey};
  text-align: right;
  margin: 15px 15px 15px auto;
`;
