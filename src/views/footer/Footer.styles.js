import styled from 'styled-components';

export const FooterWrapper = styled.div`
  min-width: 100%;
  height: ${({ theme }) => theme.footerHeight};
  background-color: rgb(45, 45, 45);
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Sanchez';
`;
