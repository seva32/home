import React from 'react';
import Container from '../../components/Container';
import FakeNavbar from '../../components/FakeNavbar';
import Flex from '../../components/Flex';
import * as Styles from './Projects.styles';
import Heading from '../../components/Heading';
import chatImg from '../../assets/images/chat.png';
import springImg from '../../assets/images/spring.png';

const SecondView = () => {
  return (
    <Container
      full
      fullVertical
      heightVh
      widthVw
      style={{ position: 'relative' }}
      id="projects"
    >
      <FakeNavbar />
      <Styles.ProjectsGreenBackground />
      <Styles.ProjectsGreenBackground
        style={{ left: 'unset', top: 'unset', right: '0', bottom: '0' }}
      />
      <Styles.ProjectsTitle>Projects</Styles.ProjectsTitle>
      <Styles.ProjectsWrapper>
        <Styles.CardContainer>
          <Styles.CardLink
            href="https://seva32-chat-app.herokuapp.com/"
            target="_blank"
          >
            <Styles.CardImage backImg={chatImg} />
            <Flex column style={{ marginTop: '6rem' }}>
              <Heading h4 style={{ alignSelf: 'center' }}>
                SF Chat Room
              </Heading>
              <Styles.Para style={{ fontWeight: 'bold' }}>
                (JavaScript, HTML, CSS, NodeJs)
              </Styles.Para>
              <Styles.Para>
                This is an application for users to interact in chat rooms.
                Users can send their current location.
              </Styles.Para>
            </Flex>
          </Styles.CardLink>
        </Styles.CardContainer>
        <Styles.CardContainer>
          <Styles.CardLink
            href="http://3.210.87.8:8080/restful/swagger-ui.html"
            target="_blank"
          >
            <Styles.CardImage backImg={springImg} />
            <Flex column style={{ marginTop: '6rem' }}>
              <Heading h4 style={{ alignSelf: 'center' }}>
                REST Service
              </Heading>
              <Styles.Para style={{ fontWeight: 'bold' }}>
                (Java, Spring, MySQL)
              </Styles.Para>
              <Styles.Para>
                Web Service with Spring Security, implements user registration,
                with token-based auth, MySQL database, and Swagger.
              </Styles.Para>
            </Flex>
          </Styles.CardLink>
        </Styles.CardContainer>
      </Styles.ProjectsWrapper>
    </Container>
  );
};

export default SecondView;
