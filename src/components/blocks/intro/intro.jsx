import React from 'react';
import { IntroSection, IntroTitle, IntroWrapper, IntroImage, IntroText } from './styled';
import photo from '../../../assets/main-photo.png';

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
        <IntroImage alt='Denis Kalkopf' src={photo} height='400' width='400' />
        <IntroText>
          <p>Привет! Моё имя Денис. Я интересуюсь веб разработкой и всем что с этим связанно.</p>
          <p>
            Имею понимание работы и опыт создания не только сайтов, но и различных веб приложений.
            Разбираюсь как во фронтенде так и в бэкенде. Позиционирую себя как фуллстек разработчик.{' '}
          </p>
          <p>Готов воплощать в жизнь разные проекты с хорошими людьми.</p>
        </IntroText>
      </IntroWrapper>
    </IntroSection>
  );
}
