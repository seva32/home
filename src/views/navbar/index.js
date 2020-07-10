import React, { useState, useRef, useContext } from 'react';
import Container from '../../components/Container';
import Flex, { Column } from '../../components/Flex';
import { useOnClickOutside, useOnScroll } from './hooks';
import { Burger, Menu } from './components/burguer';
import { SocialMedia } from './components/socialMedia';
import { TopMenu } from './components/topMenu';
import FocusLock from 'react-focus-lock';
import { Logo } from './components/logo';

import { ThemeContext } from 'styled-components';

export default () => {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true); // visible nav background
  const [position, setPosition] = useState(0); //scrollY position
  const node = useRef();
  const menuId = 'main-menu';

  useOnClickOutside(node, () => setOpen(false));
  useOnScroll(
    position,
    (p) => {
      setPosition(p);
    },
    (v) => {
      setVisible(v);
    }
  );

  const themeContext = useContext(ThemeContext);

  return (
    <Container
      full
      fullVertical
      style={{
        position: 'fixed',
        top: '0',
        backgroundColor: visible
          ? 'transparent'
          : themeContext.navbarBackgroundColor,
        height: themeContext.navbarHeight,
        width: '100vw',
        fontFamily: 'Sanchez',
        transition: 'all 0.3s ease-in-out',
        zIndex: '10',
      }}
    >
      <Flex noWrap alignCenter heightPerc>
        <Column noPadding width="8rem" style={{ minWidth: '8rem' }} mobile>
          <Flex>
            <Container full fullVertical ref={node} width="50%">
              <FocusLock disabled={!open}>
                <Burger open={open} setOpen={setOpen} visible={visible} />
                <Menu open={open} setOpen={setOpen} id={menuId} />
              </FocusLock>
            </Container>
            <Container full fullVertical width="50%">
              <a href="#landing">
                <Logo visible={visible} />
              </a>
            </Container>
          </Flex>
        </Column>
        <Column noPadding width="50%">
          <SocialMedia />
        </Column>
        <Column noPadding>
          <TopMenu visible={visible} />
        </Column>
      </Flex>
    </Container>
  );
};
