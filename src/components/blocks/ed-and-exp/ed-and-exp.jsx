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
          <span>сентябрь 2022 - по настоящее время</span>
          <div>
            <p>
              <strong>Индивидуальное предпринимательство / частная практика / фриланс</strong>
            </p>
            <p>
              <strong>Веб-разработчик.</strong>
            </p>
            <p>
              - создание отзывчивых и мобильно-адаптивных веб-страниц, приложений и компонентов, а так же разработка
              пользовательских интерфейсов с использованием HTML, CSS, JavaScript, React JS, Next JS.
            </p>
            <p>
              - доработка и внесение правок, оптимизация производительности и доступности веб-страниц, сайтов и
              веб-приложений путем оптимизации кода.
            </p>
          </div>
        </li>
        <li>
          <span>март 2023 - июль 2023</span>
          <div>
            <p>
              <strong>Clean House.</strong>
            </p>
            <p>
              <strong>Веб-разработчик.</strong>
            </p>
            <p>
              Создание, разработка и администрирование сайта компании. Используемые технологии: HTML, CSS, SCSS,
              JavaScript, GULP.
            </p>
            <p>
              Cайт компании -{' '}
              <a href='https://cleanhouse-ses.ru/' target='blank'>
                https://cleanhouse-ses.ru/
              </a>
            </p>
          </div>
        </li>
        <li>
          <span>ноябрь 2022 - август 2023</span>
          <div>
            <strong>Курс React-разработчик от HTML Academy.</strong>{' '}
            <a href='https://assets.htmlacademy.ru/certificates/profession/47/1875311.pdf?1692890714' target='blank'>
              Сертификат
            </a>
            <ol>
              <li>
                <p>Разработка веб-интерфейсов при помощи JavaScript:</p>
                <p> - переменные, типы данных, циклы, контекст(this)</p>
                <p> - структуры данных, массивы, объекты</p>
                <p> - области видимости, замыкания, ES модули</p>
                <p> - DOM и события</p>
                <p> - работа с сетью и асинхронность(промисы, AJAX, JSON, Fetch API)</p>
              </li>
              <li>
                <p>Разработка SPA на чистом JavaScript:</p>
                <p> - ООП, объекты, классы</p>
                <p> - MVP. Model. View. Presenter </p>
                <p> - работа с сетью REST Api</p>
                <p> - offline, serviceWorkers</p>
              </li>
              <li>
                <p>Разработка веб-приложений на React:</p>
                <p> - маршрутизация React Router</p>
                <p> - состояние (state), React Hooks, useEffect, ref, формы, HOC </p>
                <p> - Redux, Redux Toolkit, асинхронность в Redux, Middlewares, redux-thunk, Axios</p>
                <p> - тестирование React, юнит-тестирование, Jest</p>
              </li>
            </ol>
          </div>
        </li>
        <li>
          <span>ноябрь 2021 - октябрь 2022</span>
          <div>
            <strong>Курс Фронтенд-разработчик от HTML Academy.</strong>{' '}
            <a
              href='https://assets.htmlacademy.ru/certificates/profession/39/1875311.pdf?1665069782&_ga=2.193242148.86894964.1665994142-270059664.1655958253'
              target='blank'
            >
              Сертификат
            </a>
            <p>
              За время курса приобрел навыки семантической, валидной, адаптивной, резиновой, кроссбраузерной,
              PixelPerfect вёрстки по макетам Figma. Ретинизация графики, этих проектов и адаптивность и оптимизация
              изображений.
              <br /> Научился работать с объектами и массивами, с DOM деревом и событиями в JavaScript. А так же
              работать с сетью: синхронные и асинхронные операции, JSON, промисы, Fetch API.
              <br /> Приобрёл опыт создания SPA, с использованием библиотеки React (styled-components, react-hooks,
              react-router).
            </p>
          </div>
        </li>
      </ul>
    </StyledSection>
  );
}
