import styled from 'styled-components';
import { Ul, Img, P } from '../../styled';
import { devices } from '../../../consts';

export const StyledSection = styled.section`
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

export const SkillsUl = styled(Ul)`
  padding-left: 30px;
  padding-right: 30px;
  margin-left: auto;
  margin-right: auto;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 90px;

  & li {
    text-align: center;
  }

  & li:last-child {
    margin-bottom: 0;
  }

  @media (${devices.TABLET}) {
    max-width: 1000px;
  }
`;

export const SkillsImage = styled(Img)`
  height: 50px;
  margin-bottom: 25px;
`;

export const SkillsText = styled(P)`
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  color: ${(props) => props.theme.colorGray};
`;
