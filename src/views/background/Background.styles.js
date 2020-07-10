import styled from 'styled-components';

export const StyledBackground = styled.div`
  background: repeating-linear-gradient(
    45deg,
    #ffffff,
    #ffffff 0.265rem,
    #dfdfdf 0.265rem,
    #dfdfdf 0.362rem
  );
  filter: grayscale(10%);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  z-index: -1;
`;
