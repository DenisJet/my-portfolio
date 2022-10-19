import React from 'react';
import { StyledIntro, StyledProjects } from './styled';

export default function PortfolioPage({ projects }) {
  return (
    <>
      <StyledIntro />
      <StyledProjects projects={projects} />
    </>
  );
}
