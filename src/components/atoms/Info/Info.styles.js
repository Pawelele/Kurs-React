import styled from 'styled-components';

export const StyledInfo = styled.div`
  margin-left: 24px;
  margin-bottom: 26px;
  margin-top: 33px;
  color: ${({ theme }) => theme.colors.darkGrey};

  p {
    margin-bottom: 1px;
    margin-top: 1px;
  }
  p:first-child {
    font-size: ${({ theme }) => theme.fontSize.l};
    font-weight: 700;
  }
  p:last-child {
    font-size: ${({ theme }) => theme.fontSize.s};
    font-weight: 400;
  }
`;
