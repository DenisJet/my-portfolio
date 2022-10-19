import styled from 'styled-components';
import { devices } from '../../../consts';

export const StyledSection = styled.div`
  padding-left: 30px;
  padding-right: 30px;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
`;

export const Experience = styled.div`
  margin-bottom: 50px;
  padding-top: 10px;

  @media (${devices.TABLET}) {
    padding-top: 0;
  }

  & div {
    margin-left: 40px;
  }
`;

export const Education = styled.div`
  & a {
    color: ${(props) => props.theme.colorGray};
    text-decoration: none;
    padding-top: 20px;
    padding-bottom: 20px;
    font-weight: 700;

    &:hover,
    &:active {
      color: ${(props) => props.theme.colorBlack};
    }

    &.active {
      color: ${(props) => props.theme.colorBlack};
    }
  }
`;
