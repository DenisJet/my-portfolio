import React from 'react';
import { useEffect, useState } from 'react';
import { StyledButton } from './styled';

export default function ButtonUp() {
  const [scroll, setScroll] = useState(0);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <StyledButton
      className={scroll < 500 ? '' : 'show'}
      onClick={() => window.scrollTo(0, 0)}
    >
      🠑
    </StyledButton>
  );
}
