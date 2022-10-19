import styled from 'styled-components';
import { devices } from '../../../consts';

export const StyledFooter = styled.footer`
  color: ${(props) => props.theme.colorGray};
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 30px;
  padding-bottom: 30px;
  max-width: 1000px;
  border-top: 1px solid ${(props) => props.theme.colorGray};

  @media (${devices.TABLET}) {
    padding-right: 0;
    padding-left: 0;
    margin-left: 30px;
    margin-right: 30px;
  }

  @media (min-width: 1060px) {
    margin-left: auto;
    margin-right: auto;
  }
`;
