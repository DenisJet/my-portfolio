import React from 'react';
import { StyledSection, SectionTitle } from './styled';

export default function EdAndExp({ className }) {
  return (
    <StyledSection className={className}>
      <SectionTitle>
        Опыт
        <br /> и обучение:
      </SectionTitle>
      <ul>
        <li>
          <span>ноябрь 2021 - октябрь 2022</span>
          <div>
            <strong>Курс Фронтенд-разработчик от HTML Academy.</strong>{' '}
            <a href="https://assets.htmlacademy.ru/certificates/profession/39/1875311.pdf?1665069782&_ga=2.193242148.86894964.1665994142-270059664.1655958253">
              Сертификат
            </a>
            <p>
              За время курса приобрел навыки семантической, валидной,
              адаптивной, резиновой, кроссбраузерной, PixelPerfect вёрстки по
              макетам Figma. Ретинизация графики, этих проектов и адаптивность и
              оптимизация изображений.
              <br /> Научился работать с объектами и массивами, с DOM деревом и
              событиями в JavaScript. А так же работать с сетью: синхронные и
              асинхронные операции, JSON, промисы, Fetch API.
              <br /> Приобрёл опыт создания SPA, с использованием библиотеки
              React (styled-components, react-hooks, react-router).
            </p>
          </div>
        </li>
      </ul>
    </StyledSection>
  );
}
