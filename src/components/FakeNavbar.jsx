import Container from './Container';
import styled from 'styled-components';

const FakeNavbar = styled(Container)`
  height: ${({ theme }) => theme.navbarHeight};
`;

export default FakeNavbar;
