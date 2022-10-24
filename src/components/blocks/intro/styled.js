import styled from 'styled-components';
import { devices } from '../../../consts';
import { Img } from '../../styled';

export const IntroSection = styled.section`
  padding-left: 30px;
  padding-right: 30px;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 10px;

  @media (${devices.TABLET}) {
    padding-top: 0;
  }
`;

export const IntroTitle = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;

  & p {
    margin: 0;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    vertical-align: middle;
  }

  @media (${devices.TABLET}) {
    flex-direction: row;
    align-items: baseline;
  }

  & h1 {
    font-wieght: 700;
    font-size: 47px;
    line-height: 59px;
    color: ${(props) => props.theme.colorBlack};
    margin-top: 0;
    margin-bottom: 30px;

    @media (${devices.TABLET}) {
      margin-bottom: 0;
      margin-right: 100px;
    }
  }
`;

export const IntroWrapper = styled.div`
  @media (${devices.TABLET}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    align-items: center;
  }
`;

export const IntroImage = styled(Img)`
  display: block;
  object-fit: fill;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50px;
  border-radius: 8px;

  @media (${devices.TABLET}) {
    margin-bottom: 0;
  }
`;

export const IntroText = styled.div`
  text-align: center;
`;
