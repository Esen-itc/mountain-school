export const SUPPORTED_LANGS = ['ru', 'en']
export const DEFAULT_LANG = 'ru'

const COUNTRY_CODES = ['KG', 'KZ', 'RU', 'UZ', 'TJ', 'OTHER']
const COURSE_CODES = ['1', '2', '3', '4', '5', 'master']
const FORMAT_CODES = ['solo', 'team']

const zip = (codes, labels) =>
  codes.map((value, index) => ({ value, label: labels[index] }))

export const translations = {
  ru: {
    seo: {
      title: 'Горная школа — архитектурный конкурс СНГ 2026',
      description:
        'Международный конкурс для студентов-архитекторов СНГ. Спроектируйте начальную школу для горного села в Кыргызстане. Призовой фонд $5 000.',
      ogTitle: 'Горная школа — архитектурный конкурс СНГ 2026',
      ogDescription:
        'Конкурс для студентов СНГ. Школа для горного села в Кыргызстане. Жюри из Чикаго. Призовой фонд $5 000.',
    },
    nav: {
      about: 'О конкурсе',
      brief: 'Задание',
      prizes: 'Призы',
      timeline: 'Этапы',
      criteria: 'Оценка',
      jury: 'Жюри',
      format: 'Формат',
      faq: 'FAQ',
      register: 'Заявка',
    },
    common: {
      apply: 'Подать заявку',
      learnMore: 'Узнать больше',
      openMenu: 'Открыть меню',
      closeMenu: 'Закрыть меню',
      brandName: 'Горная школа',
      brandSub: 'СНГ · 2026',
    },
    hero: {
      meta: ['Архитектурный конкурс', 'Студенты СНГ', '2026'],
      title: 'Школа <em>в горах</em>,<br /> которую построят<br /> ваши идеи.',
      lead: 'Международный конкурс для студентов-архитекторов. Спроектируйте начальную школу для горного села в Кыргызстане. Жюри из Чикаго, призовой фонд $5 000 и шанс изменить жизнь целой общины.',
      card: {
        eyebrow: 'Architecture Competition',
        title: 'ГОРНАЯ ШКОЛА 2026',
        subtitle: 'Международный архитектурный конкурс',
        prizeLabel: 'ПРИЗОВОЙ ФОНД —',
        prizeAmount: '$5 000',
        deadlineLabel: 'Срок подачи работ:',
        deadlineDate: 'до 31 июля 2026',
        cta: 'Зарегистрироваться',
      },
    },
    about: {
      eyebrow: 'О конкурсе',
      title: 'Архитектура, <em>которая учит</em> и объединяет.',
      lead: 'Спроектируйте начальную школу для горного села в Кыргызстане — здание, которое служит детям днём и всей общине вечером.',
      body: 'Конкурс открыт для студентов и молодых архитекторов из стран СНГ. Мы ищем проекты, которые соединяют локальную традицию, современные технологии и реальную пользу для людей. Лучшие работы будут оценены международным жюри и опубликованы в профессиональных архитектурных изданиях.',
      items: {
        context: {
          title: 'Контекст',
          text: 'Высота 2 100 м, сложный рельеф, суровый климат и сейсмическая активность. Проект должен отвечать реальным условиям горного Кыргызстана.',
        },
        education: {
          title: 'Образование',
          text: 'Школа на 30–50 учеников 1–4 классов: светлые классы, библиотека, мастерская и пространство для игр на свежем воздухе.',
        },
        social: {
          title: 'Социальная роль',
          text: 'После уроков школа живёт дальше — лекции, встречи общины, культурные события. Это не просто здание, а центр села.',
        },
        jury: {
          title: 'Международное жюри',
          text: 'Практикующие архитекторы из Чикаго, преподаватели ведущих университетов и отраслевые эксперты оценят каждый проект лично.',
        },
      },
    },
    brief: {
      eyebrow: 'Задание',
      title: 'Проектное задание',
      quote:
        'Спроектируйте начальную школу на 30–50 учеников для горного села Кыргызстана. Площадь: 200–400 м². Локация — на выбор участника.',
      programTitle: 'Программа',
      program: [
        '2–3 классные комнаты (25–30 м²)',
        'Многофункциональный зал',
        'Кабинет учителя / администрация',
        'Открытое пространство / двор',
      ],
      submitTitle: 'Что сдавать',
      submit: [
        '1 планшет A1, горизонтальный, PDF',
        'Генплан + поэтажные планы',
        '1–2 визуализации (рендер / коллаж)',
        'Описание концепции (100–150 слов)',
      ],
    },
    prizes: {
      eyebrow: 'Призовой фонд',
      title: '$5 000 на <em>лучшие идеи</em> региона.',
      subtitle:
        'Победители получают денежные призы. Каждый участник — именной сертификат международного архитектурного конкурса, который можно включить в портфолио.',
      fundLabel: 'Общий призовой фонд',
      fundAmount: '$5 000',
      fundNote: 'Распределяется между тремя призовыми местами. Жюри также вправе присудить специальные поощрения.',
      list: [
        {
          title: 'Гран-при',
          amount: '$2 500',
        },
        {
          title: 'Второе место',
          amount: '$1 500',
        },
        {
          title: 'Третье место',
          amount: '$1 000',
        },
      ],
    },
    timeline: {
      eyebrow: 'Этапы',
      title: 'Пять шагов от идеи <em>до победы</em>.',
      subtitle:
        'Четыре месяца — достаточно, чтобы глубоко изучить место, выработать сильную концепцию и подготовить профессиональную подачу.',
      list: [
        {
          period: '01 — 15 мая 2026',
          title: 'Регистрация и старт',
          text: 'Регистрируйтесь, получайте техническое задание и детальные материалы о месте — карты, фото, данные о климате и рельефе.',
        },
        {
          period: '15 мая — 30 июня',
          title: 'Разработка концепции',
          text: 'Изучайте контекст, формируйте идею, консультируйтесь с менторами. Это главный творческий этап конкурса.',
        },
        {
          period: '01 — 31 июля',
          title: 'Финальная подача',
          text: 'Загрузите итоговые планшеты, пояснительную записку и визуализации в соответствии с требованиями технического задания.',
        },
        {
          period: '01 — 20 августа',
          title: 'Работа жюри',
          text: 'Международное жюри оценивает все работы по единым критериям, формирует шорт-лист и определяет победителей.',
        },
        {
          period: '05 сентября',
          title: 'Объявление победителей',
          text: 'Онлайн-церемония награждения, публикация всех работ .',
        },
      ],
    },
    criteria: {
      eyebrow: 'Система оценки',
      title: 'Как жюри <em>смотрит</em> на проекты.',
      subtitle:
        'Пять равных критериев — жюри оценивает каждый проект комплексно: от силы идеи до качества подачи.',
      list: [
        {
          score: '20',
          title: 'Концепция',
          description: 'Оригинальность идеи, связь с местом и культурным контекстом.',
        },
        {
          score: '20',
          title: 'Функция',
          description: 'Удобство планировки, соответствие образовательным требованиям.',
        },
        {
          score: '20',
          title: 'Ландшафт',
          description: 'Работа с рельефом, вписанность здания в природное окружение.',
        },
        {
          score: '20',
          title: 'Подача',
          description: 'Качество чертежей, визуализаций и пояснительной записки.',
        },
        {
          score: '20',
          title: 'Устойчивость',
          description: 'Энергоэффективность, выбор материалов, долговечность решений.',
        },
      ],
      caption: 'Каждый критерий оценивается по 20-балльной шкале. Максимальный итоговый балл — 100.',
    },
    jury: {
      eyebrow: 'Жюри',
      title: 'Кто <em>оценит</em> ваши идеи.',
      subtitle:
        'Практикующие архитекторы и преподаватели из Кыргызстана и США — каждый проект будет изучен лично.',
      list: [
        {
          photo: '/jury/anna-karimova.jpg',
          role: 'Организатор • Жюри',
          name: 'Анна Каримова',
          meta: 'Архитектор-партнёр, основатель Studio Karimova. Более 15 лет в проектировании общественных пространств.',
          city: 'Бишкек, Кыргызстан',
        },
        {
          photo: '/jury/david-marshall.jpg',
          role: 'Жюри',
          name: 'Дэвид Маршалл',
          meta: 'Старший архитектор, Skyline Architects (Чикаго). Специализация — устойчивая архитектура в сложных климатических условиях.',
          city: 'Чикаго, США',
        },
        {
          photo: '/jury/timur-aliev.jpg',
          role: 'Жюри',
          name: 'Тимур Алиев',
          meta: 'Доцент кафедры архитектуры КГУСТА. Исследователь традиционного кыргызского зодчества и современных интерпретаций.',
          city: 'Бишкек, Кыргызстан',
        },
      ],
    },
    format: {
      eyebrow: 'Формат участия',
      title: 'Один автор или <em>команда мечты</em>.',
      subtitle:
        'Участвуйте самостоятельно или соберите команду до трёх человек. Оба формата равноправны — побеждает лучшая идея.',
      items: {
        solo: {
          label: 'Индивидуально',
          title: 'Один автор',
          text: 'Полная авторская свобода. Идеально для тех, кто хочет реализовать собственное видение от начала до конца.',
          bullets: [
            'Один автор',
            'Один сертификат',
            'Доступна консультация ментора по запросу',
          ],
        },
        team: {
          label: 'Команда',
          title: '2 — 3 участника',
          text: 'Объедините разные компетенции: архитектор, инженер, дизайнер — вместе вы сильнее. До трёх участников.',
          bullets: [
            'От 2 до 3 авторов',
            'Именной сертификат каждому участнику',
            'Один участник назначается лидером команды',
          ],
        },
      },
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Частые <em>вопросы</em>.',
      subtitle:
        'Ответы на самые частые вопросы. Не нашли нужного — пишите на hello@mountainschool.kg.',
      list: [
        {
          q: 'Кто может участвовать?',
          a: 'Студенты архитектурных факультетов вузов стран СНГ (Кыргызстан, Казахстан, Россия, Узбекистан, Таджикистан и др.). Индивидуально или командой до 3 человек.',
        },
        {
          q: 'Сколько стоит участие?',
          a: 'Участие полностью бесплатное. Никаких взносов.',
        },
        {
          q: 'Что нужно сдать?',
          a: '1 планшет формата A1 (горизонтальный) в формате PDF. На планшете: генплан, поэтажные планы, фасады/разрезы, 1–2 визуализации, описание концепции (100–150 слов).',
        },
        {
          q: 'Можно ли участвовать командой?',
          a: 'Да, командой до 3 человек. Все участники команды должны быть студентами архитектурного факультета. Могут быть из разных вузов или стран.',
        },
        {
          q: 'На каком языке оформлять проект?',
          a: 'Планшет можно оформить на русском или английском языке.',
        },
        {
          q: 'Можно выбрать любую локацию?',
          a: 'Да, локация — на выбор участника. Это может быть реальное или вымышленное горное село в Кыргызстане. Главное — это горная местность.',
        },
        {
          q: 'Кто в жюри?',
          a: 'Практикующие архитекторы из Чикаго, США — с опытом проектирования жилых, общественных и коммерческих объектов. Подробнее — в разделе «Жюри».',
        },
        {
          q: 'Как получить приз?',
          a: 'Денежные призы переводятся победителям банковским переводом или через платёжные системы. Сертификаты отправляются всем участникам на email в формате PDF.',
        },
        {
          q: 'Можно использовать AI для рендеров?',
          a: 'Да, использование AI-инструментов для визуализаций разрешено. Однако планы, фасады и разрезы должны быть выполнены самостоятельно.',
        },
        {
          q: 'Можно участвовать, если я не из СНГ?',
          a: 'Конкурс ориентирован на студентов СНГ, но мы рассмотрим заявки из любой страны. Напишите нам.',
        },
      ],
    },
    register: {
      eyebrow: 'Регистрация',
      title: 'Подайте <em>заявку</em>.',
      subtitle:
        'Заполните форму — мы получим вашу заявку и свяжемся с вами в течение 3 рабочих дней.',
      note: 'Приём заявок открыт до 15 мая 2026 года. После регистрации вы получите техническое задание и все материалы о месте.',
      contactsLabel: 'Контакты',
      mailSubject: 'Заявка на конкурс «Горная школа 2026»',
      form: {
        fullName: { label: 'ФИО', placeholder: 'Иван Иванов' },
        email: { label: 'Email', placeholder: 'you@example.com' },
        contact: {
          label: 'Telegram / телефон',
          placeholder: '@username или +996…',
        },
        university: {
          label: 'Университет',
          placeholder: 'КГУСТА им. Н. Исанова',
        },
        country: { label: 'Страна' },
        course: { label: 'Курс' },
        format: { label: 'Формат участия' },
        teamMembers: {
          label: 'Участники команды',
          placeholder: 'ФИО участников через запятую',
        },
        selectPlaceholder: '— выберите —',
        submit: 'Отправить заявку',
        submitting: 'Готовим письмо…',
        retry: 'Попробовать снова',
        disclaimer:
          'Нажимая «Отправить заявку», вы соглашаетесь с обработкой персональных данных в рамках конкурса «Горная школа 2026».',
        errors: {
          fullName: 'Укажите ФИО',
          fullNameMin: 'Слишком короткое имя',
          email: 'Email обязателен',
          emailFormat: 'Неверный формат email',
          contact: 'Укажите способ связи',
          contactMin: 'Слишком короткое значение',
          university: 'Укажите университет',
          country: 'Выберите страну',
          course: 'Выберите курс',
          format: 'Выберите формат',
          team: 'Укажите участников команды',
        },
      },
      countries: zip(COUNTRY_CODES, [
        'Кыргызстан',
        'Казахстан',
        'Россия',
        'Узбекистан',
        'Таджикистан',
        'Другая',
      ]),
      courses: zip(COURSE_CODES, [
        '1 курс',
        '2 курс',
        '3 курс',
        '4 курс',
        '5 курс',
        'Магистратура',
      ]),
      formats: zip(FORMAT_CODES, ['Индивидуально', 'Команда 2–3']),
      success: {
        title: 'Письмо подготовлено',
        text: 'Почтовая программа открыта. Проверьте текст заявки и нажмите «Отправить», чтобы мы получили письмо.',
        again: 'Заполнить ещё одну заявку',
      },
      error: {
        title: 'Не удалось отправить',
        network:
          'Что-то пошло не так. Проверьте подключение и попробуйте ещё раз — или напишите нам на hello@mountainschool.kg.',
        unavailable:
          'Онлайн-приём заявок временно недоступен. Напишите нам на hello@mountainschool.kg — мы зарегистрируем заявку вручную.',
      },
    },
    footer: {
      tagline:
        'Архитектурный конкурс для студентов СНГ 2026. Проект начальной школы для горного села в Кыргызстане.',
      navTitle: 'Навигация',
      contactsTitle: 'Контакты',
      copyright: '© 2026 Горная школа. Все права защищены.',
      city: 'Бишкек · Кыргызстан',
    },
  },

  en: {
    seo: {
      title: 'Mountain School — CIS Architecture Contest 2026',
      description:
        'International architecture contest for CIS students. Design a primary school for a mountain village in Kyrgyzstan. $5,000 prize fund.',
      ogTitle: 'Mountain School — CIS Architecture Contest 2026',
      ogDescription:
        'Contest for CIS architecture students. School for a mountain village in Kyrgyzstan. Chicago jury. $5,000 prize fund.',
    },
    nav: {
      about: 'About',
      brief: 'Brief',
      prizes: 'Prizes',
      timeline: 'Timeline',
      criteria: 'Criteria',
      jury: 'Jury',
      format: 'Format',
      faq: 'FAQ',
      register: 'Apply',
    },
    common: {
      apply: 'Apply now',
      learnMore: 'Learn more',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      brandName: 'Mountain School',
      brandSub: 'CIS · 2026',
    },
    hero: {
      meta: ['Architectural contest', 'CIS students', '2026'],
      title: 'A school <em>in the mountains</em>,<br /> built by <br /> your ideas.',
      lead: 'An international contest for architecture students. Design a primary school for a mountain village in Kyrgyzstan. A jury from Chicago, a $5,000 prize fund, and a chance to change the life of an entire community.',
      card: {
        eyebrow: 'Architecture Competition',
        title: 'MOUNTAIN SCHOOL 2026',
        subtitle: 'International architecture competition',
        prizeLabel: 'PRIZE FUND —',
        prizeAmount: '$5,000',
        deadlineLabel: 'Submission deadline:',
        deadlineDate: 'until July 31, 2026',
        cta: 'Register now',
      },
    },
    about: {
      eyebrow: 'About the contest',
      title: 'Architecture <em>that teaches</em> and unites.',
      lead: 'Design a primary school for a mountain village in Kyrgyzstan — a place where children learn and the village lives.',
      body: 'The contest is open to students and young architects from CIS countries. We are looking for ideas that connect local tradition, contemporary architecture and real value for the community. The best works will be presented to an international jury and published in architectural media.',
      items: {
        context: {
          title: 'Context',
          text: 'A school in a mountain village at 2,100 m. Complex terrain, climate and seismic conditions — a true challenge for an architect.',
        },
        education: {
          title: 'Education',
          text: 'A building for 30–50 students of grades 1–4. Bright classrooms, a library, workshops and play spaces.',
        },
        social: {
          title: 'Social role',
          text: 'After classes the school becomes the heart of the village: lectures, events, community gatherings.',
        },
        jury: {
          title: 'International jury',
          text: 'Architects from Chicago, university professors and partners will review every project.',
        },
      },
    },
    brief: {
      eyebrow: 'Brief',
      title: 'The assignment',
      quote:
        'Design a primary school for 30–50 students in a mountain village in Kyrgyzstan. Area: 200–400 m². Location is up to the participant.',
      programTitle: 'Programme',
      program: [
        '2–3 classrooms (25–30 m²)',
        'Multi-purpose hall',
        'Teacher’s office / administration',
        'Open space / courtyard',
      ],
      submitTitle: 'Deliverables',
      submit: [
        '1 board A1, landscape, PDF',
        'Site plan + floor plans',
        '1–2 visualisations (render / collage)',
        'Concept description (100–150 words)',
      ],
    },
    prizes: {
      eyebrow: 'Prize fund',
      title: '$5,000 for the <em>best ideas</em> in the region.',
      subtitle:
        'Winners receive a cash prize. All participants receive a certificate of participation in the international architectural contest.',
      fundLabel: 'Total prize fund',
      fundAmount: '$5,000',
      fundNote: 'Distributed across three prize places and jury commendations.',
      list: [
        {
          title: 'Grand Prix',
          amount: '$2,500',
        },
        {
          title: 'Second place',
          amount: '$1,500',
        },
        {
          title: 'Third place',
          amount: '$1,000',
        },
      ],
    },
    timeline: {
      eyebrow: 'Timeline',
      title: 'Five steps from idea <em>to victory</em>.',
      subtitle:
        'The contest spans four months — enough time to study the context, develop a concept and prepare a complete submission.',
      list: [
        {
          period: 'May 1 — 15, 2026',
          title: 'Applications open',
          text: 'Participant registration, distribution of the brief and materials about the village.',
        },
        {
          period: 'May 15 — June 30',
          title: 'Concept development',
          text: 'Context analysis, idea generation, consultations with mentors and coordinators.',
        },
        {
          period: 'July 1 — 31',
          title: 'Final submission',
          text: 'Submission of final boards, descriptions and visualisations per the requirements.',
        },
        {
          period: 'August 1 — 20',
          title: 'Jury review',
          text: 'The international jury evaluates the works against the criteria and forms a shortlist.',
        },
        {
          period: 'September 5',
          title: 'Winners announced',
          text: 'Online ceremony, publication of results and invitation of finalists to Bishkek.',
        },
      ],
    },
    criteria: {
      eyebrow: 'Evaluation system',
      title: 'How the jury <em>looks at</em> projects.',
      subtitle:
        'Five equal criteria — from concept to sustainability. Each weighs the same in the final score.',
      list: [
        { score: '20', title: 'Concept' },
        { score: '20', title: 'Function' },
        { score: '20', title: 'Landscape' },
        { score: '20', title: 'Presentation' },
        { score: '20', title: 'Sustainability' },
      ],
      caption: 'Each criterion is worth 20 points. Maximum — 100.',
    },
    jury: {
      eyebrow: 'Jury',
      title: 'Who will <em>review</em> your ideas.',
      subtitle:
        'Architects and educators who will read every submission carefully and select the strongest projects.',
      list: [
        {
          photo: '',
          role: 'Organizer • Jury',
          name: 'Anna Karimova',
          meta: 'Partner architect, Studio Karimova',
          city: 'Bishkek, Kyrgyzstan',
        },
        {
          photo: '',
          role: 'Jury',
          name: 'David Marshall',
          meta: 'Senior architect, Skyline Architects',
          city: 'Chicago, USA',
        },
        {
          photo: '',
          role: 'Jury',
          name: 'Timur Aliev',
          meta: 'Associate professor of architecture, KSUCTA',
          city: 'Bishkek, Kyrgyzstan',
        },
      ],
    },
    format: {
      eyebrow: 'Participation format',
      title: 'A solo author or <em>a dream team</em>.',
      subtitle:
        'The contest is open both for individual participation and for teams of up to three. Choose the format that suits you best.',
      items: {
        solo: {
          label: 'Solo',
          title: 'A single author',
          text: 'Full creative freedom. A good fit for students ready to take ownership and develop their own voice.',
          bullets: [
            'One author',
            'One certificate',
            'Optional mentor consultation',
          ],
        },
        team: {
          label: 'Team',
          title: '2 — 3 members',
          text: 'Work in a team of up to three. Suits cross-disciplinary projects: architect + engineer + designer.',
          bullets: [
            '2 to 3 authors',
            'Certificates for everyone',
            'One contact team lead',
          ],
        },
      },
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Frequently <em>asked</em> questions.',
      subtitle:
        'The essentials in short. If you can’t find the answer — write to us and we’ll help.',
      list: [
        {
          q: 'Who can participate?',
          a: 'Students of architectural faculties from CIS universities (Kyrgyzstan, Kazakhstan, Russia, Uzbekistan, Tajikistan and others). Individually or in teams of up to 3 people.',
        },
        {
          q: 'How much does it cost to participate?',
          a: 'Participation is completely free. No fees.',
        },
        {
          q: 'What do I need to submit?',
          a: '1 A1 panel (landscape orientation) as a PDF. The panel must include: site plan, floor plans, façades/sections, 1–2 visualizations, concept description (100–150 words).',
        },
        {
          q: 'Can I participate in a team?',
          a: 'Yes, in a team of up to 3 people. All team members must be students of an architecture faculty. They can be from different universities or countries.',
        },
        {
          q: 'In which language should the project be prepared?',
          a: 'The panel can be prepared in Russian or English.',
        },
        {
          q: 'Can I choose any location?',
          a: 'Yes, the location is up to the participant. It can be a real or imagined mountain village in Kyrgyzstan. The key requirement is mountain terrain.',
        },
        {
          q: 'Who is on the jury?',
          a: 'Practicing architects from Chicago, USA — with experience designing residential, public and commercial projects. More in the “Jury” section.',
        },
        {
          q: 'How do I receive the prize?',
          a: 'Cash prizes are transferred to winners via bank transfer or payment systems. Certificates are sent to every participant by email as a PDF.',
        },
        {
          q: 'Can I use AI for renders?',
          a: 'Yes, AI tools for visualizations are allowed. However, plans, façades and sections must be done by you.',
        },
        {
          q: 'Can I participate if I’m not from the CIS?',
          a: 'The contest is focused on CIS students, but we will consider applications from any country. Write to us.',
        },
      ],
    },
    register: {
      eyebrow: 'Registration',
      title: 'Submit your <em>application</em>.',
      subtitle:
        'Fill in the form, and the site will prepare an application email in your mail app.',
      note: 'Review the prepared email and click Send in your mail client.',
      contactsLabel: 'Contacts',
      mailSubject: 'Application for Mountain School 2026',
      form: {
        fullName: { label: 'Full name', placeholder: 'John Smith' },
        email: { label: 'Email', placeholder: 'you@example.com' },
        contact: {
          label: 'Telegram / phone',
          placeholder: '@username or +996…',
        },
        university: {
          label: 'University',
          placeholder: 'KSUCTA',
        },
        country: { label: 'Country' },
        course: { label: 'Year' },
        format: { label: 'Participation format' },
        teamMembers: {
          label: 'Team members',
          placeholder: 'Full names, comma separated',
        },
        selectPlaceholder: '— select —',
        submit: 'Open email',
        submitting: 'Preparing email…',
        retry: 'Try again',
        disclaimer:
          'By clicking «Open email» you agree to the processing of personal data within the «Mountain School 2026» contest.',
        errors: {
          fullName: 'Please enter your full name',
          fullNameMin: 'Name is too short',
          email: 'Email is required',
          emailFormat: 'Invalid email format',
          contact: 'Please provide a contact method',
          contactMin: 'Value is too short',
          university: 'Please enter your university',
          country: 'Please choose a country',
          course: 'Please choose a year',
          format: 'Please choose a format',
          team: 'Please list team members',
        },
      },
      countries: zip(COUNTRY_CODES, [
        'Kyrgyzstan',
        'Kazakhstan',
        'Russia',
        'Uzbekistan',
        'Tajikistan',
        'Other',
      ]),
      courses: zip(COURSE_CODES, [
        'Year 1',
        'Year 2',
        'Year 3',
        'Year 4',
        'Year 5',
        'Master’s',
      ]),
      formats: zip(FORMAT_CODES, ['Solo', 'Team 2–3']),
      success: {
        title: 'Email prepared',
        text: 'Your mail app has opened. Review the application text and click Send so we receive the email.',
        again: 'Fill another application',
      },
      error: {
        title: 'Could not submit',
        network:
          'Something went wrong. Check your connection and try again — or email us at hello@mountainschool.kg.',
        unavailable:
          'Online submissions are temporarily unavailable. Please email hello@mountainschool.kg and we will register your application manually.',
      },
    },
    footer: {
      tagline:
        'An architectural contest for CIS students 2026. A primary school project for a mountain village in Kyrgyzstan.',
      navTitle: 'Navigation',
      contactsTitle: 'Contacts',
      copyright: '© 2026 Mountain School. All rights reserved.',
      city: 'Bishkek · Kyrgyzstan',
    },
  },
}
