import styled, { keyframes } from 'styled-components';

export const GreenBackground = styled.div`
  position: absolute;
  top: ${({ theme }) => theme.navbarHeight};
  right: 0;
  background: #77dfb4;
  width: 25%;
  height: calc(100vh - (${({ theme }) => theme.navbarHeight}) * 2);
  @media screen and (max-width: 850px) {
    display: none;
  }
`;

export const WhiteFrame = styled.div`
  position: relative;
  background-color: transparent;
  background-position: center;
  border-left: 4rem solid #77dfb4;
  height: 60%;
  width: 75%;
  color: ${({ theme }) => theme.primaryDark};
  overflow: hidden;
  -webkit-backface-visibility: hidden;
  @media screen and (max-width: 850px) and (orientation: portrait) {
    width: 100%;
    border-left: none;
    border-top: 2rem solid #77dfb4;
    border-bottom: 2rem solid #77dfb4;
  }
  @media screen and (max-width: 850px) and (orientation: landscape) {
    width: 100%;
    border-left: none;
    border-top: 1.5rem solid #77dfb4;
    border-bottom: 1.5rem solid #77dfb4;
    height: 65%;
  }
`;

export const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  height: 100%;
  width: 100%;
  background: linear-gradient(#141e30, #243b55);
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
  -webkit-backface-visibility: hidden;
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: scale(1);
  } 
  50% {
    opacity: 0;
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

export const Animation = styled.div`
  text-align: center;
  text-transform: uppercase;
  font-size: 2.5rem;
  letter-spacing: 1px;
  color: #fff;
  display: inline-block;
  animation: ${fadeIn} 0.5s 1s forwards;
  opacity: 0;
  transition-timing-function: cubic-bezier(0.785, 0.135, 0.15, 0.86);

  -webkit-transform: translate3d(0, 0, 0);
  -webkit-backface-visibility: hidden;

  @media screen and (max-width: 850px) and (orientation: portrait) {
    font-size: 1.6rem;
  }
  @media screen and (max-width: 850px) and (orientation: landscape) {
    font-size: 1.5rem;
  }
`;

const firstSpan = keyframes`
  0% {
    transform: translateX(50%);
    opacity: 1;
  }
  60% {
    transform: translateX(50%);
    opacity: 1;
  }
  100% {
    transform: translateX(0%);
    opacity: 1;
  }
`;

export const FirstSpan = styled.span`
  display: inline-block;
  animation: ${firstSpan} 1s 1.6s forwards
    cubic-bezier(0.785, 0.135, 0.15, 0.86);
  border-radius: 10px 0 0 10px;
  z-index: 1;
  position: relative;
  padding: 0 1rem;
  opacity: 0;
  font-weight: bold;

  -webkit-transform: translate3d(0, 0, 0);
  -webkit-backface-visibility: hidden;
`;

export const Hide = styled.span`
  display: inline-flex;
  overflow: hidden;

  -webkit-transform: translate3d(0, 0, 0);
  /* -webkit-backface-visibility: hidden; */
`;

const secondSpan = keyframes`
  0% {
    transform: translateX(-100%);
    opacity: 1;
  }
  60% {
    transform: translateX(-100%);
    opacity: 1;
  }
  100% {
    transform: translateX(-0%);
    opacity: 1;
  }
`;

export const SecondSpan = styled.span`
  border-radius: 0 10px 10px 0;
  padding: 0 1rem;
  opacity: 0;
  animation: ${secondSpan} 1s 1.6s forwards
    cubic-bezier(0.785, 0.135, 0.15, 0.86);
  font-weight: 100;
  font-size: 2.5rem;
  z-index: -1;
  display: inline-block;

  -webkit-transform: translate3d(0, 0, 0);
  /* -webkit-backface-visibility: hidden; */

  @media screen and (max-width: 850px) {
    font-size: 1.6rem;
  }
`;

export const ThirdSpan = styled.span`
  background: rgba(0, 0, 0, 0.9);
  color: white;
  border-radius: 10px;
  padding: 0 1rem;
  font-weight: 100;
  font-size: 1.5rem;
  text-transform: none;
  height: 2.2rem;
  z-index: 3;
  display: inline-block;
  overflow: hidden;
  margin-bottom: ${(props) => (props.noMargin ? '0' : '1rem')};

  &:nth-child(1) {
    border: 2px solid #03e9f4;
  }
  &:nth-child(2) {
    border: 2px solid #03e9f4;
  }

  @media screen and (max-width: 850px) {
    font-size: 1.1rem;
    height: 1.8rem;
  }
`;

const wrapperUp = keyframes`
  0%{
    transform: translateY(280px);
  }
  100%{
    transform: translateY(0px);
  }
`;

export const SpanWrapper = styled.div`
  margin-top: 3.5rem;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: translateY(280px);
  animation: ${wrapperUp} 1s 3.5s ease-out forwards;
  @media screen and (max-width: 850px) and (orientation: landscape) {
    margin-top: 0.5rem;
  }
`;

const misty = keyframes`
  0%{
    opacity: 1;
    /* background: #03e9f4; */
    box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4,
      0 0 100px #03e9f4;
  }
  15%{
    opacity: 0;
  }
  30%{
    opacity: 1;
  }
  40%{
    opacity: 0;
  }
  47%{
    opacity: 1;
  }
  52%{
    opacity: 0;
  }
  57%{
    opacity: 1;
  }
  61%{
    opacity: 0;
  }
  65%{
    opacity: 1;
  }
  69%{
    opacity: 0;
  }
  70%{
    opacity: 1;
    z-index: 20;
  }
  100%{
    opacity: 1;
    z-index: 1;
  }
`;

// const jedi = keyframes`
//   0%{
//     transform: scaleX(1.05);
//     background: #03e9f4;
//     box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4,
//       0 0 100px #03e9f4;
//   }
//   10%{
//     transform: scaleX(1.1);
//   }
//   20%{
//     transform: scaleX(1.05);
//   }
//   25%{
//     transform: scaleX(1.2);
//   }
//   30%{
//     transform: scaleX(1.5);
//   }
//   50%{
//     transform: scaleX(4);
//   }
//   85%{
//     transform: scaleX(4) rotate(360deg);
//   }
//   100%{
//     transform: scaleX(1) rotate(0deg);
//   }
// `;

export const GreenAnimation = styled.div`
  position: relative;
  background: #03e9f4;
  font-weight: 100;
  font-size: 1.5rem;
  text-transform: none;
  text-align: center;
  color: black;
  display: flex;
  justify-content: center;
  overflow: hidden;
  opacity: 0;
  z-index: 0;
  height: 2.4rem;
  margin: auto;
  width: 21.1rem;
  border-radius: 10px;
  animation: ${misty} 4s 5s steps(1) forwards;
  /* animation: {misty} 10s 2s steps(1), {jedi} 5s 12s linear forwards; */

  /* -webkit-transform: translate3d(0, 0, 0); */
  -webkit-backface-visibility: hidden;

  & + ${ThirdSpan} {
    transform: translateY(-2.3rem);
  }

  @media screen and (max-width: 850px) and (orientation: portrait) {
    font-size: 1.1rem;
    height: 2rem;
    width: 16.1rem;
    & + ${ThirdSpan} {
      transform: translateY(-1.9rem);
    }
  }
  @media screen and (max-width: 850px) and (orientation: landscape) {
    font-size: 1.1rem;
    height: 2rem;
    width: 16.1rem;
    & + ${ThirdSpan} {
      transform: translateY(-1.9rem);
    }
  }
`;

const btnanim1 = keyframes`
  0% {
    left: -100%;
  }
  50%,100% {
    left: 100%;
  }
`;

const btnanim2 = keyframes`
  0% {
    top: -100%;
  }
  50%,100% {
    top: 100%;
  }
`;

const btnanim3 = keyframes`
  0% {
    right: -100%;
  }
  50%,100% {
    right: 100%;
  }
`;

const btnanim4 = keyframes`
  0% {
    bottom: -100%;
  }
  50%,100% {
    bottom: 100%;
  }
`;

export const GreenAnimationSpan = styled.span`
  position: absolute;
  display: block;
  /* z-index: 1; */

  /* -webkit-transform: translate3d(0, 0, 0); */
  /* -webkit-backface-visibility: hidden; */

  &:nth-child(1) {
    top: 0;
    left: -100%;
    width: 100%;
    height: 3px;
    background: linear-gradient(90deg, transparent, #03e9f4);
    animation: ${btnanim1} 1s linear infinite;
    /* -webkit-transform: translate3d(0, 0, 0); */
    /* -webkit-backface-visibility: hidden; */
  }

  &:nth-child(2) {
    top: -100%;
    right: 0;
    width: 5px;
    height: 100%;
    background: linear-gradient(180deg, transparent, #03e9f4);
    animation: ${btnanim2} 1s linear infinite;
    animation-delay: 0.25s;

    /* -webkit-transform: translate3d(0, 0, 0); */
    /* -webkit-backface-visibility: hidden; */
  }

  &:nth-child(3) {
    bottom: 0;
    right: -100%;
    width: 100%;
    height: 3px;
    background: linear-gradient(270deg, transparent, #03e9f4);
    animation: ${btnanim3} 1s linear infinite;
    animation-delay: 0.5s;

    /* -webkit-transform: translate3d(0, 0, 0); */
    /* -webkit-backface-visibility: hidden; */
  }

  &:nth-child(4) {
    bottom: -100%;
    left: 0;
    width: 5px;
    height: 100%;
    background: linear-gradient(360deg, transparent, #03e9f4);
    animation: ${btnanim4} 1s linear infinite;
    animation-delay: 0.75s;

    /* -webkit-transform: translate3d(0, 0, 0); */
    /* -webkit-backface-visibility: hidden; */
  }
`;
