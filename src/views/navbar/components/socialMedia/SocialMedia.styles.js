import styled from 'styled-components';
import { LinkedinSquare as Lin } from '@styled-icons/boxicons-logos/LinkedinSquare';
import { Github } from '@styled-icons/boxicons-logos/Github';

export const StyledLink = styled.a`
  text-align: center;
  padding: 12px;
  cursor: pointer;

  /* &:hover {
    background-color: ${({ theme }) => theme.socialMediaIconHover};
  }

  &:active {
    background-color: ${({ theme }) => theme.socialMediaIconHover};
  } */

  /* @media screen and (max-width: 500px) {
    float: none;
    display: block;
  } */
`;

export const GithubIcon = styled(Github)`
  color: ${({ theme }) => theme.socialMediaIconColor};
  &:hover {
    color: ${({ theme }) => theme.socialMediaIconHover};
  }

  &:active {
    color: ${({ theme }) => theme.socialMediaIconHover};
  }
`;

export const LinkedInIcon = styled(Lin)`
  color: ${({ theme }) => theme.socialMediaIconColor};
  &:hover {
    color: ${({ theme }) => theme.socialMediaIconHover};
  }

  &:active {
    color: ${({ theme }) => theme.socialMediaIconHover};
  }
`;

export const StyledWrapper = styled.div`
  @media screen and (max-width: ${({ theme }) => theme.mobile}) {
    width: 50vw;
    align-self: flex-end;
  }
`;
