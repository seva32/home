import React from 'react';
import FakeNavbar from '../../components/FakeNavbar';
import Flex from '../../components/Flex';
import Container from '../../components/Container';
import Heading from '../../components/Heading';
import * as Styles from './Skills.styles';
import Logo from '../../assets/images/Logo';

const SecondView = () => {
  return (
    <Container
      full
      fullVertical
      heightVh
      widthVw
      style={{ position: 'relative' }}
      id="skills"
    >
      <FakeNavbar />
      <Styles.ProjectsGreenBackground />
      <Styles.ProjectsGreenBackground
        style={{ left: 'unset', top: 'unset', right: '0', bottom: '0' }}
      />
      <Styles.SkillsTitle>Skills</Styles.SkillsTitle>
      <Styles.CardWrapper>
        <Styles.SkillCard>
          <Heading h4 center style={{ background: 'white' }}>
            Backend
          </Heading>
          <Flex
            justifyEvenly
            alignCenter
            heightPerc
            style={{ padding: '0 0.5rem' }}
          >
            <Logo name="NodeLogo" />
            <Logo name="ExpressLogo" />
            <Logo name="MysqlLogo" />
            <Logo name="MongoLogo" />
            <Logo name="JavaLogo" />
            <Logo name="SpringLogo" />
            <Logo name="HibernateLogo" />
          </Flex>
        </Styles.SkillCard>
        <Styles.SkillCard>
          <Heading h4 center style={{ background: 'white' }}>
            Frontend
          </Heading>
          <Flex
            justifyEvenly
            alignCenter
            heightPerc
            style={{ padding: '0 0.5rem' }}
          >
            <Logo name="HtmlLogo" />
            <Logo name="CssLogo" />
            <Logo name="JsLogo" />
            <Logo name="ReactLogo" />
            <Logo name="JqueryLogo" />
            <Logo name="ReduxLogo" />
            <Logo name="BootstrapLogo" />
            <Logo name="PhotoshopLogo" />
          </Flex>
        </Styles.SkillCard>
        <Styles.SkillCard full fullVertical>
          <Heading h4 center style={{ background: 'white' }}>
            Production
          </Heading>
          <Flex
            justifyEvenly
            alignCenter
            heightPerc
            style={{ padding: '0 0.5rem' }}
          >
            <Logo name="GitLogo" />
            <Logo name="GitlabLogo" />
            <Logo name="EclipseLogo" />
            <Logo name="VscLogo" />
            <Logo name="MavenLogo" />
            <Logo name="NginxLogo" />
            <Logo name="DockerLogo" />
          </Flex>
        </Styles.SkillCard>
      </Styles.CardWrapper>
    </Container>
  );
};

export default SecondView;
