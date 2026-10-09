import type { CV } from './types';
import { contact } from './contact';

export const cvEs: CV = {
  name: 'Angel Daniel Dzib Chan',
  title: 'Sr Front-End Developer',
  contact,
  about:
    'Ingeniero en Sistemas Computacionales con **más de 7 años** desarrollando aplicaciones web y móviles con **React, React Native y TypeScript**. He trabajado en **seguros, banca, fintech, aviación, industria y construcción** para empresas como **MetLife, Aeroméxico, Digital FEMSA y Actinver**. Enfocado en arquitectura escalable, Design Systems, testing y desarrollo asistido por IA.',
  experience: [
    {
      company: 'Capgemini México S. de R.L. de C.V.',
      role: 'Sr Front-End Developer',
      period: 'Sep 2024 – Actualidad',
      projects: [
        {
          name: 'Actinver (Angular)',
          bullets: [
            'Implementé el **Design System** con **Material UI**, unificando estilos y componentes en toda la aplicación.',
            'Desarrollé mejoras y nuevas funcionalidades en **Angular** según los requerimientos de negocio.',
            'Desacoplé componentes para hacerlos reutilizables, reduciendo duplicidad y facilitando el mantenimiento.',
            'Integré **Claude Code** en mi flujo de trabajo siguiendo **SDD (Spec-Driven Development)**: definía especificaciones, revisaba y validaba el código generado, acelerando las entregas sin perder calidad.',
          ],
        },
        {
          name: 'MetLife App 2.0 (React Native)',
          bullets: [
            'Participé en la reescritura completa de la aplicación utilizando **React Native** y **TypeScript**, mejorando el rendimiento, la mantenibilidad y la escalabilidad del producto.',
            'Implementamos **Zustand** en equipo para simplificar el manejo de estado y mejorar la mantenibilidad.',
            'Mejoramos formularios complejos con **React Hook Form**, optimizando validaciones y la experiencia de usuario.',
            'Implementé **Axios** para el manejo de peticiones **HTTP**.',
            'Se fortaleció la calidad del código con pruebas unitarias (**Jest + React Native Testing Library**) y **SonarQube**.',
            'Mejoré la **experiencia offline** mediante **SQLite**, asegurando persistencia de datos y continuidad de uso sin conectividad.',
          ],
        },
        {
          name: 'MetLife App 1.0 + ReactJS (Cordova)',
          bullets: [
            'Responsable de integrar nuevas funcionalidades en la versión original de la aplicación, priorizando estabilidad, compatibilidad y calidad del código.',
            'Atención y soporte a usuarios durante la puesta en marcha, resolviendo incidencias en tiempo real y asegurando una operación continua.',
            'Desarrollo de nuevas características utilizando **JavaScript puro y React**, ajustándose a restricciones del entorno y maximizando el rendimiento.',
            'Monitoreo, análisis y resolución de incidencias en producción para garantizar la continuidad operativa de la aplicación.',
            'Mantenimiento y refactorización de funcionalidades legadas en **Apache Cordova**, mejorando su eficiencia y reduciendo fallos recurrentes.',
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
            'Desarrollé funcionalidades móviles con **React Native + TypeScript**, priorizando componentes reutilizables y flujos consistentes.',
            'Me integré a la implementación existente de **Clean Architecture**, contribuyendo a reducir la deuda técnica y mejorar la mantenibilidad y escalabilidad del proyecto.',
            'Implementé validaciones robustas con **React Hook Form** e integraciones estables con **Axios**, mejorando la confiabilidad de los formularios y la comunicación con APIs.',
            'Se implementó **Redux Toolkit** y **RTK Query** para estandarizar la gestión de estado y simplificar la lógica de datos en el equipo.',
            'Implementé una arquitectura modular basada en librerías internas de **React Native**, usando **TypeScript** y **react-native-builder-bob** para empaquetar módulos independientes por dominio funcional, permitiendo reutilización, mantenimiento aislado y mayor velocidad de desarrollo.',
            'Incrementé la estabilidad mediante **pruebas unitarias** (Jest + Native Testing Library) y prácticas de revisión de código.',
          ],
        },
        {
          name: 'Aeroméxico App 2.0',
          bullets: [
            'Desarrollo de funcionalidades móviles utilizando **React Native** y **TypeScript**, implementando componentes, pantallas y flujos de usuario.',
            'Aplicación de **monorepo** para estructurar la aplicación en módulos.',
            'Implementé validaciones de formularios con **React Hook Form**.',
            'Gestión del estado global con **Redux Toolkit** y manejo de caché / peticiones asíncronas con **RTK Query**.',
            'Cobertura de pruebas unitarias con **Jest** y **Native Testing Library**, garantizando calidad y evitando regresiones.',
            '**Implementé Firebase para notificaciones push y analítica**, integrando **Firebase Cloud Messaging (FCM)** para una entrega confiable de **Push Notifications** y configurando **Firebase Analytics** para instrumentar eventos clave, permitiendo medir adopción, engagement y conversión dentro de la aplicación.',
          ],
        },
        {
          name: 'Aeroméxico App 1.0',
          bullets: [
            'Desarrollo y mantenimiento de pantallas en la versión 1.0, asegurando funcionalidad estable y mejoras continuas en la experiencia de usuario.',
            'Implementación de lógica de negocio mediante **Redux Thunk**, gestionando procesos asíncronos y flujos de datos complejos.',
            'Validaciones de formularios utilizando **Formik**, optimizando la captura de datos y la gestión de errores.',
            'Gestión de Push Notifications de **Salesforce** mediante un Native Module **(Swift/Kotlin)**, debido a la ausencia de SDKs o librerías oficiales para React Native, desarrollando la capa nativa necesaria para comunicación, registro de tokens y recepción de notificaciones.',
          ],
        },
      ],
    },
    {
      company: 'Grupo UPAX',
      role: 'Front-End Developer',
      period: 'Jun 2022 – Sep 2022',
      bullets: [
        'Desarrollo de aplicaciones web utilizando **React** y **Next.js**, aplicando arquitectura de **Micro Frontends** para mejorar la escalabilidad y el despliegue independiente de módulos.',
        'Integración de **Google Maps Platform** para la visualización y trazado de rutas de visitas, optimizando la experiencia de geolocalización en la aplicación.',
        'Implementación de **visualización de datos mediante gráficos interactivos con Recharts**, facilitando el análisis de métricas y reportes dentro de la aplicación.',
        'Construcción de componentes reutilizables utilizando **styled-components**, permitiendo mantener consistencia visual y facilitar la mantenibilidad del código.',
        'Implementación de **pruebas unitarias con Jest y React Testing Library**, asegurando la estabilidad de los componentes y previniendo regresiones en nuevas funcionalidades.',
        'Optimización del rendimiento mediante **lazy loading y code splitting**, reduciendo tiempos de carga inicial en aplicaciones grandes.',
        'Consumo de APIs REST y manejo eficiente del estado de la aplicación mediante hooks y patrones de composición de React con **Axios**.',
      ],
    },
    {
      company: 'INTERprotección',
      role: 'Front-End Developer',
      period: 'Abr 2022 – Jun 2022',
      bullets: [
        '**Mejoré el rendimiento y la mantenibilidad** de la plataforma desarrollando aplicaciones web con **React.js** y **Next.js**, aplicando buenas prácticas de arquitectura y optimización.',
        '**Aumenté la confiabilidad del producto** al implementar **pruebas unitarias** con **React Testing Library** y **Jest**, reduciendo regresiones y fortaleciendo la estabilidad en cada release.',
        '**Mejoré la seguridad del proceso de onboarding** desarrollando un módulo de **carga de documentos y validación de identidad** integrado con **MetaMap**, garantizando verificaciones más confiables para usuarios nuevos.',
        '**Aseguré consistencia visual a nivel plataforma** colaborando con el equipo de UX/UI en la adopción e implementación de un **Design System basado en Material UI**.',
        '**Facilité la escalabilidad y velocidad de desarrollo** al crear y documentar **componentes reutilizables en React**, utilizados por múltiples equipos.',
        '**Optimicé la conversión de usuarios** implementando **pruebas A/B de promociones con Firebase**, permitiendo evaluar variantes en tiempo real y tomar decisiones basadas en resultados medibles.',
      ],
    },
    {
      company: 'Sistemas Automotrices de México, S.A. de C.V.',
      role: 'Front-End Developer',
      period: 'Jul 2021 – Abr 2022',
      bullets: [
        'Desarrollé aplicaciones móviles y web con **React Native** y **TypeScript**, asegurando código mantenible y escalable.',
        'Implementé **componentes reutilizables y Web Components** para mejorar la modularidad del front-end.',
        'Diseñé y apliqué **estilos de componentes en React**, garantizando consistencia visual y experiencia de usuario fluida.',
        'Identifiqué y resolví **problemas de funcionalidad**, además de implementar nuevas características según requerimientos del producto.',
        'Creé **informes y nuevas vistas**, optimizando la presentación de datos para usuarios y equipos internos.',
        'Colaboré de manera efectiva en **equipos ágiles con Scrum**, participando en planificación, sprints y revisiones de producto.',
      ],
    },
    {
      company: 'SKNNR',
      role: 'Jr React Native Developer · Freelance',
      period: 'Oct 2020 – Jun 2021',
      bullets: [
        'Desarrollé aplicaciones móviles utilizando **React Native** y **TypeScript** sobre **Expo**, garantizando compatibilidad multiplataforma y eficiencia en el desarrollo.',
        'Implementé módulos clave de la app: **Favoritos**, **Perfil de usuario**, **Agregar alimentos** y **Escaneo de códigos QR**.',
        'Integré funcionalidades nativas mediante **APIs de cámara y notificaciones push**, mejorando la interacción del usuario.',
        'Colaboré en **equipos ágiles (Scrum) utilizando Jira**, participando en sprints, planificación y revisiones.',
      ],
    },
    {
      company: 'VGP Construcciones',
      role: 'Jr Developer · Freelance',
      period: 'Feb 2019 – Oct 2020',
      bullets: [
        'Desarrollé una **aplicación móvil con React Native**, garantizando compatibilidad multiplataforma y experiencia de usuario fluida.',
        'Implementé un **dashboard web con Angular**, integrando módulos clave de la plataforma: **garantías, entregas y productos**.',
        'Integré la **API de Google** para mostrar información de entregas y garantías en tiempo real.',
        'Colaboré activamente en **equipos ágiles (Scrum) utilizando Jira**, participando en planificación de sprints, revisiones y seguimiento de tareas.',
      ],
    },
  ],
  skills: [
    { name: 'Lenguajes', items: ['HTML5', 'CSS', 'JavaScript (ES6+)', 'TypeScript'] },
    { name: 'Frameworks y librerías', items: ['React', 'React Native', 'Next.js', 'Angular', 'Material UI', 'styled-components'] },
    { name: 'Estado y datos', items: ['Redux (Thunk, Toolkit)', 'RTK Query', 'Zustand', 'Axios', 'React Hook Form', 'i18n'] },
    { name: 'Herramientas', items: ['Git', 'GitHub', 'GitLab', 'Bitbucket', 'SonarQube', 'Docker', 'Firebase', 'Claude Code'] },
    { name: 'Arquitectura', items: ['DDD', 'Clean Architecture', 'Micro Frontends', 'Monorepo'] },
  ],
  education: [
    {
      school: 'Instituto Tecnológico de Cancún',
      degree: 'Ingeniería en Sistemas Computacionales',
      period: 'Ago 2015 – Dic 2020',
    },
  ],
};
