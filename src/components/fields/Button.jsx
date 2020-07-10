import React from 'react';
import styled, { css } from 'styled-components';
import Loader from '../Loader';

const StyledButton = styled.button`
  border-radius: 5px;
  background-color: ${(props) =>
    props.secondary ? props.theme.secondaryDark : props.theme.primaryDark};
  color: ${({ theme }) => theme.primaryLight};
  font-size: ${(props) => {
    if (props.big) return '20px';
    return '16px';
  }};
  outline: none;
  border: none;
  cursor: pointer;
  margin: ${(props) => (props.margin ? props.margin : 'auto')};
  padding: ${(props) => (props.padding ? props.padding : 'auto')};
  width: ${(props) => (props.width ? props.width : 'auto')};
  border: 2px solid
    ${(props) =>
      props.secondary ? props.theme.secondaryBorder : props.theme.primaryDark};
  &:hover {
    ${(props) => {
      if (props.inverse) {
        return css`
          background-color: ${({ theme }) => theme.primaryDark};
          color: ${({ theme }) => theme.primaryLight};
        `;
      }
      return css`
        color: ${(props) =>
          props.secondary
            ? props.theme.secondaryDark
            : props.theme.primaryDark};
        background-color: ${(props) =>
          props.secondary
            ? props.theme.secondaryLight
            : props.theme.primaryLight};
      `;
    }};
  }

  ${(props) => {
    return (
      props.inverse &&
      css`
        background-color: ${({ theme }) => theme.primaryLight};
        color: ${({ theme }) => theme.primaryDark};
      `
    );
  }}
`;

export const Button = ({
  secondary,
  big,
  inverse,
  loading,
  children,
  ...props
}) => {
  return (
    <StyledButton secondary={secondary} big={big} inverse={inverse} {...props}>
      {loading ? <Loader /> : children}
    </StyledButton>
  );
};
