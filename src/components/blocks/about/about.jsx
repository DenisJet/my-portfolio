import React from 'react';
import { StyledSection, AboutWrapper, AboutText, AboutImage } from './styled';
import photo2 from '../../../assets/my-photo2.png';

export default function About({ className }) {
  return (
    <StyledSection className={className}>
      <h2>Немного о себе</h2>
      <AboutWrapper>
        <AboutText>
          <p>
            Меня с детства привлекали компьютерные технологии. Не так давно, решил начать с
            освоения фронтенда, чем сейчас и занимаюсь. Получаю огромное
            удовольствие, занимаясь веб разработкой!
          </p>
          <p>
            А так же играю на электро и бас гитаре, не много занимаюсь
            спортом, помогаю людям и отлично провожу время со своей женой и сыном,
            которых очень люблю!
          </p>
        </AboutText>
        <AboutImage src={photo2} alt="Denis Kalkopf" height="400" width="400" />
      </AboutWrapper>
    </StyledSection>
  );
}
