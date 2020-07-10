import React from 'react';
import {
  StyledLink,
  GithubIcon,
  LinkedInIcon,
  StyledWrapper,
} from './SocialMedia.styles';
import Flex from '../../../../components/Flex';

export default () => {
  const iconSize = 30;
  return (
    <StyledWrapper>
      <Flex justifyCenter alignCenter heightPerc>
        <StyledLink href="https://github.com/seva32" target="_blank">
          <GithubIcon size={iconSize} title="Github Icon" />
        </StyledLink>
        <StyledLink
          href="https://www.linkedin.com/in/sebastian-fantini-994046156/"
          target="_blank"
        >
          <LinkedInIcon size={iconSize} title="Linkedin Icon" />
        </StyledLink>
      </Flex>
    </StyledWrapper>
  );
};
