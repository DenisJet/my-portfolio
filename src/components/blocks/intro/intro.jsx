import React from 'react';
import {
  IntroSection,
  IntroTitle,
  IntroWrapper,
  IntroImage,
  IntroText,
} from './styled';
import photo from '../../../assets/my-photo3.jpg';

export default function Intro({ className }) {
  return (
    <IntroSection className={className}>
      <IntroTitle>
        <h1>
          Денис
          <br />
          Калькопф
        </h1>
        <p>Веб разработчик</p>
      </IntroTitle>
      <IntroWrapper>
        <IntroImage alt="Denis Kalkopf" src={photo} height="400" width="400" />
        <IntroText>
          <p>
            Привет! Моё имя Денис. Я интересуюсь веб разработкой и всем что с
            этим связанно.
          </p>
          <p>
            Сейчас изучаю фронтенд. Но планирую стать фуллстэк разработчиком и
            понимать не только фронтенд но и бэкенд.{' '}
          </p>
          <p>Готов воплощать в жизнь разные проекты с хорошими людьми.</p>
        </IntroText>
      </IntroWrapper>
    </IntroSection>
  );
}
