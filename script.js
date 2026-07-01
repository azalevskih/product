/* ============================================================
   SCRIPT.JS — логика портфолио

   ЧТО ЗДЕСЬ РЕДАКТИРОВАТЬ:
   Только массив PROJECTS ниже — тексты и фото для страниц проектов.

   Остальное (скролл, открытие/закрытие) трогать не нужно.
============================================================ */


const PROJECTS = [

  // ── ПРОЕКТ 0 ── FINCORP ──────────────────────────────────
  {
    id: 0,
    bannerColor: '#7F77DD',
    bannerImg: 'assets/FINCORP_BIG.png',
    lightBanner: true,
    images: [],

    context:  'FINCORP — банковская экосистема нового поколения, которая объединяет финансовое управление (счета, расходы, накопления), ИИ-советника, поведенческую аналитику и эмоциональный UX прогресса. Цель продукта — превратить управление деньгами из реактивного процесса в управляемую систему достижения целей.',

    problem:  'Банковские продукты ориентированы на рост депозитов, но редко показывают пользователю понятный прогресс в достижении его финансовых целей. В результате накопления воспринимаются как абстрактные цифры, а не как движение к конкретному результату. Это усиливает финансовую тревожность и снижает мотивацию к активному управлению деньгами, что приводит к откладыванию инвестиционных решений и пассивному поведению пользователей.',

    solution: 'FINCORP превращает финансовое планирование из сухого алгоритмического процесса в помощника по созданию капитала, формируя финансовые привычки и эмоциональный отклик.',

    competitorAnalysis: 'Продукт выигрывает у классических финансовых трекеров и простых ИИ-инструментов за счёт объединения глубокой аналитики с эмпатичным ИИ-коучингом, который превращает финансовое планирование из рутинного учёта трат в эмоционально комфортный путь к достижению конкретных целей.',
    competitorImage: '',

    research: {
      userProblems: [
        'Финансовая тревожность: отсутствие финансовой подушки повышает уровень стресса и снижает готовность к инвестиционным решениям.',
        'Психологический барьер: сложная финансовая терминология (акции, облигации и др.) затрудняет понимание продуктов и снижает их использование.',
      ],
      valueHypotheses: [
        'Прозрачность как фактор доверия: пользователи охотнее принимают автоматизированные решения, если им понятна логика действий системы.',
        'Автоматизация как снижение усилий: встроенные механики накоплений уменьшают необходимость ручного управления и повышают регулярность финансовых действий.',
      ],
      behaviorHypotheses: [
        'Пользователи склонны к более стабильному поведению при наличии микрошагов вместо крупных финансовых решений.',
        'Финансовые решения часто принимаются нерегулярно и зависят от текущего эмоционального состояния.',
        'Персонализация под жизненные цели (жильё, путешествия) повышает вероятность регулярного взаимодействия с продуктом.',
      ],
      insights: [
        'Эмоциональный разрыв: пользователи с разным уровнем дохода демонстрируют схожую финансовую тревожность, что указывает на важность снижения когнитивной нагрузки, а не оптимизации цифр.',
        'Финансовый язык как барьер: сложная терминология сама по себе становится причиной отказа от использования инвестиционных инструментов.',
        'Микро-накопления как поведенческий паттерн: небольшие регулярные действия воспринимаются как более контролируемые и устойчивые, чем редкие крупные решения.',
        'Контекст важнее функций: ценность продукта определяется не набором инструментов, а способностью поддерживать пользователя в конкретной жизненной ситуации.',
      ],
    },

    jtbd: 'Поскольку FINCORP ориентирован на широкую аудиторию, сегментация по возрасту или социально-демографическим признакам была недостаточно информативна. Поэтому для исследования пользователей использовался подход Jobs To Be Done (JTBD), который позволяет выявить реальные задачи, мотивы и контекст принятия финансовых решений. Общей чертой всех профилей является потребность в обучении в рамках приложения, чтобы помочь им преодолеть разрыв между их текущей ситуацией и финансовыми целями.',
    jtbdImage: '',
    jtbdGroups: [
      {
        title: 'Финансовая подушка / безопасность',
        description: 'В основном сосредоточены на создании финансовой безопасности, преодолении недостатка знаний и обучении тому, как регулярно откладывать небольшие суммы.',
      },
      {
        title: 'Рост капитала / Инвестиции',
        description: 'Уже зарабатывают больше и сосредоточены на эффективности своих инвестиционных инструментов для приумножения своего богатства.',
      },
    ],

    cjm: 'Переход от «Стресса и Тревоги» к «Контролю». Было: Елена работает аналитиком со средним доходом, понимает необходимость покупки жилья, но чувствует неопределённость и тревогу из-за отсутствия системы накоплений. Стало: благодаря приложению она переходит в состояние спокойной уверенности — ИИ-помощник позволяет ей не просто «откладывать», а видеть прогресс в достижении конкретной, амбициозной цели (квартира), превращая финансовое планирование из рутины в понятный творческий процесс. Пользователь переходит от фрагментированного управления деньгами к системному накоплению на конкретную цель с высокой степенью предсказуемости результата.',
    cjmImage: '',

    userFlow: 'Путь пользователя: регистрация → онбординг с эмоциональным триггером → верификация → постановка целей на основе ИИ-диагностики → персональный план → ежедневный поведенческий цикл → долгосрочное удержание через ИИ-инсайты, повторные цели и финансовый уровень.',
    userflowImage: '',

    designSystem: 'Cyber-Minimalism с акцентом на игривый, дружелюбный ИИ-контекст.',
    uikitImage: '',

    prototype: 'Прототип проведён через сценарий первого знакомства пользователя с приложением: от выбора цели до распределения бюджета — с поддержкой ИИ-помощника на каждом шаге.',
    prototypeImage: '',

    results:  'Gamification и progress feedback реально влияют на savings behavior. Визуализация целей улучшает финансовое здоровье и удовлетворённость пользователей. По результатам, основанным на исследовании аналогичных банковских приложений в других странах: вовлечённость +35%, достижение целей +28%, отток (churn) −22%, рост активов под управлением (AUM) +15%.',

    references: [
      { title: 'Visualizing Goals Study', url: 'https://www.prnewswire.com/news-releases/visualizing-goals-influences-financial-health-and-happiness-study-finds-300207028.html' },
      { title: 'Gamification Finance (Yahoo)', url: 'https://finance.yahoo.com/news/gamification-finances-may-help-people-213931282.html' },
      { title: 'Fintech Gamification Article', url: 'https://www.11fs.com/article/gamification-in-fintech-financial-literacy-or-just-engagement' },
      { title: 'Budgeting Behavior Study', url: 'https://www.alkami.com/resources/data-bites/charts/fintech-budgeting-savings-app-behavior' }
    ],

    tags:     'UX Research, Product Design, AI, Fintech, Figma',
  },

  // ── ПРОЕКТ 1 ── Core Treasury ────────────────────────────────
  {
    id: 1,
    bannerColor: '#1D9E75',
    bannerImg: 'assets/CORE_BIG.png',
    id: 1,

  images: [
    'assets/15.png',
    'assets/Frame 2131328701.png',
    'assets/6.png'
  ],

  context: 'Core Treasury — корпоративная treasury-платформа для средних и крупных компаний, которые управляют ликвидностью через множество банков, валют и юридических лиц. Продукт решает проблему отсутствия единого, актуального и доверенного источника данных о деньгах компании.',

  problem: 'Казначейские подразделения управляют ликвидностью через десятки несвязанных источников: ERP, банки, Excel и ручную отчётность. Данные фрагментированы, прогнозы не совпадают с реальностью, кассовые разрывы выявляются постфактум, а решения принимаются в кризис.',

  solution: 'Core Treasury объединяет мониторинг ликвидности, прогнозирование и сценарное моделирование в единый операционный контур, превращая treasury из отчётной функции в центр управления ликвидностью.',

  competitorAnalysis: 'Kyriba — лидер рынка, но перегруженный UX\nGTreasury — сильное прогнозирование, высокий порог входа\nSAP Treasury — мощная интеграция, слабый UX\nTIS — хорошая visibility, сложная настройка',

  competitorImage: '',

  research: {
    userProblems: [
      'Боль не в анализе, а в сборе и верификации данных',
      'Фрагментированность источников и ручная очистка данных',
      'Низкое доверие к прогнозам из-за расхождения с реальностью',
      'Пики стресса на payroll, налоги и крупные выплаты'
    ],
    valueHypotheses: [
      'Единый источник истины повышает доверие к финансовым данным',
      'Сценарное моделирование снижает количество кризисных решений'
    ],
    behaviorHypotheses: [
      'Решения принимаются под давлением времени и риска',
      'Пользователи стремятся к минимизации ручной работы'
    ],
    insights: [
      'Основная нагрузка — не аналитика, а сбор и проверка данных',
      'Каждый банк воспринимается как отдельная система без единого слоя',
      'Отчётность не решает проблему оперативного контроля ликвидности',
      'Переход ценности — от отчетности к прогнозированию и контролю'
    ]
  },

  jtbd: 'Пользователи нанимают продукт для контроля ликвидности, предотвращения кассовых разрывов и получения единого источника финансовой правды в реальном времени.',

  jtbdGroups: [
    {
      title: 'Финансовый директор',
      description: 'Нужен быстрый обзор ликвидности и стратегическая картина'
    },
    {
      title: 'Казначей',
      description: 'Операционное управление платежами и прогнозами'
    },
    {
      title: 'Риск-менеджер',
      description: 'Контроль прозрачности и регуляторный аудит'
    }
  ],

  cjm: 'Переход от реактивного контроля к превентивному управлению ликвидностью через единый источник данных и сценарное моделирование.',

  userFlow: 'Регистрация → подключение банков → консолидация данных → мониторинг ликвидности → сценарное моделирование → принятие решений',

  designSystem: 'High-density financial UI system с акцентом на скорость считывания и семантику рисков',

  prototype: 'Прототип охватывает полный цикл работы казначея: мониторинг, операции, аналитика, сценарии и отчёты.',

  results: '−60–70% время анализа ликвидности\n×3 ускорение выявления кассовых разрывов\n−80% ручной сверки данных\n−50% времени подготовки отчётности',

  references: [
    { title: 'Liquidity Risk как стратегический фактор (2025)', url: 'https://www.advisorperspectives.com/articles/2025/05/13/liquidity-risk-2025-strategic-priority-not-concern' },
    { title: 'Стратегии управления ликвидностью в компаниях (2025–2026)', url: 'https://www.sciencedirect.com/science/article/abs/pii/S1544612325007202' },
    { title: 'ALM (Asset-Liability Management) как ядро liquidity risk', url: 'https://www.bankingsupervision.europa.eu/press/speeches/date/2025/html/ssm.sp250701~8a5ab7b2cc.en.html' },
    { title: 'Новые quantitative модели (2026)', url: 'https://arxiv.org/abs/2603.09164' },
    { title: 'Системные риски и cross-market liquidity (2025)', url: 'https://habr.com/ru/articles/808423/' },
    { title: 'Модель взаимодействия ликвидности и платежеспособности (Bank of England, 2025)', url: 'https://www.bankofengland.co.uk/working-paper/2025/measuring-the-stability-of-the-banking-system' },
    { title: 'Digital banking и ликвидность (2025)', url: 'https://wjarr.com/sites/default/files/fulltext_pdf/WJARR-2025-0576.pdf' },
  ],

  tags: 'UX, Product Design, Fintech, Treasury, Enterprise SaaS'
  },

  // ── ПРОЕКТ 2 ── Ai PM ───────────────────────────────────
  {
    id: 2,
    bannerColor: '#BA7517',
    bannerImg: 'assets/PM_BIG.png',
    images: [],

  images: [
    'assets/Frame 148.png',
    'assets/Frame 1.png'
  ],

  context: 'AI-ассистент внутри корпоративной платформы с доступом к проектным данным. Решает проблему долгого поиска информации и перегрузки Project Manager, предоставляя быстрый доступ к релевантным данным и статусам задач.',

  problem: 'Project Manager работает с десятками задач одновременно, теряет контекст, тратит время на коммуникацию и ручной сбор статусов. Информация распределена между Jira, Notion и Slack, из-за чего возникают задержки, ошибки и перегрузка.',

  solution: 'AI-ассистент становится единым интерфейсом для получения информации по проекту, автоматизирует ответы, сбор статусов, выявление рисков и формирование отчетов.',

  competitorAnalysis: 'Jira — мощная, но перегруженная\nNotion — гибкая, но не структурирует процессы\nAsana — удобная, но слабая аналитика\nSlack — коммуникация без контекста',

  competitorImage: '',

  research: {
    userProblems: [
      'Перегруз коммуникацией и постоянные переключения между системами',
      'Отсутствие единого источника проектного контекста',
      'Ручной сбор статусов задач',
      'Потеря договорённостей между командами'
    ],
    valueHypotheses: [
      'Единый AI-слой снижает нагрузку на PM',
      'Автоматические ответы уменьшают количество повторяющихся вопросов'
    ],
    behaviorHypotheses: [
      'Пользователи часто ищут информацию вместо выполнения задач',
      'Команды зависят от PM для получения статусов'
    ],
    insights: [
      'PM становится узким горлышком коммуникации',
      'Информация распределена между несколькими системами',
      'Большая часть вопросов повторяется',
      'Контекст проекта часто держится в голове одного человека'
    ]
  },

  jtbd: 'Пользователь хочет быстро понимать состояние проекта и получать ответы без постоянного поиска информации и участия PM.',

  jtbdGroups: [
    {
      title: 'Сотрудники',
      description: 'Получение статусов задач, дедлайнов и документации без PM'
    },
    {
      title: 'Project Manager',
      description: 'Автоматизация отчетности, контроль рисков и снижение нагрузки'
    }
  ],

  cjm: 'Переход от ручного поиска информации к единому AI-интерфейсу, который агрегирует проектный контекст и снижает коммуникационную нагрузку.',

  userFlow: 'Вопрос → AI поиск → агрегация данных → ответ в контексте проекта → обновление статуса',

  designSystem: 'AI-first интерфейс с акцентом на контекст, статусность и автоматические подсказки',

  prototype: 'Прототип показывает сценарии: запрос статуса, выявление блокеров, автоматические уведомления и отчёты.',

  results: '−40% время поиска информации\n×1.8 ускорение работы команды\n−40% обращений к PM\n+50% скорость обновления статусов',

  references: [
    { title: 'MIT + Stanford', url: 'https://www.nber.org/papers/w31161?utm_source' },
    { title: 'Microsoft + NBER (2025)', url: 'https://www.nber.org/papers/w33795?utm_source=' },
    { title: 'GitHub Copilot', url: 'https://arxiv.org/abs/2410.02091?utm_source' },
  ],

  tags: 'AI, Product Design, UX Research, Enterprise, SaaS'
  },

  // PROJECT 3 HIDDEN
  /*
  {
    id: 3,
    bannerColor: '#185FA5',
    bannerImg: '',
    images: [],
    context: 'Исследование и внедрение AI-инструментов в продуктовый дизайн-процесс. Интеграция Claude Code и MCP с Figma для генерации и переноса UI-решений.',
    problem: 'Традиционные процессы дизайна требуют много ручной работы на этапах исследования, прототипирования и генерации вариантов.',
    solution: 'Внедрение AI-ассистентов (GPT, Claude, Gemini, Midjourney, ComfyUI) на всех этапах. MCP-протокол для прямой работы с Figma из терминала.',
    results: 'Сокращение цикла от концепции до тестируемого решения. Ускорение итераций в 3 раза при производстве визуальных решений.',
    tags: 'AI, Claude Code, MCP, Figma, Workflow',
  },
  */

  // ── ПРОЕКТ 4 ── Drone ────────────────────────────
  {
    id: 4,
    bannerColor: '#993556',
    bannerImg: 'assets/DRONE_BIG.png',

  images: [
    'assets/frame152.png',
    'assets/frame153.png'
  ],

  context: 'DroneDrop — система беспилотной доставки, которая позволяет доставлять еду и товары за 15–30 минут за счёт использования автономных дронов и локальной логистики последней мили.',

  problem: 'Современная доставка ограничена последней милей: еда приезжает с задержками, теряет температуру, зависит от пробок и курьеров, а бизнес несёт высокие операционные издержки и теряет качество сервиса.',

  solution: 'DroneDrop заменяет курьерскую модель автономной дрон-доставкой с drop-pod системой, обеспечивая быструю, предсказуемую и контролируемую доставку без человеческого фактора.',

  competitorAnalysis: 'Курьерские сервисы — медленные и зависят от трафика\nСамовывоз — требует участия пользователя\nДроны — высокая скорость и контроль температуры, но требуют инфраструктуры',

  competitorImage: '',

  research: {
    userProblems: [
      'Долгое и непредсказуемое время доставки',
      'Остывание еды к моменту получения',
      'Зависимость от пробок и курьеров',
      'Невозможность быстрого получения еды в момент голода'
    ],
    valueHypotheses: [
      'Скорость доставки напрямую влияет на удовлетворённость пользователя',
      'Контроль температуры повышает perceived quality продукта'
    ],
    behaviorHypotheses: [
      'Пользователи готовы платить за скорость и предсказуемость',
      'В критические моменты голода решения принимаются импульсивно'
    ],
    insights: [
      'Последняя миля — ключевая точка деградации качества доставки',
      'Пробки и курьеры создают основную вариативность времени доставки',
      'Пользователь ценит не только скорость, но и предсказуемость',
      'Автоматизация логистики снижает когнитивную нагрузку выбора'
    ]
  },

  jtbd: 'Пользователь хочет получить готовую горячую еду в минимальное время ожидания, без зависимости от курьеров и внешних задержек.',

  jtbdGroups: [
    {
      title: 'Занятые специалисты',
      description: 'Нужно быстро получить еду без отвлечения от работы'
    },
    {
      title: 'Студенты',
      description: 'Критична скорость и доступность еды в момент голода'
    },
    {
      title: 'Жители плотных городов',
      description: 'Пробки и задержки делают курьерскую доставку нестабильной'
    }
  ],

  cjm: 'Пользователь заказывает еду → ресторан готовит → дрон забирает заказ → доставка по оптимальному маршруту → получение через drop-pod или точку выдачи.',

  userFlow: 'Заказ → подтверждение ресторана → запуск дрона → маршрут доставки → уведомление пользователя → получение заказа',

  designSystem: 'Futuristic logistics UI с акцентом на статус доставки в реальном времени и визуализацию маршрута дрона',

  prototype: 'Прототип демонстрирует сценарии доставки, включая успешную доставку, задержки, fallback-сценарии и работу drop-pod системы.',

  results: 'Снижение time-to-food, повышение температуры доставки, рост повторных заказов и снижение стоимости последней мили',

  tags: 'UX, Product Design, Logistics, AI, Drone Delivery'
  },

];


