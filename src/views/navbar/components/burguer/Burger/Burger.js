import React from 'react';
import { bool, func } from 'prop-types';
import { StyledBurger } from './Burger.styled';

const Burger = ({ open, setOpen, visible, ...props }) => {
  const isExpanded = open ? true : false;

  const setOpenAndFixedBody = (o) => {
    setOpen(!o);
    // if (!o) {
    //   const currentPosition = window.scrollY;
    //   document.body.style.position = 'fixed';
    //   document.body.style.top = `-${currentPosition}px`;
    //   document.querySelector('#background').style.top = '0px';
    // } else {
    //   const scrollY = document.body.style.top;
    //   document.body.style.position = '';
    //   document.body.style.top = '';
    //   window.scrollTo(0, parseInt(scrollY || '0') * -1);
    // }
  };

  return (
    <StyledBurger
      aria-label="Toggle menu"
      aria-expanded={isExpanded}
      open={open}
      visible={visible}
      onClick={() => setOpenAndFixedBody(open)}
      {...props}
      id="burguer"
    >
      <span />
      <span />
      <span />
    </StyledBurger>
  );
};

Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default Burger;
