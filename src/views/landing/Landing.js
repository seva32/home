import React from 'react';
import Container from '../../components/Container';
import Flex from '../../components/Flex';
import Heading from '../../components/Heading';
import * as Styles from './Landing.styles';

const Landing = () => {
  return (
    <Container full fullVertical heightVh widthVw id="landing">
      <Styles.GreenBackground />
      <Flex justifyCenter alignCenter widthVw heightPerc>
        <Styles.WhiteFrame>
          <Styles.Background></Styles.Background>
          <Styles.Container>
            <Heading noMargin h1 center>
              <Flex widthPerc column justifyCenter alignCenter>
                <Styles.Animation>
                  <Styles.FirstSpan>Hello</Styles.FirstSpan>
                  <Styles.Hide>
                    <Styles.SecondSpan>I'm Sebastian</Styles.SecondSpan>
                  </Styles.Hide>
                </Styles.Animation>
                <Styles.SpanWrapper>
                  <Styles.ThirdSpan>
                    Mission-driven full stack developer
                  </Styles.ThirdSpan>
                  <Styles.ThirdSpan>Tech enthusiast</Styles.ThirdSpan>
                  <Styles.GreenAnimation>
                    Creating digital solutions
                    {/* <Styles.GreenAnimationSpan></Styles.GreenAnimationSpan>
                    <Styles.GreenAnimationSpan></Styles.GreenAnimationSpan>
                    <Styles.GreenAnimationSpan></Styles.GreenAnimationSpan>
                    <Styles.GreenAnimationSpan></Styles.GreenAnimationSpan> */}
                  </Styles.GreenAnimation>
                  <Styles.ThirdSpan
                    noMargin
                    // style={{ transform: 'translateY(-2.3rem)' }}
                    id="third-span"
                  >
                    Creating digital solutions
                  </Styles.ThirdSpan>
                </Styles.SpanWrapper>
              </Flex>
            </Heading>
          </Styles.Container>
        </Styles.WhiteFrame>
      </Flex>
    </Container>
  );
};

export default Landing;
