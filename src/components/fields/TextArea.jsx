import styled from 'styled-components';

export const TextArea = styled.textarea`
  height: 8rem;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.primaryDark};
  color: ${({ theme }) => theme.primaryLight};
  /* padding: 10px 15px; */
  font-size: ${(props) => {
    if (props.big) return '20px';
    return '16px';
  }};
  outline: none;
  cursor: pointer;
  /* margin: 15px; */
  border: ${(props) => props.border || '2px solid ' + props.theme.primaryDark};
  @media screen and (max-width: 850px) and (orientation: landscape) {
    height: 4rem;
  }
`;
