import type { CV } from './types';
import { contact } from './contact';

export const cvEn: CV = {
  name: 'Angel Daniel Dzib Chan',
  title: 'Sr Front-End Developer',
  contact,
  about:
    'Computer Systems Engineer with **7+ years** building web and mobile applications with **React, React Native and TypeScript**. I have worked across **insurance, banking, fintech, aviation, industrial and construction** for companies such as **MetLife, Aeroméxico, Digital FEMSA and Actinver**. Focused on scalable architecture, Design Systems, testing and AI-assisted development.',
  experience: [
    {
      company: 'Capgemini México S. de R.L. de C.V.',
      role: 'Sr Front-End Developer',
      period: 'Sep 2024 – Present',
      projects: [
        {
          name: 'Actinver (Angular)',
          bullets: [
            'Implemented the **Design System** with **Material UI**, unifying styles and components across the application.',
            'Built improvements and new features in **Angular** based on business requirements.',
            'Decoupled components to make them reusable, reducing duplication and easing maintenance.',
            'Integrated **Claude Code** into my workflow following **SDD (Spec-Driven Development)**: I wrote the specs and reviewed and validated the generated code, speeding up delivery without compromising quality.',
          ],
        },
        {
          name: 'MetLife App 2.0 (React Native)',
          bullets: [
            'Took part in the full rewrite of the app using **React Native** and **TypeScript**, improving performance, maintainability and scalability.',
            'Adopted **Zustand** as a team to simplify state management and improve maintainability.',
            'Improved complex forms with **React Hook Form**, optimizing validation and user experience.',
            'Implemented **Axios** for **HTTP** request handling.',
            'Strengthened code quality with unit tests (**Jest + React Native Testing Library**) and **SonarQube**.',
            'Improved the **offline experience** with **SQLite**, ensuring data persistence and uninterrupted use without connectivity.',
          ],
        },
        {
          name: 'MetLife App 1.0 + ReactJS (Cordova)',
          bullets: [
            'Responsible for integrating new features into the original version of the app, prioritizing stability, compatibility and code quality.',
            'Provided user support during go-live, resolving incidents in real time and ensuring continuous operation.',
            'Developed new features using **vanilla JavaScript and React**, adapting to environment constraints and maximizing performance.',
            'Monitored, analyzed and resolved production incidents to guarantee operational continuity.',
            'Maintained and refactored legacy features in **Apache Cordova**, improving efficiency and reducing recurring failures.',
          ],
        },
      ],
    },
    {
      company: 'Softtek, S.A. de C.V.',
      role: 'React Native Developer',
      period: 'Sep 2022 – Jul 2024',
      projects: [
        {
          name: 'Digital FEMSA',
          bullets: [
            'Built mobile features with **React Native + TypeScript**, prioritizing reusable components and consistent flows.',
            'Joined the existing **Clean Architecture** implementation, helping reduce technical debt and improve maintainability and scalability.',
            'Implemented robust validation with **React Hook Form** and reliable integrations with **Axios**, improving form reliability and API communication.',
            'Introduced **Redux Toolkit** and **RTK Query** to standardize state management and simplify data logic across the team.',
            'Implemented a modular architecture based on internal **React Native** libraries, using **TypeScript** and **react-native-builder-bob** to package independent modules per business domain, enabling reuse, isolated maintenance and faster development.',
            'Increased stability through **unit testing** (Jest + Native Testing Library) and code review practices.',
          ],
        },
        {
          name: 'Aeroméxico App 2.0',
          bullets: [
            'Developed mobile features with **React Native** and **TypeScript**, implementing components, screens and user flows.',
            'Applied a **monorepo** approach to structure the app into modules.',
            'Implemented form validation with **React Hook Form**.',
            'Managed global state with **Redux Toolkit** and caching / async requests with **RTK Query**.',
            'Covered code with unit tests using **Jest** and **Native Testing Library**, ensuring quality and preventing regressions.',
            '**Implemented Firebase for push notifications and analytics**, integrating **Firebase Cloud Messaging (FCM)** for reliable **Push Notification** delivery and configuring **Firebase Analytics** to track key events, measuring adoption, engagement and conversion within the app.',
          ],
        },
        {
          name: 'Aeroméxico App 1.0',
          bullets: [
            'Developed and maintained screens in version 1.0, ensuring stable functionality and continuous UX improvements.',
            'Implemented business logic with **Redux Thunk**, handling asynchronous processes and complex data flows.',
            'Built form validation with **Formik**, optimizing data capture and error handling.',
            'Handled **Salesforce** Push Notifications through a Native Module **(Swift/Kotlin)**, since no official SDK or library existed for React Native, building the native layer for communication, token registration and notification delivery.',
          ],
        },
      ],
    },
    {
      company: 'Grupo UPAX',
      role: 'Front-End Developer',
      period: 'Jun 2022 – Sep 2022',
      bullets: [
        'Developed web applications with **React** and **Next.js**, applying a **Micro Frontends** architecture to improve scalability and independent module deployment.',
        'Integrated **Google Maps Platform** to display and plot visit routes, improving the geolocation experience in the app.',
        'Implemented **data visualization with interactive Recharts charts**, making metrics and reports easier to analyze.',
        'Built reusable components with **styled-components**, keeping visual consistency and improving maintainability.',
        'Implemented **unit tests with Jest and React Testing Library**, ensuring component stability and preventing regressions in new features.',
        'Optimized performance through **lazy loading and code splitting**, reducing initial load times in large applications.',
        'Consumed REST APIs and managed application state efficiently using React hooks, composition patterns and **Axios**.',
      ],
    },
    {
      company: 'INTERprotección',
      role: 'Front-End Developer',
      period: 'Apr 2022 – Jun 2022',
      bullets: [
        '**Improved platform performance and maintainability** by building web applications with **React.js** and **Next.js**, applying architecture and optimization best practices.',
        '**Increased product reliability** by implementing **unit tests** with **React Testing Library** and **Jest**, reducing regressions and strengthening stability on every release.',
        '**Improved onboarding security** by building a **document upload and identity verification** module integrated with **MetaMap**, ensuring more reliable checks for new users.',
        '**Ensured platform-wide visual consistency** by working with the UX/UI team to adopt and implement a **Material UI–based Design System**.',
        '**Enabled scalability and faster development** by creating and documenting **reusable React components** used by multiple teams.',
        '**Optimized user conversion** by running **A/B tests for promotions with Firebase**, evaluating variants in real time and making data-driven decisions.',
      ],
    },
    {
      company: 'Sistemas Automotrices de México, S.A. de C.V.',
      role: 'Front-End Developer',
      period: 'Jul 2021 – Apr 2022',
      bullets: [
        'Developed mobile and web applications with **React Native** and **TypeScript**, ensuring maintainable and scalable code.',
        'Implemented **reusable components and Web Components** to improve front-end modularity.',
        'Designed and applied **component styles in React**, ensuring visual consistency and a smooth user experience.',
        'Identified and fixed **functional issues**, and implemented new features based on product requirements.',
        'Created **reports and new views**, improving data presentation for users and internal teams.',
        'Collaborated effectively in **agile Scrum teams**, taking part in planning, sprints and product reviews.',
      ],
    },
    {
      company: 'SKNNR',
      role: 'Jr React Native Developer · Freelance',
      period: 'Oct 2020 – Jun 2021',
      bullets: [
        'Developed mobile apps with **React Native** and **TypeScript** on **Expo**, ensuring cross-platform compatibility and development efficiency.',
        'Implemented key app modules: **Favorites**, **User Profile**, **Add Foods** and **QR Code Scanning**.',
        'Integrated native features through **camera and push notification APIs**, improving user interaction.',
        'Collaborated in **agile teams (Scrum) using Jira**, taking part in sprints, planning and reviews.',
      ],
    },
    {
      company: 'VGP Construcciones',
      role: 'Jr Developer · Freelance',
      period: 'Feb 2019 – Oct 2020',
      bullets: [
        'Developed a **mobile app with React Native**, ensuring cross-platform compatibility and a smooth user experience.',
        'Built a **web dashboard with Angular**, integrating the platform’s key modules: **warranties, deliveries and products**.',
        'Integrated the **Google API** to display delivery and warranty information in real time.',
        'Actively collaborated in **agile teams (Scrum) using Jira**, taking part in sprint planning, reviews and task tracking.',
      ],
    },
  ],
  skills: [
    { name: 'Languages', items: ['HTML5', 'CSS', 'JavaScript (ES6+)', 'TypeScript'] },
    { name: 'Frameworks & libraries', items: ['React', 'React Native', 'Next.js', 'Angular', 'Material UI', 'styled-components'] },
    { name: 'State & data', items: ['Redux (Thunk, Toolkit)', 'RTK Query', 'Zustand', 'Axios', 'React Hook Form', 'i18n'] },
    { name: 'Tools', items: ['Git', 'GitHub', 'GitLab', 'Bitbucket', 'SonarQube', 'Docker', 'Firebase', 'Claude Code'] },
    { name: 'Architecture', items: ['DDD', 'Clean Architecture', 'Micro Frontends', 'Monorepo'] },
  ],
  education: [
    {
      school: 'Instituto Tecnológico de Cancún',
      degree: 'B.S. in Computer Systems Engineering',
      period: 'Aug 2015 – Dec 2020',
    },
  ],
};
