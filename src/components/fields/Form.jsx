import styled from 'styled-components';

export const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 850px) and (orientation: portrait) {
    width: 90vw;
    margin: auto;
  }
  @media screen and (max-width: 850px) and (orientation: landscape) {
    width: 90vw;
    margin: auto;
    height: 90vh;
  }
`;