/* ============================================================
   ГОРИЗОНТАЛЬНЫЙ СКРОЛЛ В ЗОНЕ ПРОЕКТОВ
   (не редактировать)
============================================================ */
const wrapper = document.getElementById('projects-wrapper');
const track   = document.getElementById('projects-track');
let hPos = 0;

function maxScroll() {
  const wrapperEl = document.querySelector('.projects-track-wrapper');
  return track.scrollWidth - wrapperEl.clientWidth + 48;
}

wrapper.addEventListener('wheel', (e) => {
  const atStart = hPos <= 0;
  const atEnd   = hPos >= maxScroll();

  if ((e.deltaY > 0 && !atEnd) || (e.deltaY < 0 && !atStart)) {
    e.preventDefault();
    hPos = Math.max(0, Math.min(maxScroll(), hPos + e.deltaY * 1.2));
    track.style.transform = `translateX(-${hPos}px)`;
  }
}, { passive: false });

// Тач-скролл (мобильные)
let tY = 0;
wrapper.addEventListener('touchstart', e => { tY = e.touches[0].clientY; }, { passive: true });
wrapper.addEventListener('touchmove', e => {
  const dy = tY - e.touches[0].clientY;
  const atStart = hPos <= 0;
  const atEnd   = hPos >= maxScroll();

  if ((!atEnd && dy > 0) || (!atStart && dy < 0)) {
    e.preventDefault();
    hPos = Math.max(0, Math.min(maxScroll(), hPos + dy));
    track.style.transform = `translateX(-${hPos}px)`;
    tY = e.touches[0].clientY;
  }
}, { passive: false });


