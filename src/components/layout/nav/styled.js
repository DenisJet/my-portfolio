import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { devices } from '../../../consts';

export const StyledNav = styled.nav`
  display: ${(props) => (props.active ? 'flex' : 'none')};
  flex-direction: column;
  position: relative;
  font-size: 32px;
  line-height: 42px;
  font-weight: 700;
  margin-bottom: ${(props) => (props.active ? '50px' : '0')};

  @media (${devices.TABLET}) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 350px;
    font-size: 18px;
    line-height: 22px;
    margin-bottom: 0;
  }
`;

export const StyledNavLink = styled(NavLink)`
  color: ${(props) => props.theme.colorGray};
  text-decoration: none;
  padding-top: 20px;
  padding-bottom: 20px;

  &:hover,
  &:active {
    color: ${(props) => props.theme.colorBlack};
  }

  &.active {
    color: ${(props) => props.theme.colorBlack};
  }

  @media (${devices.TABLET}) {
    margin-right: 20px;
  }
`;

export const StyledNavToggle = styled.button`
  position: absolute;
  top: 10px;
  right: 20px;
  z-index: 2;
  display: block;
  width: 50px;
  height: 50px;
  cursor: pointer;
  border: none;
  background-color: transparent;

  @media (${devices.TABLET}) {
    display: none;
  }

  ${(props) =>
    props.active
      ? css`
          &::before,
          &::after {
            content: '';
            position: absolute;
            top: 22px;
            left: 11px;
            width: 27px;
            height: 4px;
            background-color: ${(props) => props.theme.colorGray};
          }

          &::before {
            transform: rotate(45deg);
            box-shadow: none;
          }

          &::after {
            transform: rotate(-45deg);
          }
        `
      : css`
          ::before {
            content: '';
            position: absolute;
            top: 15px;
            left: 8px;
            width: 33px;
            height: 4px;
            background-color: ${(props) => props.theme.colorBlack};
            box-shadow: 0 8px 0 0 ${(props) => props.theme.colorBlack},
              0 16px 0 0 ${(props) => props.theme.colorBlack};
          }
        `}
`;
