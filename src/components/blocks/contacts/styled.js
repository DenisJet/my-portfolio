import styled from 'styled-components';
import { devices } from '../../../consts';
import { Img } from '../../styled';

export const StyledSection = styled.section`
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 10px;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;

  & div {
    padding-left: 30px;
  }

  @media (${devices.TABLET}) {
    padding-top: 0;
  }

  & p:last-child {
    margin-top: 50px;
    margin-left: 30px;
  }
`;

export const SocialLinkImage = styled(Img)`
  width: 32px;
  height: 32px;
`;

export const ContactLink = styled.a`
  color: ${(props) => props.theme.colorGray};
  text-decoration: none;

  &:hover,
  &:active {
    color: ${(props) => props.theme.colorBlack};
  }

  &.active {
    color: ${(props) => props.theme.colorBlack};
  }
`;

export const SocialLink = styled.a`
  display: inline-block;
  margin-left: 15px;

  &:hover {
    opacity: 0.5;
  }

  &:active {
    opacity: 0.8;
  }
`;
