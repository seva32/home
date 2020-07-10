import React from 'react';
// import styled, { css } from 'styled-components';

// working with react components and not syted ones

export const StyledFrame = ({ animated, color }) => {
  const divStyle = {
    background: color ? 'black' : 'white',
    border: color ? '5px solid white' : '5px solid black',
    width: '4.5rem',
    height: '42px',
    borderRadius: '7px',
    margin: '0',
    padding: '0',
  };

  const styledPara = {
    fontSize: '2rem',
    color: color ? 'white' : 'black',
    fontWeight: 'bold',
    margin: '0',
    padding: '0',
    height: '100%',
    lineHeight: '39px',
    textAlign: 'center',
    width: '100%',
    WebkitTransform: 'translateZ(0)',
    WebkitTransition: 'transform 0.5s ease-in-out',
    WebkitTransformOrigin: '55% 57%',
    WebkitBackfaceVisibility: 'hidden',
  };

  const styledSpan = {
    display: 'inline-flex',
    overflow: 'hidden',
    margin: '0',
    lineHeight: '39px',
    WebkitTransition: 'transform 0.5s ease-in-out',
    WebkitTransformOrigin: '55% 57%',
    WebkitTransform: animated ? 'rotate(90deg)' : '',
  };
  return (
    <div style={divStyle}>
      <p style={styledPara}>
        s<span style={styledSpan}>></span>f
      </p>
    </div>
  );
};

////// styled components //////
/*
export const StyledFrame = styled.div`
  background: white;
  border: 5px solid black;
  width: 4.5rem;
  height: 42px;
  border-radius: 7px;
  margin: 0;
  padding: 0;
`;

export const StyledPara = styled.p`
  font-size: 2rem;
  color: black;
  font-weight: bold;
  margin: 0;
  padding: 0;
  height: 100%;
  line-height: 39px;
  text-align: center;
`;

const animatedSpan = css`
  -webkit-transition: transform 0.5s ease-in;
  -webkit-transform-origin: 55% 57%;
  -webkit-transform: rotate(90deg);
`;

export const StyledSpan = styled.span`
  display: inline-flex;
  overflow: hidden;
  margin: 0;
  line-height: 39px;
  -webkit-transition: transform 0.5s ease-in;
  -webkit-transform-origin: 55% 57%;
  -webkit-backface-visibility: hidden;
  // -webkit-transform: translate3d(0, 0, 0); 
  // -webkit-transform-style: preserve-3d; 
  ${(props) => props.animated && animatedSpan}
`;
*/
