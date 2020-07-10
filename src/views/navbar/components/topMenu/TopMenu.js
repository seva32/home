import React from 'react';
import { StyledLink, StyledWrapper } from './TopMenu.styles';
import Flex from '../../../../components/Flex';

export default ({ visible }) => {
  return (
    <StyledWrapper>
      <Flex justifyAround alignCenter heightPerc id="top-menu">
        {/* <StyledLink visible={visible} href="/#education">
          <span>Education</span>
        </StyledLink> */}
        <StyledLink visible={visible} href="/#projects">
          <span>Projects</span>
        </StyledLink>
        <StyledLink visible={visible} href="/#skills">
          <span>Skills</span>
        </StyledLink>
        <StyledLink visible={visible} href="/#form-view">
          <span>Contact</span>
        </StyledLink>
      </Flex>
    </StyledWrapper>
  );
};
