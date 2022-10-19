import styled from 'styled-components';
import { devices } from '../../../consts';

export const StyledHeader = styled.header`
  padding-left: 30px;
  padding-right: 30px;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;

  @media (${devices.TABLET}) {
    padding-right: 0;
    padding-left: 0;
    padding-top: 0;
    margin-left: 30px;
    margin-right: 30px;
    border-bottom: 1px solid ${(props) => props.theme.colorGray};
  }

  @media (min-width: 1060px) {
    margin-left: auto;
    margin-right: auto;
  }
`;
