export const projects = [
  {
    id: 9,
    type: 'pet-проекты',
    name: 'BLOG ME',
    image: 'images/blog-me.png',
    title: 'Блог, с возможностью написания статей.',
    description:
      'Пэт проект. MongoDB, Express, React, NodeJS, Material Ui, Redux Toolkit, Axios, JWT, BCrypt, Multer',
    opinion:
      'Первый мой full stack проект, за время написания которого научился создавать свой бэкенд. В проекте реализована регистрация и авторизация пользователей. Чтение, создание, удаление, изменение статей (CRUD). Загрузка изображений на сервер. Возможность оставлять комментарии и т.д.',
    repolinkFront: 'https://github.com/DenisJet/blog-mern-front',
    repolinkBack: 'https://github.com/DenisJet/blog-mern-beck',
  },
  {
    id: 8,
    type: 'pet-проекты',
    name: 'Github Seasch',
    image: 'images/githubsearch.png',
    title: 'Поиск репозиториев на Гитхабе по имени пользователя.',
    description:
      'Пэт проект. TypeScript, React, Redux, Redux Toolkit, RTKQuery, Tailwind CSS. Axios.',
    opinion:
      'Несложный проект, по поиску репозиториев на Гитхабе. За время реализации проекта познакомился с RTKQuery, Tailwind CSS. Это первый проект на TypeScript',
    link: 'https://denisjet-githubsearch.netlify.app/',
    repolinkFront: 'https://github.com/DenisJet/github-search',
  },
  {
    id: 7,
    type: 'учебные',
    name: 'Что посмотреть',
    image: 'images/wtw.png',
    title: '«Что посмотреть» — онлайн кинотеатр нового поколения.',
    description:
      'Учебный проект. React. React-router. React Hooks (useState, useEffect, useRef и др.). Redux, Redux Toolkit. Axios. Jest.',
    opinion:
      'Сервис позволяет просматривать видео, ставить оценки и отзывы. За время реализации проекта более близко познакомился с библиотекой React. В проекте затронуты такие моменты как: маршрутизация - React Router и приватные маршруты в React Router, работа с хуками, работа с формами. Реализованно хранилище состояния при помощи Redux Toolkit и асинхронность в Redux при помощи middlewares, redux-thunk. Научился тестировать приложение при помощи Unit тестов и библиотеки Jest. Для работы с сервером используется библиотека Axios. Реализована авторизация.',
    link: 'https://denisjet-wtw.netlify.app/',
    repolinkFront: 'https://github.com/DenisJet/wtw',
  },
  {
    id: 6,
    type: 'коммерческие',
    name: 'СЭС Служба "Чистый Дом"',
    image: 'images/cleanhouse.png',
    title: 'Сайт службы по уничтожению насекомых.',
    description:
      'Коммерческий проект. Семантическая, валидная, адаптивная, резиновая, кроссбраузерная вёрстка. БЭМ, Sass, Gulp. Оптимизация изображений.',
    opinion: 'Сайт полностью мной придуман, разработан и выложен на хостинг.',
    link: 'https://cleanhouse-ses.ru',
    repolinkFront: 'https://github.com/DenisJet/CleanHouse',
  },
  {
    id: 5,
    type: 'учебные',
    name: 'Большое путешествие',
    image: 'images/big-trip.png',
    title: 'Cовременный сервис для путешественников.',
    description: 'Учебный проект. SPA на чистом JavaScript. ООП. MVP. REST Api',
    opinion:
      'Сервис помогает детально спланировать маршрут поездки, рассчитать стоимость путешествия и получить информацию о достопримечательностях. За время реализации проекта познакомился с ООП. В проекте используется классовый подход. Научился применять архитектурный паттерн MVP. Разобрался с REST Api. Так же используются паттерны Адаптер и Observer (Наблюдатель). Познакомился с работой сервис-воркеров.',
    link: 'https://denisjet-big-trip.netlify.app/',
    repolinkFront: 'https://github.com/DenisJet/big-trip',
  },
  {
    id: 4,
    type: 'учебные',
    name: 'Фермерские продукты',
    image: 'images/fermers-products.png',
    title: 'Пример интернет магазина фермерских продуктов.',
    description:
      'Учебный проект. Использование библиотеки React. Styled-components, react hooks, react-router.',
    opinion:
      'За время реализации проекта научился создавать SPA, используя функциональные компоненты, стилизовать компоненты при помощи styled-components и управлять состоянием и интерактивностью компонентов при помощи основных react хуков (useState, useEffect). А так же разобрался как  устроена маршрутизация в SPA и что такое react-router. Использованна сторонняя библиотека swiper.js.',
    link: 'https://denisjet-fermers-products.netlify.app/',
    repolinkFront: 'https://github.com/DenisJet/fermers-products',
  },
  {
    id: 3,
    type: 'учебные',
    name: 'Kekstagram',
    image: 'images/kekstagram.png',
    title: 'Кекстаграм — сервис просмотра изображений.',
    description:
      'Учебный проект. Пользователям предоставлена возможность загружать свои фотографии или просматривать фотографии, загруженные ранее другими пользователями.',
    opinion:
      'За время реализации проекта работал с объектами и массивами, с событиями и DOM деревом. А так же присутствует работа с сетью. Использованна сторонняя библиотека noUiSlider.',
    link: 'https://denis-jet-kekstagram.netlify.app/',
    repolinkFront: 'https://github.com/DenisJet/Kekstagram',
  },
  {
    id: 2,
    type: 'учебные',
    name: 'Keksobooking',
    image: 'images/keksobooking.png',
    title: 'Cервис по поиску и размещения объявлений о сдаче в аренду недвижимости в центре Токио.',
    description:
      'Учебный проект. Пользователям предоставляется возможность размещать объявления о своей недвижимости или просматривать уже размещённые объявления.',
    opinion:
      'За время реализации проекта научился работать c объектами и массивами, с DOM деревом и событиями в JavaScript. Научился работе с сетью: синхронные и асинхронные операции, JSON, промисы, Fetch API. В проекте реализована валидация формы с помощью Javascript.',
    link: 'https://denisjet-keksobooking.netlify.app/',
    repolinkFront: 'https://github.com/DenisJet/Keksobooking',
  },
  {
    id: 1,
    type: 'учебные',
    name: 'Drink2Go',
    image: 'images/drink2go.png',
    title: 'Главная страница интернет магазина кофейных напитков.',
    description:
      'Учебный проект. Семантическая, валидная, адаптивная, резиновая, кроссбраузерная (Chrome, Firefox, Safari), PixelPerfect вёрстка. БЭМ, Sass, Gulp. Ретинизация графики. Адаптивность и оптимизация изображений. Использование сторонних библиотек Leaflet и noUiSlider.',
    opinion:
      'Итоговый учебный проект курса Фронтенд-разработчик от HTML Academy, за время реализации которого я научился базовым стандартам верстки. В проекте так же присутствует не много JavaScript, это мобильное меню сайта и слайдер в промо-блоке.',
    link: 'https://denisjet-drink2go.netlify.app/',
    repolinkFront: 'https://github.com/DenisJet/Drink2Go',
  },
];
