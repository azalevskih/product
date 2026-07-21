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

  // ── 8 ── ВТБ Оплата / VTB Payment ──────────────────────────
  8: {
    context: 'Payments are one of the most frequent actions in a banking app — transfers to close ones, mobile top-ups, utility bills, and other recurring services. Even so, the current user path takes several steps and never anticipates the next action — it makes the user search for it every time.\n\nGoal: reduce the time it takes to complete a payment and make recurring operations available in the fewest possible steps.',

    problem: 'The current payment scenario takes 5 steps:\nHome → Payments & Transfers → Choose payment type → Fill in the form → Confirmation\n\nThe core problem is that the app makes the user search for the action they need instead of offering it upfront. On top of that, the home screen leads with marketing offers (loans, promotions, cashback, bonuses), even though most users\' primary goal is simply to complete an operation.',

    solution: '1. Payments as the core scenario ★★★★★\nQuick access to payments right from the home screen, next to the balance. Tapping it immediately surfaces recent recipients, payment templates, a QR scanner, and transfer by phone number. This removes an extra navigation layer and speeds up the path to the target action.\n\n2. A "Frequent operations" block above the banners ★★★★★\nToday users first see marketing offers (loans, promotions, cashback, bonuses), even though their main goal is to complete an operation. Proposed home screen structure: Balance → Quick actions → Frequent operations (MTS, utilities, internet, Tinkoff, Mom) → Banners and additional offers.\n\n3. One-tap payment ★★★★★\nFor recurring operations, remove the need to fill out the form again. For example: "Mom — last transfer: yesterday, ₽500" with a "Repeat transfer" button. The user goes straight to confirmation.\n\n4. Smart action search\nSearch stops being just a way to find a section and becomes a fast way to complete a task. Searching "Ivan" immediately shows a card — "Ivan P. — last transfer ₽1,500" with a "Transfer" button. Searching "MTS" immediately suggests "Pay MTS" — no need to hunt for the right section manually.\n\n5. Floating Action Button\nA global action button available from any screen: transfer, pay, QR, top up. Shortens the path to key operations.\n\n6. Auto-fill on data entry\nAs the user types a phone number (8999…), the system immediately shows the recipient — "Ivan P., Sber." The user instantly knows who they\'re sending money to, without extra screens.\n\n7. Predicting recurring payments\nUsing transaction history for personalized prompts, e.g.: "You usually pay for internet on the 25th," with a "Pay" button. The app helps the user complete a habitual action faster.\n\n8. Bottom sheet instead of extra screens\nInstead of navigating to a separate section — a bottom sheet with options: by phone number, QR code, between accounts, by bank details. Fewer transitions — faster task completion.',

    userFlow: 'Optimized scenario:\nHome → Last recipient → Confirmation\n\n4–5 steps → 2–3 steps.',

    designSystem: 'A unified system for fast payment scenarios: cards for recent recipients and payment templates, compact tiles for frequent operations, a bottom sheet used instead of extra screens, recognizable status states, and hints based on transaction history.',

    results: 'Metrics to validate the hypothesis:\n— Time to Complete Payment\n— Payment Success Rate\n— Drop-off Rate\n— Number of steps to payment\n\nHypothesis: most users perform recurring operations. If frequent actions are surfaced on the first screen, along with quick payments and personalized prompts, users will be able to complete payments faster, increasing conversion into successful operations. The effect needs to be validated through A/B testing.',
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
/* ============================================================
   SCRIPT.JS — логика портфолио

   ЧТО ЗДЕСЬ РЕДАКТИРОВАТЬ:
   Только массив PROJECTS ниже — тексты и фото для страниц проектов.

   Остальное (скролл, открытие/закрытие) трогать не нужно.
============================================================ */


const PROJECTS = [

  // ── ПРОЕКТ 8 ── ВТБ Оплата ──────────────────────────────
  {
    id: 8,
    title: { ru: 'ВТБ Оплата', en: 'VTB Payment' },
    cardDesc: { ru: 'Оптимизация сценария оплаты в мобильном банке', en: 'Streamlining the payment flow in a mobile bank' },
    bannerColor: '#1E1E96',
    bannerImg: 'assets/VTB_BIG.jpg',
    cardImg: 'assets/VTB.jpg',
    lightBanner: false,
    images: [],
    solutionImage: 'assets/VTB_Interface.jpg',

    context: 'Сценарий оплаты — одно из самых частых действий в банковском приложении: переводы близким, оплата связи, ЖКХ и других повторяющихся услуг. Несмотря на это, текущий путь пользователя требует нескольких шагов и не предлагает нужное действие заранее, а заставляет искать его каждый раз самостоятельно.\n\nЦель: сократить время выполнения платежа и сделать повторные операции доступными за минимальное количество действий.',

    problem: 'Текущий сценарий оплаты состоит из 5 шагов:\nГлавная → Платежи и переводы → Выбор способа оплаты → Заполнение формы → Подтверждение\n\nОсновная проблема — приложение предлагает пользователю искать нужное действие, вместо того чтобы предлагать его заранее. Кроме того, на главном экране пользователь сначала видит маркетинговые предложения (кредиты, акции, кешбэк, бонусы), хотя основная задача большинства пользователей — совершить операцию.',

    researchImage: 'assets/Исследование_VTB.jpg',

    solution: '1. Оплата как основной сценарий ★★★★★\nБыстрый доступ к оплате прямо с главного экрана рядом с балансом. После нажатия пользователь сразу получает: последние получатели, шаблоны платежей, QR-сканер, перевод по номеру телефона. Это убирает лишний уровень навигации и ускоряет переход к целевому действию.\n\n2. Блок «Частые операции» выше баннеров ★★★★★\nСейчас пользователь сначала видит маркетинговые предложения (кредиты, акции, кешбэк, бонусы), хотя его основная задача — совершить операцию. Предлагаемая структура главной страницы: Баланс → Быстрые действия → Частые операции (МТС, ЖКХ, Интернет, Тинькофф, Мама) → Баннеры и дополнительные предложения.\n\n3. One Tap Payment ★★★★★\nДля повторяющихся операций — убрать необходимость повторного заполнения формы. Например: «Мама — последний перевод: вчера, 500 ₽» и кнопка «Повторить перевод». Пользователь сразу переходит к подтверждению.\n\n4. Умный поиск действий\nПоиск становится не просто поиском разделов, а быстрым способом выполнить задачу. Запрос «Иван» сразу показывает карточку «Иван П. — последний перевод 1 500 ₽» с кнопкой «Перевести». Запрос «МТС» сразу предлагает «Оплатить МТС» — без необходимости искать нужный раздел вручную.\n\n5. Floating Action Button\nГлобальная кнопка действий, доступная с любого экрана: перевести, оплатить, QR, пополнить. Сокращает путь к ключевым операциям.\n\n6. Автоподстановка данных\nПри вводе номера телефона (8999…) система сразу показывает получателя — «Иван П., Сбер». Пользователь сразу понимает, кому отправляет деньги, без дополнительных экранов.\n\n7. Предугадывание регулярных платежей\nИспользование истории операций для персональных подсказок, например: «Обычно 25 числа вы оплачиваете интернет» с кнопкой «Оплатить». Приложение помогает пользователю выполнить привычное действие быстрее.\n\n8. Bottom Sheet вместо дополнительных экранов\nВместо перехода в отдельный раздел — Bottom Sheet с вариантами: по номеру телефона, QR-код, между счетами, по реквизитам. Меньше переходов — быстрее выполнение задачи.',

    userFlow: 'Оптимизированный сценарий:\nГлавная → Последний получатель → Подтверждение\n\n4–5 шагов → 2–3 шага.',

    designSystem: 'Единая система для быстрых платёжных сценариев: карточки последних получателей и шаблонов платежей, компактные плитки частых операций, bottom sheet вместо дополнительных экранов, узнаваемые статусные состояния и подсказки на основе истории операций.',

    uikitImage: 'assets/Design System Sections VTB.png',

    results: 'Для проверки гипотезы использовала бы следующие метрики:\n— Time to Complete Payment — время выполнения операции\n— Payment Success Rate — процент успешно завершённых платежей\n— Drop-off Rate — количество пользователей, покинувших сценарий\n— Количество шагов до оплаты\n\nГипотеза: большая часть пользователей совершает повторяющиеся операции. Если вынести частые действия на первый экран, добавить быстрые платежи и персональные подсказки, пользователи смогут завершать оплату быстрее, что повысит конверсию в успешные операции. Эффект необходимо подтвердить через A/B-тестирование.',

    tags: 'UX Research, Product Design, Fintech, Mobile Banking, A/B Testing, Figma',
  },


  // ── ПРОЕКТ 0 ── FINCORP ──────────────────────────────────
  {
    id: 0,
    title: { ru: 'Fin Corp', en: 'Fin Corp' },
    cardDesc: { ru: 'AI-финансовый партнёр для здоровых финансовых привычек', en: 'Boosting savings engagement in a fintech product' },
    bannerColor: '#7F77DD',
    bannerImg: 'assets/FINCORP_BIG.jpg',
    cardImg: 'assets/FinCorp_Image.jpg',
    lightBanner: true,
    images: ['assets/Прототип_Fin.jpg'],
    solutionImage: 'assets/FINCORP_prototype_2.png',

    context:  'FINCORP — концепция цифрового финансового продукта нового поколения, который помогает пользователям не просто управлять деньгами, а принимать более осознанные финансовые решения.\n\nБольшинство существующих банковских приложений решают операционные задачи: платежи и переводы, контроль баланса, история операций, хранение средств. Однако они редко помогают пользователю отвечать на более важные вопросы: «Могу ли я позволить себе эту покупку?», «Как быстрее накопить на важную цель?», «Как сформировать финансовую подушку?», «Какие действия помогут мне улучшить своё финансовое состояние?»\n\n<strong class="proj-highlight">Цель проекта</strong> — создать финансовый продукт, который превращает управление деньгами из рутинного контроля в понятный и поддерживающий путь к личным целям.',

    problem:  'Пользователям сложно превратить финансовые намерения в устойчивые действия.\n\nИсследование показало несколько ключевых барьеров:\n\n1. Отсутствие ощущения контроля — пользователь видит баланс и отдельные операции, но не понимает общую картину: насколько он близок к цели, какие действия помогут улучшить ситуацию, как сегодняшние решения повлияют на будущее.\n\n2. Финансовая сложность становится барьером — инвестиции, накопления и управление капиталом часто связаны со сложной терминологией (доходность, риск, портфель, инструменты инвестирования), что создаёт ощущение неопределённости и снижает желание разбираться в финансовых продуктах.\n\n3. Финансовые решения принимаются нерегулярно — пользователи откладывают финансовое планирование, потому что большие цели кажутся недостижимыми, нет понятного первого шага и отсутствует обратная связь о прогрессе.',

    solution: 'Design Challenge: как создать финансовый продукт, который помогает пользователю не просто отслеживать деньги, а формировать устойчивые финансовые привычки и уверенно двигаться к своим целям?\n\nProduct Vision: создать AI-финансового партнёра, который помогает пользователю понимать своё финансовое состояние, ставить цели, формировать план действий и принимать решения без сложной аналитики. Не «приложение показывает баланс», а «приложение помогает понять, что делать дальше».\n\nОсновные продуктовые сценарии:\n\n1. Goal-based Savings — пользователь создаёт финансовую цель (квартира, путешествие, крупная покупка, финансовая подушка). AI помогает определить комфортный темп накопления, рассчитать путь к цели и показывать прогресс.\n\n2. AI Financial Insights — AI анализирует доходы, расходы и финансовые привычки и предлагает персональные рекомендации, например: «В этом месяце у вас есть возможность увеличить накопления на 5 000 ₽ без изменения привычного уровня расходов».\n\n3. Smart Purchase Decision — перед крупной покупкой AI помогает оценить последствия и предлагает варианты действий, после чего обновляет прогноз (подробнее — в сценарии ниже).',

    competitorAnalysis: 'Банковские приложения — удобные операции, но мало поддержки финансовых целей\nФинансовые трекеры — контроль расходов, но нет долгосрочной стратегии\nИнвестиционные сервисы — инструменты роста, но высокий порог входа\n\nВозможность продукта: создать не просто сервис управления деньгами, а <strong class="proj-highlight">AI-слой между финансовыми данными</strong>, пониманием ситуации и принятием решения.',
    competitorImage: '',

    research: {
      userProblems: [
        'Пользователь видит баланс и отдельные операции, но не понимает общую картину: насколько он близок к цели, какие действия помогут улучшить ситуацию и как сегодняшние решения повлияют на будущее.',
        'Финансовая терминология (доходность, риск, портфель, инструменты инвестирования) создаёт ощущение неопределённости и снижает желание разбираться в финансовых продуктах.',
        'Финансовые решения принимаются нерегулярно: большие цели кажутся недостижимыми, нет понятного первого шага и обратной связи о прогрессе.',
      ],
      valueHypotheses: [
        'Пользователи готовы принимать финансовые решения, если понимают, почему предлагается действие, какой будет результат и как это влияет на их цели.',
        'Регулярные микро-шаги (небольшие накопления, понятный прогресс, автоматические действия) формируют более устойчивую привычку, чем редкие крупные решения.',
      ],
      behaviorHypotheses: [
        'Пользователи с разным уровнем дохода сталкиваются со схожей финансовой тревожностью — им не хватает не информации, а уверенности.',
        'Пользователи откладывают финансовое планирование, если не видят понятного первого шага и обратной связи о прогрессе.',
      ],
      insights: [
        'Финансовая тревожность связана не только с доходом: главная потребность — не больше информации, а больше уверенности.',
        'Пользователям нужен перевод сложного финансового языка: почему предлагается действие, какой будет результат и как это влияет на их цели.',
        'Маленькие регулярные действия формируют более устойчивое поведение, чем редкие крупные решения.',
      ],
    },
    researchLink: 'https://www.figma.com/design/qKWn6ITFDRQpSaqm1ybAgV/FINCORP-Service-%D0%B1%D0%B0%D0%BD%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F-%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D0%B0?node-id=6011-9524&t=iCq6m8JjojlXfDCq-1',
    researchImage: 'assets/Исследование_1_Fin.jpg',
    frameworksLink: 'https://www.figma.com/design/qKWn6ITFDRQpSaqm1ybAgV/FINCORP-Service-%D0%B1%D0%B0%D0%BD%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F-%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D0%B0?node-id=6472-6322&t=Dfme0MPLEWMfzThW-1',

    jtbd: 'Когда я хочу улучшить своё финансовое состояние, я хочу понимать, что происходит с моими деньгами и какие действия помогут приблизиться к цели, чтобы чувствовать контроль и уверенность в будущем.',
    jtbdImage: 'assets/Исследование_2_Fin.jpg',
    jtbdGroups: [
      {
        title: 'Financial Security',
        description: 'Хотят создать финансовую подушку, накопить на важную цель и снизить финансовую тревожность. Ключевые потребности: простота, понятные рекомендации, поддержка в принятии решений.',
      },
      {
        title: 'Wealth Growth',
        description: 'Уже имеют накопления и хотят эффективнее управлять капиталом, анализировать финансовые решения и увеличивать долгосрочную отдачу. Ключевые потребности: аналитика, прогнозирование, персональные рекомендации.',
      },
    ],

    cjm: 'До использования продукта: финансовая неопределённость → самостоятельный поиск информации → решения без понимания последствий.\n\nПосле использования продукта: финансовая цель → AI анализирует ситуацию → пользователь получает понятный план → видит прогресс → формирует устойчивую финансовую привычку.',
    cjmImage: '',

    keyScenarios: 'Design Principles: Progress over numbers — фокус не только на цифрах, а на движении к цели. Explain before automate — любое автоматическое решение должно быть понятным пользователю. Reduce financial anxiety — интерфейс помогает принимать решения спокойно и уверенно. Personal context first — рекомендации строятся вокруг жизненных целей пользователя.',
    keyScenariosImage: 'assets/FINCORP_key_scenarios.png',

    userFlow: 'Регистрация → AI финансовая диагностика → Определение целей → Персональный финансовый план → Ежедневное взаимодействие → AI-инсайты → Достижение целей',
    userflowImage: 'assets/FINCORP_userflow.png',
    userFlowLink: 'https://www.figma.com/design/qKWn6ITFDRQpSaqm1ybAgV/FINCORP-Service-%D0%B1%D0%B0%D0%BD%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F-%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D0%B0?node-id=6472-6322&t=Dfme0MPLEWMfzThW-1',

    purchaseScenario: 'Smart Purchase Decision: перед крупной покупкой AI помогает оценить последствия. Например, пользователь хочет купить AirPods за 18 990 ₽. AI анализирует влияние покупки на финансовую подушку, текущие цели и будущий план накопления и предлагает варианты: купить сейчас, отложить покупку или изменить план накоплений. После выбора AI обновляет прогноз.',
    purchaseScenarioImage: 'assets/FINCORP_purchase_scenario.png',

    designSystem: 'Визуальная концепция: Cyber Minimalism + Friendly AI. Основные принципы: чистая финансовая аналитика, понятная визуальная иерархия, дружелюбный AI-компонент, акцент на доверии и прогрессе.',
    uikitImage: 'assets/FINCORP_uikit.png',
    designSystemLink: 'https://www.figma.com/design/qKWn6ITFDRQpSaqm1ybAgV/FINCORP-Service-%D0%B1%D0%B0%D0%BD%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F-%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D0%B0?node-id=6472-6329&t=iCq6m8JjojlXfDCq-1',

    prototype: 'Прототип проводит пользователя через путь от AI финансовой диагностики и постановки цели до получения персонального плана и первых AI-инсайтов — с акцентом на прозрачность и объяснимость каждого действия AI.',
    prototypeImage: 'assets/FINCORP_prototype.png',
    prototypeLink: 'https://www.figma.com/design/qKWn6ITFDRQpSaqm1ybAgV/FINCORP-Service-%D0%B1%D0%B0%D0%BD%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F-%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D0%B0?node-id=6288-11759&t=Dfme0MPLEWMfzThW-1',

    results:  'В рамках проекта была создана концепция финансового продукта, который объединяет управление деньгами, поведенческие механики, AI-поддержку и обучение пользователя.\n\nГлавное изменение продуктового подхода: от финансового приложения для выполнения операций → к AI-партнёру для принятия финансовых решений.\n\nМетрики успеха:\n— Activation Rate — пользователь достигает первого ценного действия: проходит финансовую диагностику, создаёт цель, получает персональный план\n— Goal Creation Rate — доля пользователей, которые создают первую финансовую цель\n— Savings Engagement Rate — регулярность взаимодействия: просмотр прогресса, пополнение накоплений, использование рекомендаций AI\n— Retention D30 / D90 — способность продукта формировать долгосрочную привычку использования\n— AI Recommendation Acceptance Rate — доля рекомендаций, которые пользователь принимает или использует в своих финансовых решениях\n\n<strong class="proj-highlight">Senior Designer Reflection:</strong> в этом проекте я работала не только над интерфейсом финансового сервиса — моя задача была создать систему взаимодействия, которая помогает пользователю лучше понимать своё финансовое состояние, снижать тревожность и формировать устойчивые привычки. В финансовых продуктах UX — это не только удобство использования, а создание доверия, понимания и уверенности в каждом решении.',
    resultsImage: 'assets/FINCORP_results.png',

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
    title: { ru: 'Core Treasury', en: 'Core Treasury' },
    cardDesc: { ru: 'Корпоративная treasury-платформа для управления ликвидностью', en: 'Corporate treasury platform for liquidity management' },
    bannerColor: '#1D9E75',
    bannerImg: 'assets/CORE_BIG.jpg',
    cardImg: 'assets/Core.jpg',

    images: [
      'assets/15.png',
      'assets/Frame 2131328701.png',
      'assets/6.png'
    ],

    context: 'Core Treasury — корпоративная treasury-платформа для средних и крупных компаний, которые управляют ликвидностью через множество банков, валют и юридических лиц. Продукт решает проблему отсутствия единого, актуального и доверенного источника данных о деньгах компании.',

    problem: 'Казначейские подразделения управляют ликвидностью через десятки несвязанных источников: ERP, банки, Excel и ручную отчётность. Данные фрагментированы, прогнозы не совпадают с реальностью, кассовые разрывы выявляются постфактум, а решения принимаются в кризис.',
    problemImage: 'assets/CORE_problem.png',

    solution: 'Core Treasury объединяет мониторинг ликвидности, прогнозирование и сценарное моделирование в единый операционный контур, превращая treasury из отчётной функции в центр управления ликвидностью.',

    competitorAnalysis: 'Kyriba — лидер рынка, но перегруженный UX\nGTreasury — сильное прогнозирование, высокий порог входа\nSAP Treasury — мощная интеграция, слабый UX\nTIS — хорошая visibility, сложная настройка',
    competitorLink: 'https://www.figma.com/design/WMwmseisn5bklCo8ry63Ax/Core-Treasury?node-id=6004-9381&t=HGMOQk31tZlekgnU-1',

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
    researchLink: 'https://www.figma.com/design/WMwmseisn5bklCo8ry63Ax/Core-Treasury?node-id=6004-9381&t=HGMOQk31tZlekgnU-1',
    researchImage: 'assets/Исследование_1_Core.jpg',

    jtbd: 'Пользователи нанимают продукт для контроля ликвидности, предотвращения кассовых разрывов и получения единого источника финансовой правды в реальном времени.',
    jtbdImage: 'assets/Исследование_2_Core.jpg',

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
    jtbdGroupsImage: 'assets/CORE_users.png',
    frameworksLink: 'https://www.figma.com/design/WMwmseisn5bklCo8ry63Ax/Core-Treasury?node-id=8610-2768&t=HGMOQk31tZlekgnU-1',

    cjm: 'Переход от реактивного контроля к превентивному управлению ликвидностью через единый источник данных и сценарное моделирование.',

    userFlow: 'Регистрация → подключение банков → консолидация данных → мониторинг ликвидности → сценарное моделирование → принятие решений',

    purchaseScenarioTitle: 'Пользовательский сценарий',
    purchaseScenario: 'Система обнаруживает потенциальный кассовый разрыв через 14 дней и формирует алёрт. CFO открывает детали и разбирается в причинах риска, тестирует сценарии в песочнице, выбирает лучшее действие с рекомендацией ИИ, отправляет решение на согласование и исполняет его — риск закрыт, прогноз ликвидности обновлён.',
    purchaseScenarioImage: 'assets/CORE_user_scenario.png',

    designSystem: 'High-density financial UI system с акцентом на скорость считывания и семантику рисков',
    designSystemLink: 'https://www.figma.com/design/WMwmseisn5bklCo8ry63Ax/Core-Treasury?node-id=8611-2799&t=HGMOQk31tZlekgnU-1',
    uikitImage: 'assets/Design_System_Core.jpg',

    prototype: 'Прототип охватывает полный цикл работы казначея: мониторинг, операции, аналитика, сценарии и отчёты.',
    prototypeLink: 'https://www.figma.com/design/WMwmseisn5bklCo8ry63Ax/Core-Treasury?node-id=8611-2796&t=11GHZNVYzlG4TsmR-1',
    prototypeImage: 'assets/Прототип_Core.jpg',

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
    title: { ru: 'AI PM Assistant', en: 'AI PM Assistant' },
    cardDesc: { ru: 'AI-инструмент для продуктовых команд', en: 'AI tool for product teams' },
    bannerColor: '#BA7517',
    bannerImg: 'assets/PM_BIG.jpg',
    cardImg: 'assets/PM.jpg',

    images: [
      'assets/Frame 148.png',
      'assets/Frame 1.png'
    ],

    context: 'Роль: Senior Product Designer.\n\nAI PM Assistant — AI-инструмент для продуктовых команд, который помогает Product Managers и командам быстрее переходить от идеи к решению: формировать продуктовые гипотезы, анализировать пользовательские проблемы, структурировать функции, создавать PRD и принимать продуктовые решения. Продукт используется в рабочих сценариях, где важно быстро превращать неструктурированные идеи в понятные продуктовые действия.\n\nПосле анализа поведения пользователей стало понятно, что большинство взаимодействий оставались поверхностными: пользователи воспринимали AI как обычный чат-бот и не использовали его потенциал как инструмент продуктового мышления.',

    problem: 'AI давал ответы, но не помогал принимать продуктовые решения.\n\nАнализ пользовательских сессий выявил несколько ключевых проблем:\n\n1. Низкое качество входящих запросов — пользователи часто формулировали слишком общие вопросы: «Как улучшить приложение?», «Придумай новую функцию». Без контекста AI не мог дать глубокий продуктовый результат.\n\n2. AI воспринимался как чат, а не рабочий инструмент — текущий сценарий выглядел так: Запрос → Ответ → Завершение. Но реальный процесс Product Manager выглядит иначе: Проблема → Исследование → Гипотеза → Решение → PRD → Эксперимент. Интерфейс не поддерживал этот процесс.\n\n3. Отсутствовала структура продуктовых задач — пользователь начинал работу с пустого поля и должен был самостоятельно определить, что спросить, какой контекст предоставить и какой результат ожидать. Это создавало высокую когнитивную нагрузку.',

    solution: 'Design Challenge: как превратить AI PM Assistant из универсального чат-интерфейса в продуктового партнёра, который помогает PM структурировать задачи и принимать решения?\n\nКлючевой инсайт: главная проблема была не в качестве AI-модели, а в отсутствии UX-структуры, которая помогает пользователю правильно сформулировать задачу и перейти от идеи к решению. Чем меньше структуры получает пользователь на входе, тем менее полезным становится результат взаимодействия с AI.\n\nМы изменили модель взаимодействия. Было: пустой чат — пользователь пишет запрос, AI отвечает. Стало: структурированный AI workflow — продуктовая цель → выбор сценария → добавление контекста → AI-анализ → структурированный результат → итеративная работа над решением.\n\nРешение:\n\n1. Scenario-based Entry Points — вместо пустого поля пользователь выбирает тип задачи: Generate Ideas (поиск новых продуктовых возможностей), Analyze Problem (анализ пользовательской проблемы), Create Hypothesis (формирование и проверка гипотез), Build PRD (создание структуры продуктового требования). Это помогло пользователям понимать возможности AI и быстрее начинать работу.\n\n2. Prompt Guidance System — добавлены направляющие элементы: примеры качественных запросов, подсказки по структуре, рекомендации по добавлению контекста. До: «Improve onboarding». После: «Проанализируй причины падения активации новых пользователей. Цель — увеличить completion rate onboarding. Предложи гипотезы и варианты экспериментов».\n\n3. Product Thinking Workflow — ответ AI был преобразован из обычного текста в рабочий продуктовый артефакт: Проблема → User Insight → Гипотеза → Решение → Метрики успеха → План эксперимента.\n\n4. Iterative AI Collaboration — добавлена возможность развивать результат: AI формирует гипотезы → PM уточняет → AI помогает приоритизировать → создаётся PRD. Взаимодействие стало ближе к реальному процессу работы Product Manager.',

    competitorAnalysis: 'Jira — управление задачами, но нет поддержки продуктового мышления\nNotion — гибкая база знаний, но не структурирует процесс принятия решений\nAsana — управление workflow, но ограниченная аналитика\nSlack — коммуникация, но теряется проектный контекст\n\nВозможность: создать AI-слой между данными, контекстом и продуктовым решением.',

    competitorImage: '',

    research: {
      userProblems: [
        'Информация распределена между разными системами',
        'Много повторяющихся вопросов от команды',
        'Большая часть контекста хранится в голове PM',
        'Много времени уходит на ручную подготовку документов',
        'Team Member зависит от PM в получении статуса задач, контекста решений и документации',
        'Поиск нужной информации занимает много времени'
      ],
      valueHypotheses: [
        'AI-слой между данными, контекстом и продуктовым решением снижает нагрузку на PM и уменьшает количество повторяющихся вопросов',
        'Структурированный ввод (сценарий + контекст) повышает качество и полезность ответов AI'
      ],
      behaviorHypotheses: [
        'Пользователи формулируют слишком общие запросы, если не получают направляющей структуры на входе',
        'Без чётких сценариев пользователи воспринимают AI как чат-бот, а не как рабочий инструмент'
      ],
      insights: [
        'Чем меньше структуры получает пользователь на входе, тем менее полезным становится результат взаимодействия с AI',
        'Реальный процесс PM (Проблема → Исследование → Гипотеза → Решение → PRD → Эксперимент) не совпадает с моделью «вопрос-ответ»',
        'Пользователю нужна не более мощная модель, а понятная UX-структура для формулирования задачи'
      ]
    },
    researchLink: 'https://www.figma.com/design/mmPUfztaSjEcBFTs0EXhcY/AI-PM-Assistant?node-id=10002-1884&t=tzdVtiuN3fzFs89G-1',

    jtbd: 'Когда мне нужно принять продуктовое решение, я хочу быстро структурировать проблему и варианты решения, чтобы двигаться дальше без постоянного поиска информации и дополнительных синхронизаций.',

    jtbdGroups: [
      {
        title: 'Product Manager',
        description: 'Быстро анализировать проблемы, создавать гипотезы, готовить PRD и принимать решения на основе данных. Боли: информация распределена между системами, много повторяющихся вопросов от команды, контекст хранится в голове PM, много времени уходит на ручную подготовку документов'
      },
      {
        title: 'Team Member',
        description: 'Получать статус задач, контекст решений и документацию. Боли: зависимость от PM, поиск информации занимает много времени'
      }
    ],
    jtbdGroupsImage: 'assets/AIPM_users.png',
    frameworksLink: 'https://www.figma.com/design/mmPUfztaSjEcBFTs0EXhcY/AI-PM-Assistant?node-id=10002-1885&t=tzdVtiuN3fzFs89G-1',

    cjm: 'Переход от плоского сценария «Запрос → Ответ → Завершение» к процессу, который повторяет реальную работу Product Manager: Проблема → Исследование → Гипотеза → Решение → PRD → Эксперимент.',

    userFlow: 'Старт → Выбор продуктового сценария → Добавление контекста → AI-анализ → Структурированный результат → Уточнение решения → Экспорт в PRD',
    userflowImage: 'assets/AIPM_userflow.png',

    designSystem: 'AI-first Design Principles:\n\nContext over conversation — интерфейс показывает цель, этап процесса и следующий шаг.\n\nProgressive disclosure — сложность раскрывается постепенно, чтобы снизить когнитивную нагрузку.\n\nHuman + AI collaboration — AI предлагает варианты и структуру, Product Manager принимает финальное решение.',
    uikitImage: 'assets/AIPM_design.png',
    designSystemLink: 'https://www.figma.com/design/mmPUfztaSjEcBFTs0EXhcY/AI-PM-Assistant?node-id=10002-1886&t=tzdVtiuN3fzFs89G-1',

    prototype: 'Прототип показывает ключевые сценарии: выбор продуктового сценария (идея / анализ / гипотеза / PRD), пример структурированного запроса с направляющими подсказками и преобразование ответа AI в продуктовый артефакт — Проблема → User Insight → Гипотеза → Решение → Метрики успеха → План эксперимента.',
    prototypeLink: 'https://www.figma.com/design/mmPUfztaSjEcBFTs0EXhcY/AI-PM-Assistant?node-id=8076-2943&t=QIUHChasraIJLAG3-1',

    results: 'После изменений AI PM Assistant стал:\n— понятнее для новых пользователей\n— эффективнее в сложных продуктовых сценариях\n— менее зависимым от навыков написания промптов\n— ближе к реальному процессу работы Product Manager\n\nГлавное изменение было не в генерации более красивых ответов — UX-решение изменило саму модель взаимодействия: от AI-чата → к AI-партнёру в принятии продуктовых решений.\n\nМетрики успеха:\n— Activation Rate — доля пользователей, достигающих первого полезного результата (выбор сценария, добавление контекста, получение структурированного ответа, продолжение работы с AI)\n— Completion Rate — доля пользователей, проходящих полный workflow: Проблема → Анализ → Гипотеза → Решение → PRD\n— Prompt Quality Score — качество входящих запросов: наличие цели, контекста, описания проблемы и ожидаемого формата результата\n— Time to First Valuable Output — время до создания первого продуктового артефакта: гипотезы, анализа, PRD или решения\n\nSenior Designer Reflection: моя задача была не просто улучшить интерфейс AI — я спроектировала систему взаимодействия, которая помогает пользователю формулировать проблемы, структурировать мышление и быстрее переходить от идеи к продуктовому решению. В AI-продуктах ценность создаётся не только качеством модели, но и тем, насколько хорошо UX направляет пользователя к правильному результату.',

    references: [
      { title: 'MIT + Stanford', url: 'https://www.nber.org/papers/w31161?utm_source' },
      { title: 'Microsoft + NBER (2025)', url: 'https://www.nber.org/papers/w33795?utm_source=' },
      { title: 'GitHub Copilot', url: 'https://arxiv.org/abs/2410.02091?utm_source' },
    ],

    tags: 'AI, Product Design, UX Research, Enterprise, SaaS'
  },

  // ── ПРОЕКТ 3 ── AI Design Workflow ───────────────────────
  {
    id: 3,
    hidden: true, // временно скрыт
    title: { ru: 'AI Design Workflow', en: 'AI Design Workflow' },
    cardDesc: { ru: 'Интеграция Claude Code и MCP в дизайн-процесс', en: 'Integrating Claude Code and MCP into the design process' },
    bannerColor: '#185FA5',
    bannerImg: '',
    images: [],

    context: 'Исследование и внедрение AI-инструментов в продуктовый дизайн-процесс. Интеграция Claude Code и MCP (Model Context Protocol) с Figma для генерации, доработки и прямого переноса UI-решений из дизайн-инструмента в код без ручной пересборки.',

    problem: 'Традиционные процессы дизайна требуют много ручной работы на этапах исследования, генерации вариантов и передачи макетов в разработку. Дизайнер тратит значительную часть времени не на принятие решений, а на рутинные операции: сбор референсов, отрисовку вариаций, ручной перенос спецификаций разработчику. Это удлиняет цикл от идеи до тестируемого решения и создаёт разрыв между дизайном и кодом.',

    solution: 'Внедрение AI-ассистентов (Claude, GPT, Gemini, Midjourney, ComfyUI) на всех этапах процесса — от исследования и генерации вариантов до сборки интерфейса. Ключевой элемент — прямая интеграция через MCP-протокол, которая позволяет работать с Figma из терминала: генерировать компоновки, синхронизировать токены дизайн-системы и передавать готовые решения в разработку без ручной пересборки.',

    competitorAnalysis: 'Figma AI — встроенные функции удобны, но ограничены рамками одного инструмента\nUizard / Galileo AI — быстрая генерация UI, но слабый контроль качества и брендинга\nРучной workflow (дизайнер + разработчик) — полный контроль, но высокая стоимость итерации\nПлагины-генераторы — закрывают отдельные шаги, но не связывают процесс в единый контур',
    competitorImage: '',

    research: {
      userProblems: [
        'Много рутинных операций на этапах ресёрча и прототипирования',
        'Дублирование работы между дизайнером и разработчиком при переносе UI в код',
        'Долгий цикл согласования и доработки вариантов дизайна',
        'Отсутствие единого AI-инструмента, покрывающего процесс целиком, а не отдельные шаги'
      ],
      valueHypotheses: [
        'Автоматизация рутинных операций высвобождает время дизайнера на стратегические задачи',
        'Прямая интеграция AI с Figma через MCP сокращает потери на передаче макетов в код'
      ],
      behaviorHypotheses: [
        'Дизайнеры чаще используют AI-инструменты точечно, а не как часть системного процесса',
        'Есть сопротивление внедрению AI из-за недоверия к качеству и предсказуемости результата'
      ],
      insights: [
        'Наибольший выигрыш AI даёт не в генерации финального дизайна, а в ускорении черновых итераций',
        'MCP-протокол убирает разрыв между дизайн-инструментом и кодовой базой',
        'Настройка AI-ассистента под контекст конкретного проекта повышает релевантность и качество вывода',
        'Комбинация нескольких моделей (текст, изображение, код) закрывает разные этапы процесса лучше, чем одна универсальная модель'
      ]
    },

    jtbd: 'Дизайнер хочет сократить время на рутинные операции (исследование, генерация вариантов, перенос в код) и сосредоточиться на стратегических решениях, не теряя контроль над качеством результата.',

    jtbdGroups: [
      {
        title: 'Продуктовый дизайнер',
        description: 'Нужны быстрые итерации вариантов и ускорение рутинных задач без потери контроля над финальным результатом'
      },
      {
        title: 'Разработчик',
        description: 'Нужен точный и предсказуемый перенос дизайн-решений в код без ручной пересборки макетов'
      }
    ],

    cjm: 'Переход от последовательного ручного процесса (исследование → дизайн → передача разработчику) к параллельному AI-ускоренному циклу, в котором AI закрывает рутинные операции, а дизайнер фокусируется на принятии решений и контроле качества на каждом этапе.',

    userFlow: 'Постановка задачи → AI-исследование и генерация вариантов → отбор и доработка дизайнером → перенос макета в Figma/код через MCP → ревью и правки → финальная сборка',

    designSystem: 'Гибкая система, адаптируемая под AI-сгенерированные компоненты, с чёткими токенами и правилами для сохранения консистентности при масштабировании набора решений',

    prototype: 'Прототип демонстрирует полный цикл: постановку задачи, AI-генерацию вариантов интерфейса, перенос через MCP в Figma и последующую передачу в разработку.',

    results: 'Сокращение цикла от концепции до тестируемого решения. Ускорение итераций в 3 раза при производстве визуальных решений. Снижение объёма ручной работы на этапе передачи макетов в разработку за счёт прямой интеграции через MCP.',

    references: [
      { title: 'Introducing the Model Context Protocol (Anthropic)', url: 'https://www.anthropic.com/news/model-context-protocol' },
      { title: 'Code execution with MCP: building more efficient AI agents (Anthropic)', url: 'https://www.anthropic.com/engineering/code-execution-with-mcp' },
      { title: 'Model Context Protocol — Wikipedia', url: 'https://en.wikipedia.org/wiki/Model_Context_Protocol' },
    ],

    tags: 'AI, Claude Code, MCP, Figma, Workflow'
  },

  // ── ПРОЕКТ 4 ── DroneDrop ────────────────────────────
  {
    id: 4,
    hidden: true, // временно скрыт
    title: { ru: 'DroneDrop', en: 'DroneDrop' },
    cardDesc: { ru: 'Автономная дрон-доставка последней мили', en: 'Autonomous last-mile drone delivery' },
    bannerColor: '#993556',
    bannerImg: 'assets/DRONE_BIG.png',

    images: [
      'assets/frame152.png',
      'assets/frame153.png'
    ],

    context: 'DroneDrop — сервис автономной доставки мелкой электроники и аксессуаров с использованием беспилотных летательных аппаратов. Продукт ориентирован на сценарии, в которых скорость доставки становится частью пользовательского опыта: срочная замена рабочего оборудования, забытые аксессуары, подарки «день в день» и другие покупки, требующие получения в течение часа.\n\nВ отличие от традиционных служб доставки, DroneDrop рассматривает последнюю милю как интеллектуальную систему, объединяющую автономные летательные аппараты, городскую инфраструктуру, цифровой сервис и логистическую платформу. Цель продукта — сократить время между покупкой и получением заказа, сохранив высокий уровень безопасности, прозрачности и предсказуемости процесса.',

    problem: 'Большинство сервисов экспресс-доставки оптимизируют работу курьеров, но сама модель доставки остаётся прежней.\n\nПри проектировании DroneDrop задача заключалась не в замене человека дроном, а в создании новой модели взаимодействия между пользователем, автономной системой доставки и городской инфраструктурой. Это означало необходимость учитывать сразу несколько ограничений: погодные условия, городскую застройку, безопасность пользователей, ограничения воздушного пространства, сохранность техники, сценарии отказа системы.\n\nОсновной вызов заключался в том, чтобы сделать технологически сложную систему понятной и предсказуемой для пользователя.',

    solution: 'Моя роль: Product Design, UX Strategy, Service Design, Systems Thinking, Information Architecture, Interaction Design, Prototyping. Я спроектировала пользовательский опыт, сервисную архитектуру и взаимодействие между цифровым продуктом и физической инфраструктурой доставки, уделяя особое внимание сценариям неопределённости и отказоустойчивости системы.\n\nProduct Vision: DroneDrop проектировался как сервис, который позволяет пользователю перестать думать о процессе доставки. Главная цель — сделать автономную доставку настолько понятной и предсказуемой, чтобы пользователь воспринимал её так же естественно, как вызов такси или заказ еды.\n\nИсследование: я изучила существующие модели последней мили — традиционную курьерскую доставку, постаматы, экспресс-доставку и международные проекты автономной логистики. Пользователи редко воспринимают доставку как самостоятельный сервис — для них это продолжение покупки, поэтому ожидания строятся не вокруг технологии, а вокруг ощущения контроля. Пользователь хочет понимать три вещи: где находится заказ, когда он прибудет и что произойдёт, если что-то пойдёт не по плану.\n\nКлючевой инсайт: проблема автономной доставки не в отсутствии доверия к дронам, а в том, что пользователь перестаёт понимать состояние системы. Чем менее предсказуемым становится процесс, тем быстрее снижается доверие к продукту — поэтому интерфейс должен объяснять систему раньше, чем пользователь начинает задавать вопросы.\n\nПринципы проектирования:\n\n1. Make autonomy understandable — автономная система должна объяснять свои действия простым человеческим языком.\n\n2. Design for uncertainty — не только успешная доставка, но и любые исключительные ситуации должны быть частью пользовательского сценария.\n\n3. Keep users in control — даже полностью автоматизированная доставка должна создавать ощущение контроля.\n\n4. Build trust through transparency — каждое действие системы должно быть объяснимым.\n\nВместо отдельного приложения была спроектирована сервисная платформа, объединяющая несколько компонентов.\n\nDrone Ports — получение заказа происходит через специализированные станции выдачи. Это исключает риск небезопасной посадки, защищает заказ от кражи, снижает влияние человеческого фактора и обеспечивает работу даже при отсутствии пользователя.\n\nSmart Routing — перед каждым вылетом система автоматически оценивает погодные условия, ограничения воздушного пространства, загруженность маршрутов, заряд аккумулятора и доступность ближайших Drone Port. При невозможности безопасного полёта заказ автоматически переводится на экспресс-доставку курьером без необходимости повторного оформления.\n\nSystems Thinking: DroneDrop проектировался не как интерфейс управления дроном, а как экосистема, включающая пользователей, логистическую платформу, автономные аппараты, инфраструктуру Drone Port, службы поддержки и городскую среду. Значительная часть работы была посвящена сервисным сценариям и состояниям системы, а не отдельным экранам приложения.',

    competitorAnalysis: '',

    competitorImage: '',

    jtbd: 'Когда я заказываю важный аксессуар или мелкий гаджет (например, наушники), я хочу получить его сегодня же без долгого ожидания, чтобы не прерывать рабочий процесс или не отменять планы.',

    jtbdGroups: [
      {
        title: 'Цифровые кочевники',
        description: 'Нужно заменить сломанный кабель, мышь или гарнитуру, чтобы продолжить работу.'
      },
      {
        title: 'Подарочный сегмент',
        description: 'Купили подарок в последний момент — нужно доставить его в течение часа.'
      }
    ],

    userFlow: 'Клиентское приложение позволяет оформить заказ, отслеживать маршрут дрона в реальном времени, получать уведомления о статусе доставки и подтверждать получение через QR-код.',

    purchaseScenarioTitle: 'Exception Scenarios',
    purchaseScenario: 'Особое внимание уделено сценариям отказа: пользователь не пришёл за заказом, изменение погоды во время полёта, потеря связи, аварийная посадка, закрытие зоны полётов, разряд аккумулятора, занятость Drone Port.\n\nКаждый сценарий имеет заранее спроектированную цепочку действий системы и понятную коммуникацию с пользователем.',

    results: 'Ключевые метрики.\n\nUser Experience: Time to Delivery, First Attempt Delivery Rate, Successful QR Pickup Rate, Delivery Confidence Score, CSAT.\n\nBusiness: Cost per Delivery, Fleet Utilization, Failed Delivery Rate, Operational Efficiency, Cost per Successful Delivery.\n\nReflection: проектирование автономных сервисов — это не столько задача создания интерфейса, сколько проектирование доверия между человеком и системой. Пользователь не обязан понимать, как работает автономный дрон, но он должен всегда понимать, что происходит с его заказом, почему система принимает те или иные решения и что произойдёт дальше. Именно прозрачность процессов становится ключевым фактором успешного пользовательского опыта в продуктах нового поколения.',

    tags: 'UX, Product Design, Logistics, Drone Delivery, Россия'
  },

  // ── ПРОЕКТ 5 ── Электронное меню «Панорама Лаундж» ───────
  {
    id: 5,
    title: { ru: 'Panorama Lounge', en: 'Panorama Lounge' },
    cardDesc: { ru: 'Цифровое меню для ресторана премиум-класса', en: 'Digital menu for a premium restaurant' },
    bannerColor: '#8B5E3C',
    hidden: true, // временно скрыт
    cardImg: 'assets/панорама.jpg',
    bannerImg: 'assets/Панорама_BIG.jpg',
    images: [],

    context: 'Panorama Lounge — ресторан премиум-класса в Доброграде. Несмотря на высокий уровень сервиса, опыт знакомства с меню оставался фрагментированным: гости изучали бумажное меню уже за столом, не могли заранее познакомиться с ассортиментом, а ресторан не имел возможности адаптировать предложения под спрос или анализировать интерес к отдельным позициям.\n\nПроект предполагал создание цифрового меню, которое сопровождало бы пользователя на всём пути — от знакомства с рестораном до оформления заказа.',

    problem: 'Бумажное меню хорошо выполняло роль каталога блюд, но не помогало пользователю принимать решения и не решало бизнес-задачи ресторана.\n\nВ ходе исследования были выявлены несколько ключевых проблем:\n— гости тратили много времени на выбор блюд\n— сезонные предложения оставались незаметными\n— официанты регулярно отвечали на одни и те же вопросы о составе и сочетании блюд\n— ресторан не получал данных о том, какие позиции действительно интересуют посетителей\n— потенциальные гости не могли ознакомиться с актуальным меню до посещения ресторана\n\nВ результате терялись возможности увеличить средний чек, продвигать специальные предложения и сформировать ожидания ещё до визита.',

    solution: 'Моя роль: Product Design, UX Research, Information Architecture, Interaction Design, Design System, Prototyping. Я отвечала за полный цикл проектирования продукта — исследование, формирование концепции, проектирование пользовательских сценариев, информационной архитектуры, интерфейсов и административной панели.\n\nПринципы проектирования:\n\n1. Reduce cognitive load — сократить количество решений, которые пользователь принимает при выборе блюда.\n\n2. Support confident decision-making — помочь пользователю сделать выбор без необходимости обращаться к официанту.\n\n3. Surface relevant content — продвигать сезонные предложения и рекомендации естественным образом внутри сценария выбора.\n\n4. Design for multiple contexts — один продукт должен одинаково хорошо работать как при знакомстве с рестораном дома, так и непосредственно за столом.\n\nВместо цифровой копии бумажного меню был спроектирован самостоятельный продукт, объединяющий несколько сценариев использования.\n\nДля гостей: просмотр меню через сайт или QR-код, удобная навигация по категориям, поиск, фотографии блюд, состав и аллергены, рекомендации шеф-повара, подбор напитков, избранное, бронирование столика, вызов официанта.\n\nДля бизнеса: административная панель, управление ассортиментом, публикация сезонных предложений, аналитика просмотров и популярности блюд, отслеживание пользовательского интереса к меню.\n\nКлючевым изменением стало переосмысление роли цифрового меню: вместо каталога блюд продукт превратился в инструмент принятия решений. Для гостей он сокращает время выбора и делает взаимодействие более комфортным. Для ресторана — становится каналом коммуникации, продвижения специальных предложений и источником данных о пользовательском поведении.',

    competitorAnalysis: 'Я проанализировала существующие цифровые решения рынка: QR-меню, сайты ресторанов и сервисы бронирования. Исследование показало, что большинство продуктов сосредоточены на отображении информации, но практически не помогают пользователю принимать решение.\n\nГлавный инсайт заключался в том, что проблема заключается не в отсутствии информации, а в её представлении. Гостям важно быстро ответить на вопросы: что выбрать, подойдёт ли блюдо именно мне, с чем его лучше сочетать, стоит ли вообще посетить ресторан.',

    competitorImage: '',

    research: {
      userProblems: [
        'Гость долго выбирает блюда без визуальной подачи и понятной структуры меню',
        'Информация о ресторане и меню либо отсутствует онлайн, либо представлена неудобно',
        'Нет рекомендаций и подсказок по сочетанию блюд и напитков',
        'Официанты перегружены консультациями по составу и аллергенам'
      ],
      valueHypotheses: [
        'Визуальная подача блюд и рекомендации сокращают время выбора и повышают вероятность заказа',
        'Возможность изучить меню до визита увеличивает конверсию в бронирование'
      ],
      behaviorHypotheses: [
        'Гости предпочитают самостоятельно изучать меню, а не расспрашивать официанта',
        'Рекомендации шефа и сочетания блюд влияют на увеличение среднего чека'
      ],
      insights: [
        'Проблема не в отсутствии информации, а в неудобной подаче и отсутствии персонализации',
        'Аналитика просмотров и заказов позволяет владельцу оперативно управлять ассортиментом',
        'Сезонные предложения плохо продвигаются без отдельного цифрового канала',
        'Часть гостей принимает решение о посещении ещё до визита — на основе доступности меню онлайн'
      ]
    },

    jtbd: 'Гость, который приходит в ресторан или планирует его посетить, хочет быстро понять ассортимент и выбрать подходящие блюда, чтобы получить приятный опыт без лишних затрат времени. Владелец хочет быстро обновлять меню и отслеживать популярность блюд, чтобы увеличивать продажи и улучшать сервис.',

    jtbdGroups: [
      {
        title: 'Гости ресторана',
        description: 'Хотят заранее понять ассортимент, цены и фирменные блюда, получить рекомендации и забронировать столик'
      },
      {
        title: 'Владелец и персонал',
        description: 'Нужно оперативно управлять меню, отслеживать популярность блюд и снижать нагрузку на официантов'
      }
    ],

    cjm: 'Переход от неопределённости («подходит ли ресторан, что заказать») к уверенному выбору: гость знакомится с меню до визита или по QR-коду за столом, видит фотографии, состав и рекомендации шефа, добавляет блюда в избранное или в заказ — и приходит в ресторан уже с понятным ожиданием и сделанным выбором.',

    userFlow: 'Сценарий 1 (до визита): Главная → Меню → Категория → Карточка блюда → Избранное → Бронирование → Посещение. Сценарий 2 (в ресторане): Сканирование QR → Меню → Категория → Карточка блюда → Добавление в заказ → Корзина → Подтверждение → Отправка официанту → Получение заказа.',

    designSystem: 'Премиальный визуальный язык, соответствующий атмосфере ресторана — акцент на фотографиях блюд и лёгкой, ненавязчивой навигации по категориям',

    prototype: 'Прототип охватывает оба сценария использования — изучение меню до визита с бронированием и заказ через QR-код за столом — а также админ-панель для управления позициями и просмотра аналитики.',

    results: 'Предложенная концепция позволяла решить сразу несколько задач: сократить время выбора блюд, увеличить видимость сезонных предложений, снизить нагрузку на персонал, повысить вероятность бронирования ещё до визита, предоставить владельцу данные для принятия продуктовых решений на основе поведения пользователей.\n\nКлючевые метрики: среднее время выбора блюда, глубина просмотра меню, конверсия в бронирование, конверсия в заказ, средний чек, доля заказов сезонных предложений, удовлетворённость пользователей (NPS/CSAT).',

    tags: 'UX, Product Design, HoReCa, Digital Menu, Figma'
  },

  // ── ПРОЕКТ 6 ── Разбуди Деда Мороза ───────────────────────
  {
    id: 6,
    title: { ru: 'Разбуди Деда Мороза', en: 'Wake Up Santa' },
    cardDesc: { ru: 'Игровой e-commerce лендинг с коллективным прогрессом', en: 'Gamified e-commerce landing with collective progress' },
    bannerColor: '#B23A48',
    bannerImg: 'assets/Beyosa.ru_BIG.png',
    cardImg: 'assets/Beyosa.ru.jpg',
    hidden: true,
    images: [],

    context: '«Разбуди Деда Мороза» — сезонный e-commerce лендинг для товара Body Pillow (обнимашка), выстроенный вокруг игровой механики коллективного прогресса: каждая покупка становится вкладом в общую новогоднюю миссию.',

    problem: 'Стандартные gift-лендинги воспринимаются как статичная витрина товара: у пользователя нет причины купить именно сейчас, нет ощущения участия в событии, а retention остаётся низким из-за отсутствия поводов вернуться на сайт.',

    solution: 'Лендинг спроектирован как живая система прогресса с коллективной целью — покупка становится вкладом в общую миссию, подкреплённым live-активностью других пользователей, промежуточными наградами (milestones) и социальным доказательством.',

    competitorAnalysis: 'Классические gift-лендинги — статичная витрина без эмоционального вовлечения\nСезонные email-рассылки — низкая вовлечённость, отсутствие интерактива\nМаркетплейсы — широкий выбор, но нет эмоционального контекста и ощущения участия\nИгровые промо-акции брендов — вовлекают, но редко напрямую связаны с покупкой',

    competitorImage: '',

    research: {
      userProblems: [
        'Низкая вовлечённость в стандартные gift-лендинги',
        'Отсутствие причины купить именно сейчас',
        'Нет ощущения участия в общем событии',
        'Слабый retention — нет поводов вернуться на сайт'
      ],
      valueHypotheses: [
        'Видимый общий прогресс усиливает мотивацию к покупке',
        'Мгновенная обратная связь после покупки повышает удовлетворённость и доверие к механике'
      ],
      behaviorHypotheses: [
        'Новогодние покупки чаще совершаются импульсивно',
        'Социальное участие и live-активность других пользователей усиливают мотивацию к действию',
        'Ощущение «почти достигнутой цели» подталкивает к покупке здесь и сейчас'
      ],
      insights: [
        'Пользователь покупает не продукт, а эмоциональный контекст и ощущение прогресса',
        'Игровой прогресс убеждает сильнее рационального сравнения товаров',
        'Промежуточные награды удерживают внимание лучше одной финальной цели',
        'Активность других участников формирует социальное доказательство и снижает сомнения в покупке'
      ]
    },

    jtbd: 'Пользователь хочет быстро выбрать эмоциональный подарок, почувствовать участие в общей активности и получить понятный повод купить именно сейчас, а не откладывать решение.',

    jtbdGroups: [
      {
        title: 'Покупатели подарков',
        description: 'Хотят быстро выбрать эмоциональный, «живой» подарок и не тратить время на сравнение множества товаров'
      },
      {
        title: 'Участники события',
        description: 'Вовлекаются через live-прогресс и социальное доказательство, возвращаются проверить статус общей цели'
      }
    ],

    cjm: 'Переход от пассивного просмотра витрины к активному участию: пользователь заходит на лендинг, быстро считывает механику через live-счётчик и прогресс-бар, совершает покупку, мгновенно видит свой вклад в общую цель и возвращается позже, чтобы проверить прогресс и обновления.',

    userFlow: 'Вход на лендинг → знакомство с механикой прогресса → просмотр товара → покупка → мгновенное обновление общего прогресса → социальное подтверждение (лента активности) → возвращение для проверки прогресса',

    designSystem: 'Тёплая праздничная палитра: красный — срочность, бежевый — уют, золотой — награда. Ключевые компоненты — анимированный прогресс-бар, live-счётчик, лента активности, карточки milestone-наград.',

    prototype: 'Прототип включает ключевые экраны: hero с live-системой прогресса, карточку товара, ленту активности других покупателей, систему промежуточных наград, блок социального доказательства и финальный CTA с шерингом.',
    prototypeLink: 'https://www.figma.com/design/vTgSN0n37HFla5d1n7odp7/%D0%A0%D0%B0%D0%B7%D0%B1%D1%83%D0%B4%D0%B8-%D0%94%D0%B5%D0%B4%D0%B0?node-id=0-1&t=0DgnakFNuGwSq8d8-1',

    results: 'Ожидаемый эффект: рост конверсии за счёт ощущения срочности, рост возвратов благодаря return-loop вокруг прогресса, увеличение времени на сайте и рост социального шеринга.',

    tags: 'UX, Growth Design, E-commerce, Gamification, Landing Page'
  },

  // ── ПРОЕКТ 7 ── Доброград: платформа ипотеки и жилья ─────
  {
    id: 7,
    title: { ru: 'Доброград Ипотека', en: 'Dobrograd Mortgage' },
    cardDesc: { ru: 'Платформа прозрачного выбора ипотеки и жилья', en: 'Platform for transparent mortgage and housing selection' },
    bannerColor: '#3B6E8F',
    bannerImg: 'assets/Dobrograd_BIG.png',
    cardImg: 'assets/Dobrograd.jpg',
    hidden: true,
    images: [],

    context: 'Доброград — платформа прозрачного выбора ипотеки и жилья, которая объединяет ипотечные программы, банковские предложения, рассрочки от застройщика и калькулятор платежей в едином сценарии выбора.',

    problem: 'Пользователь сталкивается не с нехваткой информации об ипотеке, а с её избыточностью и непрозрачностью: сложная терминология, недоверие к расчётам и итоговой переплате, страх ошибки в долгосрочном обязательстве и необходимость вручную пересчитывать сценарии в разных банках.',

    solution: 'Платформа превращает выбор ипотеки в прозрачный, управляемый сценарий: все решения переводятся в понятный ежемесячный платёж, банки и программы сравниваются в едином интерфейсе, а живой калькулятор показывает, «потянет» ли пользователь конкретный сценарий.',

    competitorAnalysis: 'Банки (Сбер, ВТБ и др.) — перегружают цифрами без объяснений\nАгрегаторы недвижимости — сильны в подборе объектов, слабы в прозрачности условий\nЗастройщики — скрывают логику расчётов за менеджером\nИпотечные брокеры — персональный подход, но не масштабируется и не прозрачен для пользователя',

    competitorImage: '',

    research: {
      userProblems: [
        'Перегруженный выбор между банками, ставками и программами',
        'Сложная финансовая терминология, непонятная без объяснений',
        'Отсутствие понимания, что подходит лично пользователю',
        'Недоверие к расчётам и итоговой переплате',
        'Страх ошибки в долгосрочном финансовом обязательстве'
      ],
      valueHypotheses: [
        'Перевод всех условий в ежемесячный платёж снижает когнитивную нагрузку и повышает доверие',
        'Возможность сравнения банков в едином интерфейсе увеличивает уверенность в решении'
      ],
      behaviorHypotheses: [
        'Пользователь принимает решение не через ставку, а через размер ежемесячного платежа',
        'Решение принимается итеративно: пользователь многократно меняет параметры и пересчитывает сценарии перед выбором'
      ],
      insights: [
        'Ставка без контекста не имеет ценности для пользователя — решение принимается через monthly payment',
        'Доверие важнее выгоды: пользователь скорее выберет понятный вариант, чем формально более выгодный, но непрозрачный',
        'Рынок конкурирует не интерфейсами, а источниками доверия',
        'Прозрачность источника данных и логики расчёта снижает ощущение «чёрного ящика»'
      ]
    },

    jtbd: 'На разных этапах пользователь хочет: понять, может ли он позволить себе жильё; изучить доступные варианты на рынке; сравнить условия и выбрать комфортный платёж; убедиться, что решение безопасно и не станет ошибкой.',

    jtbdGroups: [
      {
        title: 'Покупатели первого жилья',
        description: 'Высокая тревожность, низкая финансовая грамотность, страх ошибки при выборе ипотеки'
      },
      {
        title: 'Оптимизаторы условий',
        description: 'Уже знакомы с ипотекой, сравнивают ставки и банки, ищут более выгодные и гибкие условия'
      }
    ],

    cjm: 'Переход от тревожной неопределённости («что мне выбрать и потяну ли я это») к уверенному решению: пользователь начинает с оценки бюджета, исследует варианты жилья и программ, итеративно сравнивает банки и пересчитывает сценарии, а затем переходит к заявке с ощущением контроля и понятной финансовой картиной.',

    userFlow: 'Вход на платформу → выбор объекта или параметров бюджета → первичный расчёт платежа → итеративное сравнение банков и программ с изменением параметров → выбор комфортного сценария → заявка на консультацию/одобрение',

    designSystem: '«Financial clarity interface» — визуализация платежей, live-калькулятор с мгновенным пересчётом, sticky-блок ежемесячного платежа, карточки банков и accordion для ипотечных программ',

    prototype: 'Прототип демонстрирует полный сценарий: подбор объекта, живой пересчёт ежемесячного платежа при изменении параметров, сравнение банковских предложений и переход к заявке.',
    prototypeLink: 'https://www.figma.com/design/aPaopHrRCHxvmctS2g9jbl/dobrograd-ipoteka?node-id=6013-1357&t=YhMG5t68rY5pw8Oc-1',

    results: 'Ожидаемый эффект для пользователя — снижение тревожности, ускорение принятия решения и рост доверия к процессу. Для бизнеса — рост конверсии в заявку, снижение зависимости от менеджеров и увеличение числа сравнений (engagement loop).',

    tags: 'UX Research, Product Design, Fintech, PropTech, Figma'
  },


];


/* ============================================================
   ПЕРЕВОД КОНТЕНТА ПРОЕКТОВ (RU / EN)

   Длинные текстовые поля проектов (context, problem, solution,
   research, jtbdGroups, references и т.д.) переведены отдельно
   в translations.js (TRANSLATIONS_EN, SECTION_TITLES).

   Эти функции берут перевод для currentLang, а если для
   конкретного поля/языка перевода нет — показывают русский
   оригинал, чтобы страница никогда не оставалась пустой.
============================================================ */

// Простое текстовое поле проекта: p.context, p.problem, p.solution...
function tr(p, field) {
  if (currentLang === 'en') {
    const en = TRANSLATIONS_EN[p.id];
    if (en && en[field] !== undefined) return en[field];
  }
  return p[field];
}

// Массив внутри p.research: userProblems / valueHypotheses / behaviorHypotheses / insights
function trResearch(p, field) {
  if (currentLang === 'en') {
    const en = TRANSLATIONS_EN[p.id];
    if (en && en.research && en.research[field]) return en.research[field];
  }
  return (p.research && p.research[field]) || [];
}

// p.jtbdGroups — массив {title, description}
function trGroups(p) {
  if (currentLang === 'en') {
    const en = TRANSLATIONS_EN[p.id];
    if (en && en.jtbdGroups) return en.jtbdGroups;
  }
  return p.jtbdGroups || [];
}

// p.references — массив {title, url}; переводим только title, url общий
function trReferences(p) {
  if (currentLang === 'en' && p.references) {
    const en = TRANSLATIONS_EN[p.id];
    if (en && en.references) {
      return p.references.map((ref, i) => ({
        url: ref.url,
        title: (en.references[i] && en.references[i].title) || ref.title,
      }));
    }
  }
  return p.references;
}

// Заголовок блока ("Контекст"/"Context" и т.д.) — см. SECTION_TITLES в translations.js
function st(key) {
  const entry = SECTION_TITLES[key];
  return (entry && entry[currentLang]) || (entry && entry.ru) || key;
}


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

function isMobileCarousel() {
  return window.matchMedia('(max-width: 768px)').matches;
}

// ВРЕМЕННО ОТКЛЮЧЕНО: скролл колесом мыши в блоке проектов на десктопе.
// Все карточки теперь помещаются в один ряд без прокрутки.
// Чтобы вернуть скролл — поставь DESKTOP_SCROLL_ENABLED = true.
const DESKTOP_SCROLL_ENABLED = false;

wrapper.addEventListener('wheel', (e) => {
  if (!DESKTOP_SCROLL_ENABLED) return;
  if (isMobileCarousel()) return; // mobile uses native horizontal touch scroll instead

  const atStart = hPos <= 0;
  const atEnd   = hPos >= maxScroll();

  if ((e.deltaY > 0 && !atEnd) || (e.deltaY < 0 && !atStart)) {
    e.preventDefault();
    hPos = Math.max(0, Math.min(maxScroll(), hPos + e.deltaY * 1.2));
    track.style.transform = `translateX(-${hPos}px)`;
  }
}, { passive: false });

// На мобильных горизонтальный скролл карточек — нативный (overflow-x: auto в CSS),
// поэтому здесь никакого JS для тача не требуется.

window.addEventListener('resize', () => {
  if (isMobileCarousel()) {
    hPos = 0;
    track.style.transform = '';
  }
});


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


let currentOpenProjectId = null;

function openProject(id) {
  id = Number(id);
  const p = PROJECTS.find(x => x.id === id);

  if (!p) {
    console.error('Project not found:', id);
    return;
  }

  const cardTitle = (p.title && p.title[currentLang]) || (p.title && p.title.ru) || 'Project';
  const titleEl = document.getElementById("proj-title");
  if (titleEl) titleEl.textContent = cardTitle;

  const banner = document.getElementById("proj-banner");
  banner.style.background = "#ffffff";

  const bg = document.getElementById("proj-banner-bg");
  bg.style.backgroundImage = p.bannerImg ? `url('${p.bannerImg}')` : "none";

  const tagsValue = tr(p, 'tags');
  const tagsHtml = tagsValue
    ? (Array.isArray(tagsValue) ? tagsValue : tagsValue.split(","))
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

  function section(title, text, link, id, headerImg) {
    if (!text) return "";
    const linkHtml = link
      ? `<a class="figma-link" href="${link}" target="_blank" rel="noopener">${st('figmaLink')}</a>`
      : "";
    const idAttr = id ? ` id="${id}"` : "";
    const headerImgHtml = headerImg
      ? `<div class="proj-media"><img src="${headerImg}" alt=""></div>`
      : "";
    return `
      <div class="proj-section"${idAttr}>
        <div class="proj-section-head">
          <h3>${title}</h3>
          ${linkHtml}
        </div>
        ${headerImgHtml}
        <p>${text}</p>
      </div>
    `;
  }

  let html = "";

  if (p.id === 0) {
    html += `<h1 class="proj-big-title">Эмоциональный дизайн в приложении<br>финансов</h1>`;
    html += `<p class="proj-role-line">Роль: Senior Product Designer</p>`;
  }

  html += section(st('context'), tr(p, 'context'));
  if (p.id === 0) {
    html += image('assets/FinCorp_about.jpg');
  }
  html += section(st('problem'), tr(p, 'problem'), null, "proj-problem");
  html += image(p.problemImage);
  html += image(p.solutionImage);
  html += section(st('solution'), tr(p, 'solution'), null, "proj-solution");
  if (p.id === 0) {
    html += image('assets/FinCorp_mentor.jpg');
  }
  html += section(st('competitors'), tr(p, 'competitorAnalysis'), p.competitorLink);
  html += image(p.competitorImage);

  if (p.research) {
  html += `
    <div class="proj-section">
      <div class="proj-section-head">
        <h3>${st('research')}</h3>
        ${p.researchLink ? `<a class="figma-link" href="${p.researchLink}" target="_blank" rel="noopener">${st('figmaLink')}</a>` : ""}
      </div>

      <div class="research-block">
        <h4>${st('userProblems')}</h4>
        <ul>
          ${trResearch(p, 'userProblems').map(item => `<li>${item}</li>`).join("")}
        </ul>
      </div>

      <div class="research-block">
        <h4>${st('valueHyp')}</h4>
        <ul>
          ${trResearch(p, 'valueHypotheses').map(item => `<li>${item}</li>`).join("")}
        </ul>
      </div>

      <div class="research-block">
        <h4>${st('behaviorHyp')}</h4>
        <ul>
          ${trResearch(p, 'behaviorHypotheses').map(item => `<li>${item}</li>`).join("")}
        </ul>
      </div>

      <div class="research-block">
        <h4>${st('insights')}</h4>
        <ul>
          ${trResearch(p, 'insights').map(item => `<li>${item}</li>`).join("")}
        </ul>
      </div>
    </div>
  `;
}

  html += image(p.researchImage);

  html += section(st('jtbd'), tr(p, 'jtbd'));
  html += image(p.jtbdImage);

  if (p.jtbdGroups) {
    html += `
      <div class="proj-section">
        <div class="proj-section-head">
          <h3>${st('userGroups')}</h3>
          ${p.frameworksLink ? `<a class="figma-link" href="${p.frameworksLink}" target="_blank" rel="noopener">${st('figmaLink')}</a>` : ""}
        </div>

        ${trGroups(p).map(group => `
          <div style="margin-bottom:30px">
            <h4>${group.title}</h4>
            <p>${group.description}</p>
          </div>
        `).join("")}

      </div>
    `;
  }
  html += image(p.jtbdGroupsImage);

  html += section(st('cjm'), tr(p, 'cjm'));
  html += image(p.cjmImage);

  html += section(st('keyScenarios'), tr(p, 'keyScenarios'));
  html += image(p.keyScenariosImage);

  html += section(st('userFlow'), tr(p, 'userFlow'), p.userFlowLink);
  html += image(p.userflowImage);

  html += section(
    p.purchaseScenarioTitle ? tr(p, 'purchaseScenarioTitle') : st('purchaseDefault'),
    tr(p, 'purchaseScenario')
  );
  html += image(p.purchaseScenarioImage);

  html += section(st('designSystem'), tr(p, 'designSystem'), p.designSystemLink, null, p.id === 0 ? 'assets/FinCorp_design_system.jpg' : null);
  html += image(p.uikitImage);

  html += section(st('prototype'), tr(p, 'prototype'), p.prototypeLink);
  html += image(p.prototypeImage);

  if (p.images) {
    p.images.forEach(src => {
      html += image(src);
    });
  }

  if (p.id === 0) {
    const resultsText = tr(p, 'results');
    const marker = '— AI Recommendation Acceptance Rate — доля рекомендаций, которые пользователь принимает или использует в своих финансовых решениях';
    const markerIndex = resultsText.indexOf(marker);

    if (markerIndex !== -1) {
      const splitAt = markerIndex + marker.length;
      const beforeText = resultsText.slice(0, splitAt);
      const afterText = resultsText.slice(splitAt);
      html += `
        <div class="proj-section" id="proj-results">
          <div class="proj-section-head">
            <h3>${st('results')}</h3>
          </div>
          <p>${beforeText}</p>
          <div class="proj-media"><img src="assets/FINCORP_results.jpg" alt=""></div>
          <p>${afterText}</p>
        </div>
      `;
    } else {
      html += section(st('results'), resultsText, null, "proj-results");
      html += image('assets/FINCORP_results.jpg');
    }
  } else {
    html += section(st('results'), tr(p, 'results'), null, "proj-results");
    html += image(p.resultsImage);
  }

  if (p.references) {
  html += `
    <div class="proj-section">
      <h3>${st('sources')}</h3>
      <ul>
        ${trReferences(p).map(link => `
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

  if (p.id === 0) {
    html += image('assets/FinCorp_End.jpg');
  }

  document.getElementById("proj-body").innerHTML = html;

  document.getElementById("project-overlay").classList.add("open");
  document.body.style.overflow = "hidden";
  currentOpenProjectId = id;

  // Открыта страница проекта: показываем "Назад" в навигации, сбрасываем прозрачность
  const navEl = document.getElementById("main-nav");
  navEl.classList.add("project-open");
  navEl.classList.remove("scrolled");
  navEl.classList.remove("home-page");
  navEl.classList.toggle("light-banner", !!p.lightBanner);
}

function handleNavBack() {
  // На странице проекта "Назад" закрывает оверлей проекта,
  // а не уводит на страницу "Обо мне"
  if (document.getElementById('main-nav').classList.contains('project-open')) {
    closeProject();
  } else {
    navigateTo('about');
  }
}

function closeProject() {
  document.getElementById("project-overlay").classList.remove("open");
  document.body.style.overflow = "";
  currentOpenProjectId = null;

  // Вернулись на главную: убираем "Назад", восстанавливаем нав по прокрутке страницы
  const navEl = document.getElementById("main-nav");
  navEl.classList.remove("project-open");
  navEl.classList.remove("light-banner");
  navEl.classList.add("home-page");
  navEl.classList.toggle("scrolled", window.scrollY > 10);
}


/* ============================================================
   СТРАНИЦЫ САЙТА (SPA-навигация одним файлом)
   Доступные страницы: about, experience, projects, contact
============================================================ */
let currentPage = 'about';

function navigateTo(page) {
  currentPage = page;
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const target = document.getElementById(page + '-page');
  if (target) target.classList.add('active');

  // Главная страница (Обо мне) должна помещаться в экран без скролла —
  // на остальных страницах скролл работает как обычно.
  document.body.classList.toggle('page-about', page === 'about');
  document.documentElement.classList.toggle('page-about', page === 'about');

  // Текущая страница — используется в CSS, чтобы скрывать футер
  // (контакты/навигацию снизу) на страницах "Опыт" и "Проекты"
  document.body.setAttribute('data-page', page);

  // Кнопка "Назад" в навигации видна на любой странице, кроме главной
  mainNav.classList.toggle('sub-page-open', page !== 'about');

  // Закрываем оверлей проекта, если он был открыт
  closeProject();

  // Карточки могли устареть по языку, пока мы были на другой странице —
  // досчитываем их именно сейчас, а не при каждом переключении языка.
  if (page === 'projects' && cardsNeedRerender) {
    renderProjectCards();
    cardsNeedRerender = false;
  }

  // Мгновенный сброс скролла (без плавной анимации): на длинных
  // страницах плавный scroll-behavior из CSS заставлял скролл долго
  // "доезжать" наверх, из-за чего казалось, что верхняя навигация
  // пропадает при переходе на другую страницу.
  window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
}


/* ============================================================
   RU / EN — переключение языка сайта
   Статический текст переключается через пары
   <span class="lang-ru">…</span> / <span class="lang-en">…</span>
   (см. CSS: body.lang-en .lang-ru { display:none } и наоборот)

   Карточки проектов (генерируются из PROJECTS) перерисовываются
   на нужном языке отдельно.
============================================================ */
let currentLang = 'ru';
let cardsNeedRerender = true; // выставляется в true, когда язык поменялся,
                               // а страница "Проекты" сейчас не активна —
                               // тогда карточки перерисуются лениво, при
                               // переходе на эту страницу (см. navigateTo)

function switchLanguage(lang) {
  currentLang = lang;
  document.body.classList.toggle('lang-mode-en', lang === 'en');
  document.documentElement.setAttribute('lang', lang);

  document.getElementById('lang-ru-btn')?.classList.toggle('active', lang === 'ru');
  document.getElementById('lang-en-btn')?.classList.toggle('active', lang === 'en');

  // Карточки на странице "Проекты" перерисовываем сразу, только если
  // она сейчас видна — на остальных страницах это лишняя работа,
  // перерисуем при переходе туда (навигация ниже).
  if (currentPage === 'projects') {
    renderProjectCards();
    cardsNeedRerender = false;
  } else {
    cardsNeedRerender = true;
  }

  // Если открыта карточка конкретного проекта — переоткрываем её на новом
  // языке. Раньше переключатель языка её не трогал, поэтому текст внутри
  // открытого проекта не менялся.
  if (currentOpenProjectId !== null) {
    openProject(currentOpenProjectId);
  }
}


/* ============================================================
   КАРТОЧКИ ПРОЕКТОВ — рендер из массива PROJECTS (GRID версия)
============================================================ */

function renderProjectCards() {
  const track = document.getElementById('projects-track');
  if (!track) return;

  track.innerHTML = PROJECTS.filter(p => !p.hidden).map(p => {
    const title = (p.title && p.title[currentLang]) || (p.title && p.title.ru) || '';
    const desc = (p.cardDesc && p.cardDesc[currentLang]) || (p.cardDesc && p.cardDesc.ru) || '';
    const bg = (p.cardImg || p.bannerImg) ? `background-image: url('${p.cardImg || p.bannerImg}');` : 'background: #f0f0f0;';

    return `
      <div class="project-card" data-id="${p.id}" onclick="openProject(${p.id})">
        <div class="card-bg" style="${bg}">
          <div class="card-overlay"></div>
        </div>
        <div class="card-info">
          <div class="card-title">${title}</div>
          <div class="card-desc">${desc}</div>
        </div>
      </div>
    `;
  }).join('');
}


/* ============================================================
   СКАЧИВАНИЕ CV
   Файл один и тот же, но имя сохранённого файла зависит от языка
============================================================ */
function downloadCV() {
  const fileName = currentLang === 'en'
    ? 'CV Azalia Zamaletdinova.pdf'
    : 'CV Азалия Замалетдинова.pdf';

  const link = document.createElement('a');
  link.href = 'assets/CV_Azaliya_Zamaletdinova.pdf';
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}


/* ============================================================
   АВАТАР — hover-зона переключает avatar_image_1 → avatar_image_2
============================================================ */
function initAvatarHover() {
  const zone = document.querySelector('.avatar-hover-zone');
  const bg = document.querySelector('.banner-bg');
  if (!zone || !bg) return;

  zone.addEventListener('mouseenter', () => bg.classList.add('avatar-hover'));
  zone.addEventListener('mouseleave', () => bg.classList.remove('avatar-hover'));
}


/* ============================================================
   МОБИЛЬНОЕ ФОТО НАД БЛОКОМ "О СЕБЕ" — плавный переход
   с avatar_image_1_Mobile на avatar_image_2_Mobile при загрузке
============================================================ */
function initMobileAvatarFade() {
  const wrap = document.querySelector('.mobile-avatar-wrap');
  if (!wrap) return;

  // небольшая пауза перед стартом перехода, чтобы сначала
  // было видно первое фото
  setTimeout(() => wrap.classList.add('avatar-loaded'), 900);
}


/* ============================================================
   ИНИЦИАЛИЗАЦИЯ
============================================================ */
window.addEventListener('DOMContentLoaded', () => {
  renderProjectCards();
  navigateTo('about');
  initAvatarHover();
  initMobileAvatarFade();
}); 
