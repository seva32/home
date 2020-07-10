import styled from 'styled-components';

export const StyledLink = styled.a`
  text-align: center;
  padding: 12px;
  /* color: ${({ theme }) => theme.primaryDark}; */
  color: ${({ theme, visible }) =>
    visible ? theme.primaryDark : theme.primaryLight};
  font-size: ${({ theme }) => theme.fontMenuLink};
  cursor: pointer;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 0.1rem;

  &:hover {
    color: ${({ theme }) => theme.socialMediaIconHover};
  }

  &:active {
    color: ${({ theme }) => theme.socialMediaIconHover};
  }
`;

export const StyledWrapper = styled.div`
  @media screen and (max-width: 850px) {
    display: none;
  }
`;
