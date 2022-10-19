import React from 'react';
import Footer from '../footer/footer';
import { Main, StyledHeader } from './styled';
import { Outlet } from 'react-router-dom';

export default function PageWrapper() {
  return (
    <>
      <StyledHeader />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
}
