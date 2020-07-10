import styled from 'styled-components';

export const Text = styled.p`
  color: ${(props) => props.color || props.theme.primaryDark};
  padding: 0;
  margin: 0;
  @media screen and (max-width: 850px) and (orientation: landscape) {
    font-size: 0.8rem;
  }
  @media screen and (max-width: 850px) and (orientation: portrait) {
    font-size: 0.8rem;
  }
`;
