import React from 'react';
import Nav from '../nav/nav';
import { StyledHeader } from './styled';

export default function Header({ className }) {
  return (
    <StyledHeader className={className}>
      <Nav />
    </StyledHeader>
  );
}
