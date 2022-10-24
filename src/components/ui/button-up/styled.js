import styled from 'styled-components';

export const StyledButton = styled.button`
  position: fixed;
  z-index: 1;
  padding: 0;
  bottom: 100px;
  right: 20%;
  width: 64px;
  height: 64px;
  border: 1px solid;
  border-radius: 50%;
  cursor: pointer;
  font-size: 36px;
  font-weight: bold;
  text-align: center;
  vertical-align: top;

  display: none;

  color: ${(props) => props.theme.colorGray};
  background-color: rgba(255, 255, 255, 0.5);
  border-color: ${(props) => props.theme.colorGray};
  outline-color: #b6aaff;

  &:hover,
  &:active {
    color: ${(props) => props.theme.colorBlack};
    border-color: ${(props) => props.theme.colorBlack};
  }

  &.show {
    display: block;
  }
`;
