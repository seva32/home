import styled from 'styled-components';

export const StyledBurger = styled.button`
  position: absolute;
  left: 1.3rem;
  top: 1.2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 1.5rem;
  height: 1.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  span {
    width: 1.5rem;
    height: 0.4rem;
    background: ${({ theme, open, visible }) =>
      open
        ? theme.primaryLight
        : visible
        ? theme.primaryDark
        : theme.primaryLight};
    /* border-radius: 10px; */
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }

  &:focus {
    outline: none;
  }
`;
