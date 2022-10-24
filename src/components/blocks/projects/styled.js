import styled from 'styled-components';
import { Img, Ul } from '../../styled';

export const ProjectSection = styled.section`
  background-color: ${(props) => props.theme.backgroundLightGray};
  padding-top: 100px;
  padding-bottom: 100px;

  & h2 {
    margin: 0;
    margin-bottom: 80px;
    text-align: center;
    font-weight: 700;
    font-size: 34px;
    line-height: 42px;
  }
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
