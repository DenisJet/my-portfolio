import React from 'react';
import PageWrapper from '../layout/page-wrapper/page-wrapper';
import { GlobalStyle } from './styled';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollTop from '../ui/scroll-top/scroll-top';
import AboutPage from '../pages/about-page/about-page';
import PortfolioPage from '../pages/portfolio-page/portfolio-page';
import ContactsPage from '../pages/contacts-page/contacts-page';
import { AppRoute } from '../../consts';
import { projects } from '../../moke';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <ScrollTop />
        <Routes>
          <Route path={AppRoute.PORTFOLIO} element={<PageWrapper />}>
            <Route index element={<PortfolioPage projects={projects} />} />
            <Route path={AppRoute.ABOUT} element={<AboutPage />} />
            <Route path={AppRoute.CONTACTS} element={<ContactsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
