import React from 'react';
import { StyledSection, AboutWrapper, AboutText, AboutImage } from './styled';
import photo2 from '../../../assets/my-photo2.jpg';

export default function About({ className }) {
  return (
    <StyledSection className={className}>
      <h2>Немного о себе</h2>
      <AboutWrapper>
        <AboutText>
          <p>
            Мне 39 лет, родился и вырос в г.Красноярске. Долгое время работал
            монтажником стальных и ж/б конструкций. Не так давно принял решение
            поменять сферу деятельности.
          </p>
          <p>
            {' '}
            Меня всегда привлекали компьютерные технологии. Решил начать с
            освоения фронтенда, чем сейчас и занимаюсь. Получаю огромное
            удовольствие, занимаясь веб разработкой!
          </p>
          <p>
            А так же я играю на электро и бас гитаре, не много занимаюсь
            спортом, помогаю людям и провожу время со своей женой и сыном,
            которых очень люблю!
          </p>
        </AboutText>
        <AboutImage src={photo2} alt="Denis Kalkopf" height="400" width="400" />
      </AboutWrapper>
    </StyledSection>
  );
}
