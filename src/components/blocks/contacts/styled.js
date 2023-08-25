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

export const SectionTitle = styled.h2`
  font-weight: 700;
  font-size: 34px;
  line-height: 42px;
`;

export const SocialLinkImage = styled(Img)`
  width: 42px;
  height: 42px;
`;

export const ContactLink = styled.a`
  color: ${(props) => props.theme.colorGray};
  text-decoration: none;

  &:hover,
  &:active {
    opacity: 0.5;
  }

  &.active {
    opacity: 0.8;
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

export const GithubLink = styled.a`
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  color: ${(props) => props.theme.colorBlack};
  text-decoration: none;
  width: 125px;
  font-weight: 700;

  &:hover {
    opacity: 0.5;
  }

  &:active {
    opacity: 0.8;
  }
`;
