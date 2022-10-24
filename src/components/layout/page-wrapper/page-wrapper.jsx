import React from 'react';
import Footer from '../footer/footer';
import { Main, StyledHeader } from './styled';
import { Outlet } from 'react-router-dom';
import ButtonUp from '../../ui/button-up/button-up';

export default function PageWrapper() {
  return (
    <>
      <StyledHeader />
      <Main>
        <ButtonUp />
        <Outlet />
      </Main>
      <Footer />
    </>
  );
}
