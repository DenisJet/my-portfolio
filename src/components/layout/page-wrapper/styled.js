import styled from 'styled-components';
import Header from '../../layout/header/header';
import { devices } from '../../../consts';

export const StyledHeader = styled(Header)`
  @media (${devices.TABLET}) {
    margin-bottom: 40px;
  }
`;

export const Main = styled.main`
  margin: 0 auto;
  padding-bottom: 0;
  position: relative;
`;
