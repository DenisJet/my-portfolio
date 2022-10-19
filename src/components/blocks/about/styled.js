import styled from 'styled-components';
import { devices } from '../../../consts';
import { Img } from '../../styled';

export const StyledSection = styled.section`
  padding-left: 30px;
  padding-right: 30px;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;

  & h2 {
    margin: 0;
    margin-bottom: 50px;
    font-weight: 700;
    font-size: 34px;
    line-height: 42px;
  }
`;

export const AboutWrapper = styled.div`
  @media (${devices.TABLET}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    align-items: center;
  }
`;

export const AboutImage = styled(Img)`
  margin-left: auto;
  margin-right: auto;
  display: block;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
`;

export const AboutText = styled.div`
  text-align: center;
  margin-bottom: 50px;

  @media (${devices.TABLET}) {
    margin-bottom: 0;
  }
`;
