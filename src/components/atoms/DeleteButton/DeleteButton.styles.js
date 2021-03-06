import styled from 'styled-components';

export const StyledDeleteButton = styled.button`
  width: 25px;
  height: 25px;
  background-color: ${({ theme }) => theme.colors.gray};
  border-radius: 50px;
  border: none;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 14px;
  cursor: pointer;

  svg {
    width: 100%;
    height: 100%;
  }
`;
