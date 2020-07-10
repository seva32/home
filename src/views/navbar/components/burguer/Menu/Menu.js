import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';

const Menu = ({ open, setOpen, ...props }) => {
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;

  const setScrollMove = (o) => {
    setOpen(!o);
    // if (!o) {
    //   document.body.style.position = 'fixed';
    //   document.body.style.top = `-${window.scrollY}px`;
    // } else {
    //   const scrollY = document.body.style.top;
    //   document.body.style.position = '';
    //   document.body.style.top = '';
    //   window.scrollTo(0, parseInt(scrollY || '0') * -1);
    // }
  };

  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
      <a
        href="/#projects"
        tabIndex={tabIndex}
        onClick={() => setScrollMove(open)}
      >
        Projects
      </a>
      <a
        href="/#skills"
        tabIndex={tabIndex}
        onClick={() => setScrollMove(open)}
      >
        Skills
      </a>
      <a
        href="/#form-view"
        tabIndex={tabIndex}
        onClick={() => setScrollMove(open)}
      >
        Contact
      </a>
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: bool.isRequired,
};

export default Menu;
