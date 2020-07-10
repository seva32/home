import React from 'react';
import Navbar from '../navbar';
import { Landing } from '../landing';
import { Projects } from '../projects';
import { FormView } from '../formView';
import Container from '../../components/Container';
//import Flex from '../../components/Flex';
import { Background } from '../background';
import { Skills } from '../skills';
import { Footer } from '../footer';

export default () => {
  return (
    <Container fullVertical full style={{ fontFamily: 'Montserrat' }}>
      <Background />
      <Navbar />
      <Landing />
      <Projects />
      <Skills />
      <FormView />
      <Footer />
    </Container>
  );
};
