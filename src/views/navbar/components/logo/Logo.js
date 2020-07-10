import React, { useState, useEffect } from 'react';
import { StyledFrame } from './Logo.styles';

const Logo = ({ visible }) => {
  const [animated, setAnimated] = useState(false); // arrow animation
  const [color, setColor] = useState(false); // color change
  useEffect(() => {
    if (visible) {
      setAnimated(false);
      setColor(false);
    } else {
      setAnimated(true);
      setColor(true);
      setTimeout(() => {
        setAnimated(false);
      }, 1000);
    }
  }, [visible]);

  return (
    // <StyledFrame>
    //   <StyledPara>
    //     s<StyledSpan animated={animated}>></StyledSpan>f
    //   </StyledPara>
    // </StyledFrame>
    <StyledFrame animated={animated} color={color} />
  );
};

export default Logo;
