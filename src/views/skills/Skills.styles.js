import styled from 'styled-components';

export const SkillsTitle = styled.div`
  position: absolute;
  font-size: 2.5rem;
  text-transform: uppercase;
  font-weight: bolder;
  text-align: center;
  top: 10vh;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  @media screen and (max-width: 850px) and (orientation: landscape) {
    display: none;
  }
  @media screen and (max-width: 850px) and (orientation: portrait) {
    font-size: 1.5rem;
    z-index: 1;
    top: 5vh;
  }
`;

export const ProjectsGreenBackground = styled.div`
  position: absolute;
  top: ${({ theme }) => theme.navbarHeight};
  left: 0;
  background: #77dfb4;
  width: 25%;
  height: calc(100vh - (${({ theme }) => theme.navbarHeight}) * 2);
  @media screen and (max-width: 850px) {
    display: none;
  }
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
  background: linear-gradient(#141e30, #243b55);
  width: 70%;
  height: 24rem;
  top: calc((100vh - 28rem) / 2);
  margin: auto;
  position: relative;
  @media screen and (max-width: 850px) {
    flex-direction: column;
    justify-content: center;
    top: 5vh;
    bottom: 5vh;
    height: auto;
    width: 100vw;
  }
`;

export const SkillCard = styled.div`
  width: 12rem;
  min-width: 12rem;
  height: 18rem;
  background-color: #c4e4d7;
  align-self: center;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 850px) {
    width: 90%;
    height: 25vh;
    background-color: #76dfb4;
  }
`;

export const SkillImg = styled.img`
  width: 100%;
  height: 100%;
  background-color: yellow;
`;

export const Para = styled.p`
  padding: 0 0.5rem;
  margin: 0;
  text-align: center;
  font-size: 0.8rem;
  white-space: pre-line;
  word-break: break-word;
  width: 100%;
`;
