import React, { useState } from 'react';
import { StyledNav, StyledNavLink, StyledNavToggle } from './styled';
import { AppRoute } from '../../../consts';

export default function Nav() {
  const [active, setActive] = useState(false);

  return (
    <>
      <StyledNav active={active}>
        <StyledNavLink
          onClick={() => setActive(false)}
          to={AppRoute.PORTFOLIO}
          end
        >
          Портфолио
        </StyledNavLink>

        <StyledNavLink onClick={() => setActive(false)} to={AppRoute.ABOUT}>
          Обо мне
        </StyledNavLink>

        <StyledNavLink onClick={() => setActive(false)} to={AppRoute.CONTACTS}>
          Контакты
        </StyledNavLink>
      </StyledNav>
      <StyledNavToggle
        active={active}
        onClick={() => (active ? setActive(false) : setActive(true))}
      />
    </>
  );
}
