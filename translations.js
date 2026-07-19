/* ============================================================
   TRANSLATIONS_EN — английские версии длинных текстовых полей
   проектов (context, problem, solution, research, jtbd, cjm,
   userFlow, designSystem, prototype, results, references и т.д.)

   Ключ верхнего уровня — id проекта из массива PROJECTS.
   Если поля для проекта/языка нет — код в script.js автоматически
   покажет русский оригинал (fallback), сайт не сломается.

   SECTION_TITLES — переводы заголовков блоков ("Контекст",
   "Проблема" и т.д.), которые раньше были захардкожены на русском
   прямо в функции openProject().
============================================================ */

const SECTION_TITLES = {
  context:        { ru: 'Контекст',                          en: 'Context' },
  problem:        { ru: 'Проблема',                          en: 'Problem' },
  solution:       { ru: 'Решение',                           en: 'Solution' },
  competitors:    { ru: 'Анализ конкурентов',                en: 'Competitor Analysis' },
  research:       { ru: 'Исследование и инсайты',            en: 'Research & Insights' },
  userProblems:   { ru: 'Проблемы',                          en: 'Problems' },
  valueHyp:       { ru: 'Гипотезы ценности',                 en: 'Value Hypotheses' },
  behaviorHyp:    { ru: 'Поведенческие гипотезы',            en: 'Behavior Hypotheses' },
  insights:       { ru: 'Инсайты',                           en: 'Insights' },
  jtbd:           { ru: 'JTBD',                              en: 'JTBD' },
  userGroups:     { ru: 'Основные группы пользователей',     en: 'Key User Groups' },
  cjm:            { ru: 'Customer Journey Map',              en: 'Customer Journey Map' },
  keyScenarios:   { ru: 'Ключевые сценарии',                 en: 'Key Scenarios' },
  userFlow:       { ru: 'User Flow',                         en: 'User Flow' },
  purchaseDefault:{ ru: 'Сценарий: Пользователь планирует дорогую покупку', en: 'Scenario: User Plans an Expensive Purchase' },
  designSystem:   { ru: 'Design System',                     en: 'Design System' },
  prototype:      { ru: 'Прототип',                          en: 'Prototype' },
  results:        { ru: 'Результаты',                        en: 'Results' },
  sources:        { ru: 'Источники',                         en: 'Sources' },
  figmaLink:      { ru: 'Смотреть в Figma →',                en: 'View in Figma →' },
};