/* ============================================================
   НАВИГАЦИЯ — смена цвета при скролле
   (не редактировать)

   Два отдельных слушателя:
   1. Скролл главной страницы (window)
   2. Скролл ВНУТРИ страницы проекта (#project-overlay имеет
      собственный скролл и не считается частью window-скролла)
============================================================ */
const mainNav = document.getElementById('main-nav');
const projectOverlayEl = document.getElementById('project-overlay');

window.addEventListener('scroll', () => {
  mainNav.classList.toggle('scrolled', window.scrollY > 10);
});

projectOverlayEl.addEventListener('scroll', () => {
  mainNav.classList.toggle('scrolled', projectOverlayEl.scrollTop > 10);
});


function openProject(id) {
  id = Number(id);
  const p = PROJECTS.find(x => x.id === id);

  if (!p) {
    console.error('Project not found:', id);
    return;
  }

  const cardTitle =
    document.querySelector(`.project-card[data-id="${id}"] .card-title`)
    ?.textContent || 'Project';

  const banner = document.getElementById("proj-banner");
  banner.style.background = p.bannerColor;

  const bg = document.getElementById("proj-banner-bg");
  bg.style.backgroundImage = p.bannerImg ? `url('${p.bannerImg}')` : "none";

  const tagsHtml = p.tags
    ? (Array.isArray(p.tags) ? p.tags : p.tags.split(","))
        .map(tag => `<span class="tag">${tag.trim()}</span>`)
        .join("")
    : "";

  function image(src) {
    if (!src) return "";
    return `
      <div class="proj-media">
        <img src="${src}" alt="">
      </div>
    `;
  }

  function section(title, text) {
    if (!text) return "";
    return `
      <div class="proj-section">
        <h3>${title}</h3>
        <p>${text}</p>
      </div>
    `;
  }

  let html = "";

  html += section("Контекст", p.context);
  html += section("Проблема", p.problem);
  html += section("Решение", p.solution);
  html += section("Анализ конкурентов", p.competitorAnalysis);
  html += image(p.competitorImage);

  if (p.research) {
  html += `
    <div class="proj-section">
      <h3>Исследование и инсайты</h3>

      <div class="research-block">
        <h4>Проблемы</h4>
        <ul>
          ${p.research.userProblems.map(item => `<li>${item}</li>`).join("")}
        </ul>
      </div>

      <div class="research-block">
        <h4>Гипотезы ценности</h4>
        <ul>
          ${p.research.valueHypotheses.map(item => `<li>${item}</li>`).join("")}
        </ul>
      </div>

      <div class="research-block">
        <h4>Поведенческие гипотезы</h4>
        <ul>
          ${p.research.behaviorHypotheses.map(item => `<li>${item}</li>`).join("")}
        </ul>
      </div>

      <div class="research-block">
        <h4>Инсайты</h4>
        <ul>
          ${p.research.insights.map(item => `<li>${item}</li>`).join("")}
        </ul>
      </div>
    </div>
  `;
}

  html += section("JTBD", p.jtbd);
  html += image(p.jtbdImage);

  if (p.jtbdGroups) {
    html += `
      <div class="proj-section">
        <h3>Основные группы пользователей</h3>

        ${p.jtbdGroups.map(group => `
          <div style="margin-bottom:30px">
            <h4>${group.title}</h4>
            <p>${group.description}</p>
          </div>
        `).join("")}

      </div>
    `;
  }

  html += section("Customer Journey Map", p.cjm);
  html += image(p.cjmImage);

  html += section("User Flow", p.userFlow);
  html += image(p.userflowImage);

  html += section("Design System", p.designSystem);
  html += image(p.uikitImage);

  html += section("Прототип", p.prototype);
  html += image(p.prototypeImage);

  if (p.images) {
    p.images.forEach(src => {
      html += image(src);
    });
  }

  html += section("Результаты", p.results);

  if (p.references) {
  html += `
    <div class="proj-section">
      <h3>Источники</h3>
      <ul>
        ${p.references.map(link => `
          <li>
            <a href="${link.url}" target="_blank">
              ${link.title}
            </a>
          </li>
        `).join("")}
      </ul>
    </div>
  `;
}

  if (tagsHtml) {
    html += `
      <div class="proj-tags">
        ${tagsHtml}
      </div>
    `;
  }

  document.getElementById("proj-body").innerHTML = html;

  document.getElementById("project-overlay").classList.add("open");
  document.body.style.overflow = "hidden";

  // Открыта страница проекта: показываем "Назад" в навигации, сбрасываем прозрачность
  const navEl = document.getElementById("main-nav");
  navEl.classList.add("project-open");
  navEl.classList.remove("scrolled");
  navEl.classList.toggle("light-banner", !!p.lightBanner);
}

function closeProject() {
  document.getElementById("project-overlay").classList.remove("open");
  document.body.style.overflow = "";

  // Вернулись на главную: убираем "Назад", восстанавливаем нав по прокрутке страницы
  const navEl = document.getElementById("main-nav");
  navEl.classList.remove("project-open");
  navEl.classList.remove("light-banner");
  navEl.classList.toggle("scrolled", window.scrollY > 10);
}
