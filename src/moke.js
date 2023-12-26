export const projects = [
  {
    id: 13,
    type: 'коммерческие',
    name: 'Реставрация ванн',
    image: 'images/restavracia.png',
    title: 'Landing Page.',
    description:
      'Семантическая, адаптивная вёрстка, с использованием таких инструментов как Gulp, SCSS, Pug, Bootstrap.',
    opinion:
      'Несложный лэндинг, за время создания которого познакомился  с шаблонизатором Pug, который понравился удобной возможностью создавать отдельные блоки для верстки. А так же познакомился с Bootstrap, который очень ускоряет вёрстку (но работать с Sass, мне нравится больше).',
    link: 'http://restavracia--vann.ru/',
    repolinkFront: 'https://github.com/DenisJet/remont-vann',
  },
  {
    id: 12,
    type: 'pet-проекты',
    name: 'Live Chat',
    image: 'images/online-chat.png',
    title: 'Чат в реальном времени.',
    description: 'Nest JS, PostgreSQL, Prisma, Socket.IO',
    opinion: 'Чат в реальном времени. За время создания проекта, впервые ознакомился с Socket.IO.',
    link: 'https://online-chat-c8eu.onrender.com/chat',
    repolinkBack: 'https://github.com/DenisJet/live-chat-server',
  },
  {
    id: 11,
    type: 'pet-проекты',
    name: 'Telegram Bot',
    image: 'images/tgbot.png',
    title: 'Телеграм бот.',
    description: 'Nest JS, Next JS, TypeScript, PostgreSQL, Telegram Bot Api',
    opinion:
      'Телеграмм бот, который умеет создавать и увеличивать репутацию участников в чате. Реализована страница просмотра репутаций.',
    repolinkFront: 'https://github.com/DenisJet/tgbot-client',
    repolinkBack: 'https://github.com/DenisJet/tgbot-server',
  },
  {
    id: 10,
    type: 'pet-проекты',
    name: 'Spotify-Clone',
    image: 'images/spotify-clone.png',
    title: 'Full stack проект, музыкальная платформа.',
    description: 'Nest JS, SSR на Next JS, TypeScript, Mongo DB, Material Ui',
    opinion:
      'Реализована загрузка, прослушивание и удаление музыкальных треков, загрузка изображений для обложки трека. Есть возможность оставлять комментарии. Так же реализована работа музыкального плеера.',
    repolinkFront: 'https://github.com/DenisJet/spotify-clone-client',
    repolinkBack: 'https://github.com/DenisJet/spotify-clone-server',
  },
  {
    id: 9,
    type: 'pet-проекты',
    name: 'BLOG ME',
    image: 'images/blog-me.png',
    title: 'Блог, с возможностью написания статей.',
    description: 'MongoDB, Express, React, NodeJS, Material Ui, Redux Toolkit, Axios, JWT, BCrypt, Multer',
    opinion:
      'Первый мой full stack проект, за время написания которого научился создавать свой бэкенд. В проекте реализована регистрация и авторизация пользователей. Чтение, создание, удаление, изменение статей (CRUD). Загрузка изображений на сервер. Возможность оставлять комментарии и т.д.',
    link: 'https://blogmern.netlify.app/',
    repolinkFront: 'https://github.com/DenisJet/blog-mern-front',
    repolinkBack: 'https://github.com/DenisJet/blog-mern-beck',
  },
  {
    id: 8,
    type: 'pet-проекты',
    name: 'Github Seasch',
    image: 'images/githubsearch.png',
    title: 'Поиск репозиториев на Гитхабе по имени пользователя.',
    description: 'TypeScript, React, Redux, Redux Toolkit, RTKQuery, Tailwind CSS. Axios.',
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
      'Семантическая, валидная, адаптивная, резиновая, кроссбраузерная вёрстка. БЭМ, SCSS, Gulp, SwiperJS. Оптимизация изображений.',
    opinion: 'Создание и разработка страниц сайта.',
    link: 'https://cleanhouse-ses.ru',
    repolinkFront: 'https://github.com/DenisJet/CleanHouse',
  },
  {
    id: 5,
    type: 'учебные',
    name: 'Большое путешествие',
    image: 'images/big-trip.png',
    title: 'Cовременный сервис для путешественников.',
    description: 'SPA на чистом JavaScript. ООП. MVP. REST Api',
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
    description: 'Использование библиотеки React. Styled-components, react hooks, react-router.',
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
      'Пользователям предоставлена возможность загружать свои фотографии или просматривать фотографии, загруженные ранее другими пользователями.',
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
      'Пользователям предоставляется возможность размещать объявления о своей недвижимости или просматривать уже размещённые объявления.',
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
      'Семантическая, валидная, адаптивная, резиновая, кроссбраузерная (Chrome, Firefox, Safari), PixelPerfect вёрстка. БЭМ, Sass, Gulp. Ретинизация графики. Адаптивность и оптимизация изображений. Использование сторонних библиотек Leaflet и noUiSlider.',
    opinion:
      'Итоговый учебный проект курса Фронтенд-разработчик от HTML Academy, за время реализации которого я научился базовым стандартам верстки. В проекте так же присутствует не много JavaScript, это мобильное меню сайта и слайдер в промо-блоке.',
    link: 'https://denisjet-drink2go.netlify.app/',
    repolinkFront: 'https://github.com/DenisJet/Drink2Go',
  },
];
