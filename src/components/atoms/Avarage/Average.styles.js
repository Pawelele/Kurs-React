import styled from 'styled-components';

export const StyledAverage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: ${({ theme }) => theme.fontSize.m};
  background-color: ${({ theme }) => theme.colors.error};
  font-weight: 700;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  margin-bottom: 24px;
  margin-top: 33px;
`;
