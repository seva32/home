import styled from 'styled-components';

export const ProjectsTitle = styled.div`
  position: absolute;
  font-size: 2.5rem;
  text-transform: uppercase;
  font-weight: bolder;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  @media screen and (max-width: 850px) and (orientation: landscape) {
    font-size: 1.5rem;
    z-index: 1;
    transform: translateY(-75px);
  }
  @media screen and (max-width: 850px) and (orientation: portrait) {
    font-size: 1.5rem;
    z-index: 1;
    top: 15vh;
  }
`;

export const ProjectsGreenBackground = styled.div`
  position: absolute;
  top: ${({ theme }) => theme.navbarHeight};
  left: 0;
  background: #77dfb4;
  width: 25%;
  height: calc(100vh - (${({ theme }) => theme.navbarHeight}) * 2);
  @media screen and (max-width: 850px) and (orientation: landscape) {
    display: none;
  }
`;

export const ProjectsWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
  background: linear-gradient(#141e30, #243b55);
  width: 70%;
  height: 24rem;
  top: calc((100vh - 28rem) / 2);
  margin: auto;
  position: relative;
  @media screen and (max-width: 850px) and (orientation: portrait) {
    width: 100vw;
  }
  @media screen and (max-width: 850px) and (orientation: landscape) {
    width: 80%;
    height: 80vh;
    border-left: 30px solid #77dfb4;
    border-right: 30px solid #77dfb4;
  }
`;

export const CardImage = styled.div`
  height: 6rem;
  width: 14rem;
  padding: 1rem 2rem;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
  transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  background-image: url(${(props) => props.backImg});
  background-size: 50% 100%;
  background-position: center;
  background-repeat: no-repeat;
  @media screen and (max-width: 850px) {
    height: 6rem;
    width: 10rem;
    padding: 0.5rem 1rem;
  }
`;

export const CardLink = styled.a`
  cursor: pointer;
  color: black;
`;

export const CardDescription = styled.div`
  background-color: #fafafc;
  height: 12rem;
  width: 14rem;
  position: absolute;
  bottom: 0rem;
  transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  padding: 0.5rem 1rem;
  text-align: center;
  opacity: 1;
  @media screen and (max-width: 850px) {
    width: 10rem;
    height: 10rem;
  }
`;

export const CardContainer = styled.div`
  height: 18rem;
  width: 14rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  overflow: hidden;
  background-color: white;
  top: ${(props) => props.top};
  left: ${(props) => props.left};

  &:hover ${CardImage} {
    height: 18rem;
    background-size: 100% 100%;
  }

  @media screen and (max-width: 850px) {
    width: 10rem;
    &:hover ${CardImage} {
      width: 100%;
      background-size: 100% 100%;
    }
  }
`;

export const Para = styled.p`
  padding: 0 0.5rem;
  margin: 0;
  text-align: center;
  font-size: 0.8rem;
  white-space: pre-line;
  word-break: break-word;
  width: 100%;
  @media screen and (max-width: 850px) {
    font-size: 0.7rem;
  }
`;
