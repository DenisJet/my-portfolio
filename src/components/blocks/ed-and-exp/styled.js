import styled from 'styled-components';
import { devices } from '../../../consts';

export const StyledSection = styled.section`
  margin-bottom: 50px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 10px;
  padding-left: 30px;
  padding-right: 30px;
  max-width: 1000px;

  @media (${devices.TABLET}) {
    padding-top: 0;
  }

  & p {
    margin: 0;
  }

  & li {
    margin-bottom: 10px;
  }

  & ol {
    margin-bottom: 20px;
  }

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

export const SectionTitle = styled.h2`
  font-weight: 700;
  font-size: 34px;
  line-height: 42px;
`;
