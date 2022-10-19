import React from 'react';
import { StyledSection, Experience, Education } from './styled';

export default function EdAndExp({ className }) {
  return (
    <StyledSection className={className}>
      <Experience>
        <h2>Опыт:</h2>
        <div>Здесь пока пусто</div>
      </Experience>
      <Education>
        <h2>Обучение:</h2>
        <ul>
          <li>
            <span>2022</span>
            <div>
              Курс Фронтенд-разработчик HTML Academy.{' '}
              <a href="https://assets.htmlacademy.ru/certificates/profession/39/1875311.pdf?1665069782&_ga=2.193242148.86894964.1665994142-270059664.1655958253">
                Сертификат
              </a>
            </div>
          </li>
        </ul>
      </Education>
    </StyledSection>
  );
}