const TRANSLATIONS_EN = {

  // ── 8 ── ВТБ Семья / VTB Family ──────────────────────────
  8: {
    context: 'VTB Family is a feature within the VTB mobile bank that helps families manage shared finances without giving up the independence of personal accounts. Today each partner has their own card, expenses are scattered across different accounts, money is constantly transferred back and forth, and savings are tracked separately — making it hard to see how much has already been spent on groceries, a vacation, or renovations, or to make progress toward a shared goal.',

    problem: 'The lack of a single place for the family budget leads to:\n— unnecessary transfers between partners for every joint purchase\n— unclear spending: hard to tell how much has already gone toward groceries, a vacation, or renovations\n— separate savings, which make it difficult to work toward a shared goal\n— arguments about money caused by a lack of transparency\n\nThe goal of the feature is to help families manage shared finances easily without losing the independence of their personal accounts.',

    jtbd: 'Persona: Anna, 29, lives with her husband. Both receive their salary on VTB cards, are saving for a vacation, and constantly transfer money to each other for everyday purchases. Anna wants to know at any moment how much is left in the shared budget without manually reconciling several accounts.',

    solution: 'Solution:\n\n1. Shared budget on the home screen — a card shows the balance, income and expenses for the month, and progress toward the shared goal, e.g. "58% saved toward the vacation."\n\n2. Transparent expense list — every expense is linked to a participant, a budget category, and a comment: "Pyaterochka — ₽3,250, paid by Ivan, covered from the shared budget, groceries for the week."\n\n3. Financial goals with AI tips — for example, the "Vacation" jar shows progress of ₽145,000 out of ₽250,000, and the assistant suggests: "If you increase the monthly contribution by ₽3,000, you\'ll reach the goal two months earlier."\n\n4. Smart expense splitting — after a joint purchase, such as a ₽4,800 restaurant dinner, the app offers to split it in half and sends the partner a request to confirm the amount.\n\n5. Approval for large purchases — if the amount exceeds ₽50,000 (for example, buying a TV for ₽74,990), the system asks the second participant to confirm before payment.\n\n6. Analytics — a pie chart of spending by category (groceries, transport, home, entertainment, clothing) and each participant\'s share of the shared budget.\n\n7. AI assistant on the home screen — analyzes spending patterns and gives recommendations: "Over the last three months, delivery spending has grown by 32%. Cutting it by 15% would let the family save an extra ₽18,000 a year."',

    keyScenarios: 'Creating a family group and inviting participants with role settings; tracking the shared balance and expenses by category; saving toward a goal with AI-assistant tips; splitting an expense in half after a joint purchase with partner confirmation; approving large expenses over ₽50,000; viewing analytics by category and each participant\'s contribution to the budget.',

    userFlow: 'Home → "Family" section → create a family group → invite participants → set up roles → create a shared budget → add financial goals → track expenses.',

    designSystem: 'A strict corporate bank style focused on readability and trust: large typography for amounts, the brand blue as the primary accent, and emotional touches (category icons, goal progress bars) to make the financial product feel warmer and more "family-oriented."',

    prototype: 'The prototype was walked through the key scenario: creating a family group, contributing to the shared "Vacation" goal, splitting a restaurant expense in half, and approving a large purchase — from the home screen to the partner confirming the transaction.',

    results: 'Why this feature benefits VTB: families are more likely to stay within the bank\'s ecosystem; usage of joint accounts and savings products grows; user engagement and app-opening frequency increase; new opportunities open up for personalized offers — insurance, mortgages, kids\' cards, and investments.',
  },

  // ── 0 ── FinCorp ──────────────────────────────────────────
  0: {
    context: 'Fin Corp is a financial product that helps users manage money: make payments, track balances, and build savings. The savings module is one of the key tools for long-term product use, since it\'s directly tied to users\' financial habits and their engagement with the service.',

    problem: 'User behavior analysis showed that the savings feature was used irregularly and didn\'t form a lasting habit.\n\nKey problems:\n— users didn\'t fully understand how savings progress was calculated\n— there was no transparent link between actions and results\n— savings were perceived as a "static amount" rather than a process\n— low emotional engagement with reaching goals\n\nAs a result, users didn\'t return to the feature regularly and didn\'t see savings as a tool for managing their financial goals.',

    solution: 'Goal: increase engagement with the savings feature and make it a clear tool for building financial goals. Business and product goals: increase the regularity of interaction with savings, strengthen understanding of progress, improve retention in long-term scenarios, and create a sense of control and forward motion.\n\nHypothesis: if savings progress becomes more transparent and shifts from a static number to a dynamic process, users will return to the feature more often and use it more actively.\n\nProcess: I analyzed user behavior in savings scenarios — how often people open this section, at what point interest drops off, which interface elements go unnoticed, and how users interpret progress. Key insight: a user doesn\'t read a number as "movement" unless they see a clear cause-and-effect link between their actions and the change in their savings.\n\nSolution:\n\n1. A transparent progress model — reworked the logic for displaying savings: progress became the central interface element, the "before → after" connection was strengthened visually and logically, and a clear structure was added: current status, goal, remaining amount. Goal: make progress readable without cognitive interpretation.\n\n2. Strengthening the link between action and result — users now clearly see how each deposit affects overall progress: changes are reflected immediately, the dynamics of the change are made clearer, and the "abstractness" of savings is reduced. Goal: create a sense of control and causality.\n\n3. Shifting from a static entity to a process — savings were reframed as a process of reaching a goal rather than just a balance: the focus moved from a number to motion, the interface reinforces the feeling of "getting closer to the goal," and the motivational element was strengthened. Goal: increase engagement through a sense of progress.\n\n4. Reducing cognitive load — simplified how the data is interpreted: ambiguous states were removed, the number of "understanding steps" was reduced, and the visual hierarchy highlights what matters most. Goal: the user understands the system\'s state within 1–2 seconds.',

    competitorAnalysis: 'The product outperforms classic financial trackers and simple AI tools by combining deep analytics with an empathetic AI coach that turns financial planning from routine expense tracking into an emotionally comfortable path toward specific goals.',

    research: {
      userProblems: [
        'Financial anxiety: lacking a financial cushion raises stress levels and lowers willingness to make investment decisions.',
        'Psychological barrier: complex financial terminology (stocks, bonds, etc.) makes products harder to understand and reduces their use.',
      ],
      valueHypotheses: [
        'Transparency builds trust: users are more willing to accept automated decisions when they understand the system\'s logic.',
        'Automation reduces effort: built-in savings mechanics reduce the need for manual management and increase the regularity of financial actions.',
      ],
      behaviorHypotheses: [
        'Users tend toward more stable behavior when given micro-steps instead of large financial decisions.',
        'Financial decisions are often made irregularly and depend on the user\'s current emotional state.',
        'Personalization around life goals (housing, travel) increases the likelihood of regular interaction with the product.',
      ],
      insights: [
        'Emotional gap: users at different income levels show similar financial anxiety, pointing to the importance of reducing cognitive load rather than optimizing the numbers.',
        'Financial language as a barrier: complex terminology alone becomes a reason to avoid using investment tools.',
        'Micro-savings as a behavior pattern: small, regular actions feel more controllable and sustainable than infrequent large decisions.',
        'Context matters more than features: the product\'s value comes not from a set of tools but from its ability to support the user in a specific life situation.',
      ],
    },

    jtbd: 'Because FINCORP targets a broad audience, segmenting by age or socio-demographics wasn\'t informative enough. So the Jobs To Be Done (JTBD) approach was used for user research, which surfaces the real tasks, motivations, and context behind financial decisions. A common thread across all profiles is the need for in-app education to help close the gap between their current situation and their financial goals.',

    jtbdGroups: [
      { title: 'Financial cushion / safety', description: 'Mainly focused on building financial security, closing knowledge gaps, and learning how to regularly set aside small amounts.' },
      { title: 'Capital growth / Investments', description: 'Already earn more and focus on the efficiency of their investment tools to grow their wealth.' },
    ],

    cjm: 'The shift from "Stress and Anxiety" to "Control." Before: Elena works as an analyst with an average income, understands she needs to buy a home, but feels uncertain and anxious due to the lack of a savings system. After: thanks to the app, she moves into a state of calm confidence — the AI assistant lets her not just "set money aside," but see progress toward a specific, ambitious goal (an apartment), turning financial planning from a chore into a clear, creative process. The user moves from fragmented money management to systematic saving toward a specific goal with a high degree of predictability.',

    keyScenarios: 'Five key product scenarios: AI insights on spending with recommendations based on behavior and market conditions, an investment onboarding flow with a transparent educational path, a portfolio with a clear picture of returns and risk, transactions with spending control and impact on goals, and a gamified view of financial-stability progress.',

    userFlow: 'User journey: sign-up → onboarding with an emotional trigger → verification → goal-setting based on AI diagnostics → a personal plan → a daily behavioral loop → long-term retention through AI insights, repeat goals, and a financial level system.',

    purchaseScenario: 'Scenario: a user plans a big purchase. When a user is about to buy something significant (e.g., AirPods for ₽18,990), the AI analyzes how it will affect their financial cushion and current goals, and offers options: buy now, postpone, or split into installments. After the user decides, the AI recalculates the plan and forecast — how many days the safety cushion will last and how far the goal will shift.',

    designSystem: 'Cyber-Minimalism with an emphasis on a playful, friendly AI context.',

    prototype: 'The prototype walks through a user\'s first encounter with the app: from choosing a goal to allocating the budget — with AI-assistant support at every step.',

    results: 'After the changes, the savings module became: easier to understand and more predictable to use, more engaging for regular scenarios, better at creating a sense of progress, and perceived as an active tool for reaching goals rather than a static financial block.\n\nThe core problem wasn\'t at the UI level but at the level of the behavioral model: users didn\'t see savings as a process, because the interface didn\'t communicate the cause-and-effect link between action and progress.\n\nThe solution was to reframe savings as a system for building a financial habit rather than just a balance display.',
  },

  // ── 1 ── Core Treasury ────────────────────────────────────
  1: {
    context: 'Core Treasury is a corporate treasury platform for mid-size and large companies managing liquidity across multiple banks, currencies, and legal entities. The product solves the lack of a single, up-to-date, trusted source of truth for the company\'s cash position.',

    problem: 'Treasury departments manage liquidity through dozens of disconnected sources: ERPs, banks, spreadsheets, and manual reporting. Data is fragmented, forecasts don\'t match reality, cash-flow gaps are discovered after the fact, and decisions get made in crisis mode.',

    solution: 'Core Treasury brings liquidity monitoring, forecasting, and scenario modeling together into a single operational loop, turning treasury from a reporting function into a liquidity command center.',

    competitorAnalysis: 'Kyriba — market leader, but an overloaded UX\nGTreasury — strong forecasting, high barrier to entry\nSAP Treasury — powerful integrations, weak UX\nTIS — good visibility, complex setup',

    research: {
      userProblems: [
        'The pain isn\'t analysis — it\'s collecting and verifying data.',
        'Fragmented sources and manual data cleanup.',
        'Low trust in forecasts due to mismatches with reality.',
        'Stress spikes around payroll, taxes, and large payouts.',
      ],
      valueHypotheses: [
        'A single source of truth increases trust in financial data.',
        'Scenario modeling reduces the number of crisis decisions.',
      ],
      behaviorHypotheses: [
        'Decisions are made under time pressure and risk.',
        'Users are motivated to minimize manual work.',
      ],
      insights: [
        'The main burden isn\'t analytics — it\'s collecting and checking data.',
        'Each bank is perceived as a separate system with no unifying layer.',
        'Reporting doesn\'t solve the need for real-time liquidity control.',
        'The value shift is from reporting toward forecasting and control.',
      ],
    },

    jtbd: 'Users hire the product to control liquidity, prevent cash-flow gaps, and get a single real-time source of financial truth.',

    jtbdGroups: [
      { title: 'CFO', description: 'Needs a quick liquidity overview and the strategic picture.' },
      { title: 'Treasurer', description: 'Day-to-day management of payments and forecasts.' },
      { title: 'Risk manager', description: 'Oversight of transparency and regulatory audit.' },
    ],

    cjm: 'The shift from reactive control to proactive liquidity management through a single data source and scenario modeling.',

    userFlow: 'Sign-up → connect banks → consolidate data → monitor liquidity → scenario modeling → decision-making.',

    purchaseScenarioTitle: 'User scenario',
    purchaseScenario: 'The system detects a potential cash-flow gap 14 days out and generates an alert. The CFO opens the details, investigates the cause of the risk, tests scenarios in a sandbox, picks the best action with an AI recommendation, sends the decision for approval, and executes it — the risk is closed and the liquidity forecast is updated.',

    designSystem: 'A high-density financial UI system focused on scan speed and risk semantics.',

    prototype: 'The prototype covers the treasurer\'s full working cycle: monitoring, operations, analytics, scenarios, and reports.',

    results: '−60–70% liquidity-analysis time\n×3 faster cash-flow-gap detection\n−80% manual data reconciliation\n−50% reporting-prep time',

    references: [
      { title: 'Liquidity Risk as a Strategic Factor (2025)' },
      { title: 'Corporate Liquidity Management Strategies (2025–2026)' },
      { title: 'ALM (Asset-Liability Management) as the Core of Liquidity Risk' },
      { title: 'New Quantitative Models (2026)' },
      { title: 'Systemic Risk and Cross-Market Liquidity (2025)' },
      { title: 'A Model of the Interaction Between Liquidity and Solvency (Bank of England, 2025)' },
      { title: 'Digital Banking and Liquidity (2025)' },
    ],
  },

  // ── 2 ── AI PM Assistant ──────────────────────────────────
  2: {
    context: 'AI PM Assistant is a product AI tool that helps product managers and teams work through tasks: formulating hypotheses, analyzing problems, structuring features, and making product decisions. It\'s used in workflows where moving quickly from idea to structure and decision matters.',

    problem: 'User behavior analysis showed that interactions with AI PM Assistant often stayed shallow:\n— users phrased requests that were too general or unstructured\n— the AI was treated like a chatbot rather than a product-thinking tool\n— users didn\'t always understand the "right" way to work with the assistant\n— there was no clear framework for different types of product tasks\n\nAs a result, users got scattered answers and didn\'t always reach structured product decisions.',

    solution: 'Business and product goal: increase AI PM Assistant\'s value as a working tool for product teams — improve the quality of incoming requests, make answers more useful in product scenarios, reduce chaotic interactions with the AI, and increase usage share for structured tasks (hypotheses, analysis, PRDs).\n\nHypothesis: giving AI PM Assistant a clearer interaction structure and helping users phrase product tasks will significantly improve answer quality and product usefulness.\n\nProcess: I analyzed how users phrase requests, which scenarios lead to "vague" answers, where users lose their train of thought, and which task types the product is most often used for. Key insight: the main problem wasn\'t generation quality — it was the lack of a guiding structure to help users formulate a product task.\n\nSolution:\n\n1. Strengthening the interaction structure with AI — guiding elements were added to the interface: sample product prompts, phrasing hints, and scenario entry points (idea / analysis / PRD / hypothesis). This reduced uncertainty at the start of the interaction.\n\n2. Separating types of product tasks — the assistant\'s main working modes were clarified: idea generation, problem analysis, solution structuring, and feature/PRD work. Users started understanding better what output to expect.\n\n3. Supporting iterative thinking — the logic behind developing an answer was strengthened: the ability to clarify and continue the dialogue, moving from idea to structure, and support for multi-step product tasks. The interaction became closer to a real PM workflow.\n\n4. Reducing cognitive load — the start of the interaction was simplified: fewer "empty" states, more guiding elements, and fewer decisions before the first prompt.',

    competitorAnalysis: 'Jira — powerful but overloaded\nNotion — flexible but doesn\'t structure processes\nAsana — convenient but weak analytics\nSlack — communication without context',

    research: {
      userProblems: [
        'Communication overload and constant switching between systems.',
        'No single source of project context.',
        'Manual collection of task statuses.',
        'Lost agreements between teams.',
      ],
      valueHypotheses: [
        'A unified AI layer reduces the PM\'s workload.',
        'Automatic answers reduce the number of repeated questions.',
      ],
      behaviorHypotheses: [
        'Users often search for information instead of doing tasks.',
        'Teams depend on the PM to get status updates.',
      ],
      insights: [
        'The PM becomes a communication bottleneck.',
        'Information is spread across several systems.',
        'Most questions are repeats.',
        'Project context often lives only in one person\'s head.',
      ],
    },

    jtbd: 'Users want to quickly understand a project\'s status and get answers without constantly searching for information or involving the PM.',

    jtbdGroups: [
      { title: 'Team members', description: 'Getting task statuses, deadlines, and documentation without going through the PM.' },
      { title: 'Project Manager', description: 'Automating reporting, tracking risk, and reducing workload.' },
    ],

    cjm: 'The shift from manually searching for information to a single AI interface that aggregates project context and reduces communication overhead.',

    userFlow: 'Question → AI search → data aggregation → answer within project context → status update.',

    designSystem: 'An AI-first interface focused on context, status visibility, and automatic hints.',

    prototype: 'The prototype shows key scenarios: requesting a status, surfacing blockers, automatic notifications, and reports.',

    results: 'After the changes, AI PM Assistant became: easier for new users to understand, more useful for structured product tasks, less dependent on the quality of the initial prompt, and better aligned with real PM workflows.\n\nThe core problem wasn\'t at the level of answer generation — it was at the level of the product framework for interaction: users weren\'t using AI PM Assistant as a decision-making tool because the interface didn\'t provide a structure for product thinking.\n\nThe solution was moving from a "free-form chat" to structured interaction organized around types of product tasks.',
  },

  // ── 3 ── AI Design Workflow ───────────────────────────────
  3: {
    context: 'Research and adoption of AI tools within the product design process. Integrating Claude Code and MCP (Model Context Protocol) with Figma to generate, refine, and move UI solutions directly from the design tool into code without manual rebuilding.',

    problem: 'Traditional design processes require a lot of manual work at the research, variant-generation, and handoff-to-development stages. Designers spend much of their time not on decision-making but on routine tasks: gathering references, drawing variations, and manually transferring specs to developers. This lengthens the cycle from idea to a testable solution and creates a gap between design and code.',

    solution: 'Adopting AI assistants (Claude, GPT, Gemini, Midjourney, ComfyUI) across every stage of the process — from research and variant generation to interface assembly. The key element is direct integration via the MCP protocol, which allows working with Figma from the terminal: generating layouts, syncing design-system tokens, and handing off finished solutions to development without manual rebuilding.',

    competitorAnalysis: 'Figma AI — built-in features are convenient but limited to a single tool\nUizard / Galileo AI — fast UI generation but weak quality and brand control\nManual workflow (designer + developer) — full control but high iteration cost\nPlugin generators — cover individual steps but don\'t connect the process into a single loop',

    research: {
      userProblems: [
        'Lots of routine work at the research and prototyping stages.',
        'Duplicated work between designer and developer when moving UI into code.',
        'A long approval and revision cycle for design variants.',
        'No single AI tool that covers the whole process rather than individual steps.',
      ],
      valueHypotheses: [
        'Automating routine tasks frees up designer time for strategic work.',
        'Direct AI integration with Figma via MCP cuts losses when handing off designs to code.',
      ],
      behaviorHypotheses: [
        'Designers tend to use AI tools for isolated tasks rather than as part of a systematic process.',
        'There\'s resistance to adopting AI due to distrust in output quality and predictability.',
      ],
      insights: [
        'AI delivers the biggest win not in generating the final design, but in speeding up rough iterations.',
        'The MCP protocol closes the gap between the design tool and the codebase.',
        'Tailoring the AI assistant to a specific project\'s context improves the relevance and quality of its output.',
        'Combining several models (text, image, code) covers different stages of the process better than one universal model.',
      ],
    },

    jtbd: 'Designers want to reduce time spent on routine work (research, generating variants, moving into code) and focus on strategic decisions without losing control over quality.',

    jtbdGroups: [
      { title: 'Product designer', description: 'Needs fast iteration on variants and faster routine tasks without losing control of the final result.' },
      { title: 'Developer', description: 'Needs accurate, predictable handoff of design decisions into code without manually rebuilding mockups.' },
    ],

    cjm: 'The shift from a sequential manual process (research → design → developer handoff) to a parallel, AI-accelerated cycle, where AI covers the routine work and the designer focuses on decisions and quality control at every stage.',

    userFlow: 'Task setup → AI research and variant generation → designer selection and refinement → transferring the layout to Figma/code via MCP → review and edits → final build.',

    designSystem: 'A flexible system adapted to AI-generated components, with clear tokens and rules to keep things consistent as the solution set scales.',

    prototype: 'The prototype demonstrates the full cycle: task setup, AI-generated interface variants, transfer into Figma via MCP, and handoff to development.',

    results: 'A shorter cycle from concept to a testable solution. 3x faster iteration when producing visual solutions. Less manual work at the handoff-to-development stage thanks to direct MCP integration.',
  },

  // ── 4 ── DroneDrop ────────────────────────────────────────
  4: {
    context: 'DroneDrop is an autonomous delivery service for small electronics and accessories using unmanned aerial vehicles. The product targets scenarios where delivery speed becomes part of the user experience: an urgent replacement for work equipment, a forgotten accessory, same-day gifts, and other purchases that need to arrive within the hour.\n\nUnlike traditional delivery services, DroneDrop treats the last mile as an intelligent system that brings together autonomous aircraft, city infrastructure, a digital service, and a logistics platform. The product\'s goal is to shorten the time between purchase and pickup while maintaining a high level of safety, transparency, and predictability.',

    problem: 'Most express-delivery services optimize how couriers work, but the delivery model itself stays the same.\n\nDesigning DroneDrop wasn\'t about replacing a person with a drone — it was about creating a new model of interaction between the user, the autonomous delivery system, and city infrastructure. That meant accounting for several constraints at once: weather conditions, urban layout, user safety, airspace restrictions, equipment security, and system-failure scenarios.\n\nThe core challenge was making a technologically complex system feel understandable and predictable to the user.',

    solution: 'My role: Product Design, UX Strategy, Service Design, Systems Thinking, Information Architecture, Interaction Design, Prototyping. I designed the user experience, the service architecture, and the interaction between the digital product and the physical delivery infrastructure, with particular attention to uncertainty scenarios and system fault tolerance.\n\nProduct Vision: DroneDrop was designed as a service that lets users stop thinking about the delivery process. The main goal was to make autonomous delivery so clear and predictable that people would experience it as naturally as hailing a cab or ordering food.\n\nResearch: I studied existing last-mile models — traditional courier delivery, parcel lockers, express delivery, and international autonomous-logistics projects. Users rarely think of delivery as a standalone service — for them it\'s an extension of the purchase, so expectations form not around the technology but around a feeling of control. Users want to know three things: where the order is, when it will arrive, and what happens if something goes wrong.\n\nKey insight: the problem with autonomous delivery isn\'t a lack of trust in drones — it\'s that users stop understanding the system\'s state. The less predictable the process feels, the faster trust in the product drops — so the interface needs to explain the system before the user starts asking questions.\n\nDesign principles:\n\n1. Make autonomy understandable — the autonomous system should explain its actions in simple, human language.\n\n2. Design for uncertainty — not just successful deliveries, but every exception scenario should be part of the user journey.\n\n3. Keep users in control — even a fully automated delivery should create a feeling of control.\n\n4. Build trust through transparency — every action the system takes should be explainable.\n\nInstead of a single app, I designed a service platform combining several components.\n\nDrone Ports — orders are picked up at dedicated pickup stations. This removes the risk of an unsafe landing, protects the order from theft, reduces the impact of human error, and works even when the user isn\'t present.\n\nSmart Routing — before every flight, the system automatically evaluates weather conditions, airspace restrictions, route congestion, battery charge, and the availability of the nearest Drone Port. If a safe flight isn\'t possible, the order is automatically switched to express courier delivery with no need to reorder.\n\nSystems Thinking: DroneDrop wasn\'t designed as a drone-control interface but as an ecosystem including users, the logistics platform, autonomous aircraft, Drone Port infrastructure, support services, and the urban environment. Much of the work focused on service scenarios and system states rather than individual app screens.',

    jtbd: 'When I order an important accessory or a small gadget (like headphones), I want to get it the same day without a long wait, so I don\'t have to interrupt my workflow or cancel plans.',

    jtbdGroups: [
      { title: 'Digital nomads', description: 'Need to replace a broken cable, mouse, or headset to keep working.' },
      { title: 'Gift segment', description: 'Bought a last-minute gift — need it delivered within the hour.' },
    ],

    userFlow: 'The customer app lets users place an order, track the drone\'s route in real time, receive delivery-status notifications, and confirm pickup via a QR code.',

    purchaseScenarioTitle: 'Exception Scenarios',
    purchaseScenario: 'Special attention was paid to failure scenarios: the user doesn\'t show up for the order, weather changes mid-flight, connection loss, emergency landing, a closed flight zone, low battery, or a busy Drone Port.\n\nEach scenario has a pre-designed chain of system actions and clear communication with the user.',

    results: 'Key metrics.\n\nUser Experience: Time to Delivery, First Attempt Delivery Rate, Successful QR Pickup Rate, Delivery Confidence Score, CSAT.\n\nBusiness: Cost per Delivery, Fleet Utilization, Failed Delivery Rate, Operational Efficiency, Cost per Successful Delivery.\n\nReflection: designing autonomous services is less about building an interface and more about designing trust between a person and a system. Users don\'t need to understand how an autonomous drone works, but they should always understand what\'s happening with their order, why the system is making certain decisions, and what happens next. Transparency of process is exactly what becomes the key to a successful user experience in next-generation products.',

    tags: 'UX, Product Design, Logistics, Drone Delivery, Russia',
  },

  // ── 5 ── Panorama Lounge ──────────────────────────────────
  5: {
    context: 'Panorama Lounge is a premium restaurant in Dobrograd. Despite a high level of service, the experience of browsing the menu remained fragmented: guests only saw the paper menu once seated at the table, couldn\'t explore the offerings in advance, and the restaurant had no way to adapt offers to demand or analyze interest in specific dishes.\n\nThe project called for a digital menu that would accompany the guest throughout the whole journey — from first learning about the restaurant to placing an order.',

    problem: 'The paper menu worked fine as a dish catalog, but it didn\'t help guests make decisions and didn\'t solve the restaurant\'s business needs.\n\nResearch surfaced several key problems:\n— guests spent a lot of time choosing dishes\n— seasonal offers went unnoticed\n— waitstaff repeatedly answered the same questions about ingredients and pairings\n— the restaurant had no data on which items guests were actually interested in\n— prospective guests couldn\'t check the current menu before visiting\n\nAs a result, the restaurant was missing opportunities to raise the average check, promote special offers, and set expectations before a visit.',

    solution: 'My role: Product Design, UX Research, Information Architecture, Interaction Design, Design System, Prototyping. I owned the full product design cycle — research, concept development, designing user scenarios, information architecture, interfaces, and the admin panel.\n\nDesign principles:\n\n1. Reduce cognitive load — cut the number of decisions a guest has to make when choosing a dish.\n\n2. Support confident decision-making — help guests choose without needing to ask a waiter.\n\n3. Surface relevant content — naturally promote seasonal offers and recommendations within the choosing flow.\n\n4. Design for multiple contexts — one product needed to work equally well whether the guest was browsing at home or right at the table.\n\nInstead of a digital copy of the paper menu, I designed a standalone product combining several usage scenarios.\n\nFor guests: browsing the menu via the website or a QR code, easy category navigation, search, dish photos, ingredients and allergens, chef\'s recommendations, drink pairings, favorites, table booking, and calling a waiter.\n\nFor the business: an admin panel, assortment management, publishing seasonal offers, view and popularity analytics for dishes, and tracking guest interest in the menu.\n\nThe key shift was rethinking the digital menu\'s role: instead of a dish catalog, the product became a decision-making tool. For guests, it shortens choosing time and makes the experience more comfortable. For the restaurant, it becomes a communication channel, a way to promote special offers, and a source of data about user behavior.',

    competitorAnalysis: 'I analyzed existing digital solutions on the market: QR menus, restaurant websites, and booking services. The research showed that most products focus on displaying information but barely help users make a decision.\n\nThe main insight was that the problem isn\'t a lack of information — it\'s how it\'s presented. Guests need quick answers to: what to choose, whether a dish suits me, what pairs well with it, and whether the restaurant is even worth visiting.',

    research: {
      userProblems: [
        'Guests take a long time to choose dishes without visual presentation and a clear menu structure.',
        'Restaurant and menu information is either missing online or presented inconveniently.',
        'No recommendations or hints for pairing dishes and drinks.',
        'Waitstaff are overloaded with questions about ingredients and allergens.',
      ],
      valueHypotheses: [
        'Visual presentation of dishes and recommendations shorten choosing time and increase the likelihood of ordering.',
        'Being able to browse the menu before a visit increases booking conversion.',
      ],
      behaviorHypotheses: [
        'Guests prefer exploring the menu themselves rather than asking a waiter.',
        'Chef\'s recommendations and dish pairings help increase the average check.',
      ],
      insights: [
        'The problem isn\'t a lack of information — it\'s inconvenient presentation and no personalization.',
        'View and order analytics let the owner manage the assortment quickly.',
        'Seasonal offers are poorly promoted without a dedicated digital channel.',
        'Some guests decide to visit based on whether the menu is available online beforehand.',
      ],
    },

    jtbd: 'A guest visiting or planning to visit the restaurant wants to quickly understand the offerings and choose the right dishes for an enjoyable experience without wasting time. The owner wants to update the menu quickly and track dish popularity to increase sales and improve service.',

    jtbdGroups: [
      { title: 'Restaurant guests', description: 'Want to check the assortment, prices, and signature dishes in advance, get recommendations, and book a table.' },
      { title: 'Owner and staff', description: 'Need to manage the menu quickly, track dish popularity, and reduce the load on waitstaff.' },
    ],

    cjm: 'The shift from uncertainty ("is this restaurant right for me, what should I order") to a confident choice: the guest browses the menu before the visit or via a QR code at the table, sees photos, ingredients, and chef\'s recommendations, adds dishes to favorites or to an order — and arrives at the restaurant with clear expectations and a choice already made.',

    userFlow: 'Scenario 1 (before the visit): Home → Menu → Category → Dish card → Favorites → Booking → Visit. Scenario 2 (at the restaurant): Scan QR → Menu → Category → Dish card → Add to order → Cart → Confirmation → Sent to waiter → Order received.',

    designSystem: 'A premium visual language matching the restaurant\'s atmosphere — emphasis on dish photography and light, unobtrusive category navigation.',

    prototype: 'The prototype covers both usage scenarios — browsing the menu before a visit with booking, and ordering via QR code at the table — plus an admin panel for managing items and viewing analytics.',

    results: 'The proposed concept addressed several needs at once: shorter dish-choosing time, more visibility for seasonal offers, less load on staff, a higher chance of booking before a visit, and data for the owner to make product decisions based on user behavior.\n\nKey metrics: average dish-choosing time, menu browsing depth, booking conversion, order conversion, average check, share of orders from seasonal offers, user satisfaction (NPS/CSAT).',
  },

  // ── 6 ── Разбуди Деда Мороза / Wake Up Santa ─────────────
  6: {
    context: '"Wake Up Santa" is a seasonal e-commerce landing page for a Body Pillow product, built around a collective-progress game mechanic: every purchase becomes a contribution to a shared New Year\'s mission.',

    problem: 'Standard gift landing pages read as a static product showcase: users have no reason to buy right now, no sense of participating in an event, and retention stays low because there\'s no reason to come back to the site.',

    solution: 'The landing page was designed as a living progress system with a collective goal — a purchase becomes a contribution to a shared mission, reinforced by other users\' live activity, milestone rewards, and social proof.',

    competitorAnalysis: 'Classic gift landing pages — a static showcase with no emotional engagement\nSeasonal email campaigns — low engagement, no interactivity\nMarketplaces — wide selection but no emotional context or sense of participation\nBrand gamified promos — engaging, but rarely tied directly to a purchase',

    research: {
      userProblems: [
        'Low engagement with standard gift landing pages.',
        'No reason to buy right now.',
        'No sense of participating in a shared event.',
        'Weak retention — no reason to return to the site.',
      ],
      valueHypotheses: [
        'Visible shared progress boosts purchase motivation.',
        'Instant feedback after a purchase increases satisfaction and trust in the mechanic.',
      ],
      behaviorHypotheses: [
        'New Year\'s purchases tend to be more impulsive.',
        'Social participation and other users\' live activity increase motivation to act.',
        'A feeling of an "almost-reached goal" nudges people to buy right here, right now.',
      ],
      insights: [
        'Users buy not just a product but an emotional context and a sense of progress.',
        'Game-like progress is more persuasive than rational product comparison.',
        'Intermediate rewards hold attention better than a single final goal.',
        'Other participants\' activity creates social proof and reduces purchase hesitation.',
      ],
    },

    jtbd: 'Users want to quickly pick an emotional gift, feel part of a shared activity, and get a clear reason to buy right now instead of putting off the decision.',

    jtbdGroups: [
      { title: 'Gift buyers', description: 'Want to quickly choose an emotional, "alive" gift without spending time comparing lots of products.' },
      { title: 'Event participants', description: 'Engage through live progress and social proof, come back to check on the shared goal.' },
    ],

    cjm: 'The shift from passively browsing a showcase to active participation: the user lands on the page, quickly grasps the mechanic through a live counter and progress bar, makes a purchase, instantly sees their contribution to the shared goal, and returns later to check progress and updates.',

    userFlow: 'Land on the page → learn the progress mechanic → view the product → purchase → shared progress updates instantly → social confirmation (activity feed) → return to check progress.',

    designSystem: 'A warm festive palette: red for urgency, beige for coziness, gold for reward. Key components: an animated progress bar, a live counter, an activity feed, and milestone-reward cards.',

    prototype: 'The prototype includes the key screens: a hero section with the live progress system, the product card, an activity feed of other buyers, the milestone-reward system, a social-proof block, and the final CTA with sharing.',

    results: 'Expected effect: higher conversion from a sense of urgency, more return visits through the progress-based return loop, more time on site, and more social sharing.',
  },

  // ── 7 ── Доброград Ипотека / Dobrograd Mortgage ──────────
  7: {
    context: 'Dobrograd is a platform for transparent mortgage and housing selection that brings together mortgage programs, bank offers, developer installment plans, and a payment calculator in a single selection flow.',

    problem: 'Users don\'t struggle with a lack of mortgage information — they struggle with too much of it and a lack of clarity: complex terminology, distrust of calculations and the final overpayment, fear of making a mistake in a long-term commitment, and having to manually recalculate scenarios across different banks.',

    solution: 'The platform turns choosing a mortgage into a transparent, manageable process: every decision is translated into a clear monthly payment, banks and programs are compared in a single interface, and a live calculator shows whether a user can "afford" a given scenario.',

    competitorAnalysis: 'Banks (Sber, VTB, etc.) — overload users with numbers and no explanation\nReal-estate aggregators — strong at finding properties, weak on transparency of terms\nDevelopers — hide the calculation logic behind a sales manager\nMortgage brokers — a personal approach, but it doesn\'t scale and isn\'t transparent to the user',

    research: {
      userProblems: [
        'Overwhelming choice between banks, rates, and programs.',
        'Complex financial terminology that\'s hard to understand without explanation.',
        'No understanding of what\'s personally the right fit.',
        'Distrust of calculations and the final overpayment.',
        'Fear of making a mistake in a long-term financial commitment.',
      ],
      valueHypotheses: [
        'Translating all terms into a monthly payment reduces cognitive load and builds trust.',
        'Being able to compare banks in a single interface increases confidence in the decision.',
      ],
      behaviorHypotheses: [
        'Users decide not based on the rate, but on the size of the monthly payment.',
        'Decisions are made iteratively: users repeatedly change parameters and recalculate scenarios before choosing.',
      ],
      insights: [
        'A rate without context has no value to the user — the decision is made through the monthly payment.',
        'Trust matters more than benefit: users would rather pick a clear option than a formally better but opaque one.',
        'The market competes not on interfaces, but on sources of trust.',
        'Transparency of the data source and calculation logic reduces the feeling of a "black box."',
      ],
    },

    jtbd: 'At different stages, users want to: understand whether they can afford a home; explore what\'s available on the market; compare terms and choose a comfortable payment; and be confident their decision is safe and won\'t be a mistake.',

    jtbdGroups: [
      { title: 'First-time home buyers', description: 'High anxiety, low financial literacy, fear of making a mistake when choosing a mortgage.' },
      { title: 'Terms optimizers', description: 'Already familiar with mortgages, comparing rates and banks, looking for better and more flexible terms.' },
    ],

    cjm: 'The shift from anxious uncertainty ("what should I choose, can I afford this") to a confident decision: the user starts by estimating their budget, explores housing and program options, iteratively compares banks and recalculates scenarios, then moves on to an application with a sense of control and a clear financial picture.',

    userFlow: 'Enter the platform → choose a property or set budget parameters → initial payment calculation → iterative comparison of banks and programs while adjusting parameters → choose a comfortable scenario → apply for a consultation/approval.',

    designSystem: 'A "financial clarity interface" — payment visualization, a live calculator with instant recalculation, a sticky monthly-payment block, bank cards, and an accordion for mortgage programs.',

    prototype: 'The prototype demonstrates the full scenario: selecting a property, live recalculation of the monthly payment as parameters change, comparing bank offers, and moving to an application.',

    results: 'Expected effect for users — lower anxiety, faster decisions, and more trust in the process. For the business — higher application conversion, less dependence on sales managers, and more comparisons (an engagement loop).',
  },

};
