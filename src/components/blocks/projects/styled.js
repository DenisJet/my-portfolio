import styled, { css } from 'styled-components';
import { Img, Ul } from '../../styled';
import { devices } from '../../../consts';

export const ProjectSection = styled.section`
  background-color: ${(props) => props.theme.backgroundLightGray};
  padding-top: 100px;
  padding-bottom: 100px;
`;

export const TabsList = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  margin-bottom: 80px;
  align-items: center;
  padding-left: 30px;
  padding-right: 30px;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;

  @media (${devices.DESKTOP}) {
    flex-direction: row;
    align-items: baseline;
  }

  & h2 {
    font-weight: 700;
    font-size: 34px;
    line-height: 42px;

    @media (${devices.DESKTOP}) {
      margin-right: auto;
      margin-left: 0;
    }
  }
}`;

export const TabBtn = styled.button.attrs({ type: 'button' })`
  color: ${(props) => props.theme.colorGray};
  cursor: pointer;
  font-size: 18px;
  font-weight: 600;
  padding: 5px;
  border: none;
  background-color: transparent;

  &:hover,
  &:active {
    color: ${(props) => props.theme.colorBlack};
  }

  @media (${devices.TABLET}) {
    margin-right: 20px;
  }

  ${({ isActive }) =>
    isActive &&
    css`
      border-bottom: 1px solid ${(props) => props.theme.colorBlack};
      color: ${(props) => props.theme.colorBlack};
    `}
`;

export const ProjectImage = styled(Img)``;

export const ProjectList = styled(Ul)`
  padding-left: 30px;
  padding-right: 30px;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
`;

export const ProjectItem = styled.li`
  &:not(:last-child) {
    padding-bottom: 50px;
    border-bottom: 1px solid ${(props) => props.theme.colorGray};
    margin-bottom: 50px;
  }
`;

export const ProjectDescription = styled.div`
  & p:nth-child(3) {
    font-weight: 600;
  }
`;

export const ProjectLink = styled.a`
  padding: 10px;
  color: ${(props) => props.theme.colorGray};
  text-decoration: none;
  font-weight: 700;
  display: inline-block;

  &:hover,
  &:active {
    color: ${(props) => props.theme.colorBlack};
  }
`;
