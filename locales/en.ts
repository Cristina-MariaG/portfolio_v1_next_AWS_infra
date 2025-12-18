// locales/en.ts
export default {
  hello: 'Hello',
  'hello.world': 'Hello world!',
  welcome: 'Hello {name}!',
  aboutMe: 'About me',
  profil: 'Profile',
  contact: 'Contact',
  scrollDown: 'Scroll down',

  homePage: {
    title: 'Welcome to my personal website',
    dev: 'FullStack Developer',
    devOps: 'DevOps Engineer',
    description:
      "I'm Cristina Ghinda, a passionate Full-Stack Developer and DevOps Engineer. Explore my portfolio to discover my projects and expertise in web development and infrastructure management.",
  },

  about: {
    paragraph1:
      'I was born and raised in Romania, where I completed advanced studies in Mathematics and Computer Science. Throughout my academic journey, I consistently ranked among the top students of my class and was awarded a merit-based scholarship in recognition of my academic excellence. These studies strengthened my analytical thinking and provided a solid foundation in logic, problem-solving, and algorithms.',

    paragraph2:
      'In 2020, I moved to France to pursue new academic and professional challenges. I continued my studies in France and successfully obtained all my diplomas with honors and congratulations from the jury, further confirming my strong academic performance in an international context.',

    paragraph3:
      'During this period, I discovered web development and quickly specialized in full-stack JavaScript and DevOps. I completed a full-stack bootcamp, a JavaScript developer apprenticeship, and a DevOps engineering program, standing out for both technical rigor and autonomy.',

    paragraph4:
      'For every major project I delivered, evaluation panels and juries highlighted the quality, depth, and completeness of my work, recognizing my ability to carry out complex projects from design to production.',

    paragraph5:
      'Today, as a full-stack web developer and DevOps engineer, I design responsive and intuitive front-end interfaces, build secure and scalable RESTful APIs, and automate deployments using modern DevOps practices.',

    paragraph6:
      'My journey — from Romania to France, from academic excellence to production-ready applications — reflects my ability to adapt quickly, learn continuously, and perform at a high level. I am passionate about building elegant, reliable solutions that transform complex ideas into impactful digital products.',
  },

  portfolio: {
    title: 'Portfolio',
    introTitle:
      'Over time, I have participated in numerous projects, both in academic and professional settings. This selection features complex projects that I independently designed, developed, and delivered end to end.',
    introDescription1:
      'There are also other projects, either completed solo or collaboratively, that are not showcased here. If you would like more details, please feel free to contact me; there is a dedicated page for this a little further down.',
    introDescription2:
      'Here, you will find an overview of projects, including both web development and a DevOps project. They demonstrate my proficiency with the technologies used and the skills I developed while tackling the challenges of each project.',
  },

  ecodb: {
    title: 'Eco DB',
    subtitle: 'Secure Web Application for Economic Data Management and Distribution',
    description0:
      'Design and development of a web application used by employees and partners to view, filter, create, update, and delete economic data.',
    description1: 'Implementation of role- and category-based access control, securing all requests with SSO Keycloak tokens.',
    description2: 'Creation of a centralized backend with REST APIs, used by multiple internal applications and supporting dynamic data filtering.',
    description3: 'Processing and transformation of Excel data into structured SQL and NoSQL databases using Pandas.',
    description4: 'Development of a SPA with Vue.js and Vuetify, state management with Vuex, and dynamic data filtering on the frontend.',
    description5:
      'Deployment and DevOps management with Docker, Traefik, and GitLab CI/CD, following an Agile methodology and iterative user feedback.',
  },

  jam: {
    title: 'JAM',
    subtitle: 'Web Application for Jam Sales with User and Product Management',
    description0:
      'Complete overhaul of the Jam application, an e-commerce site for jams, into a modern API architecture using Django REST Framework for the backend and Vue.js with TypeScript for the frontend.',
    description1:
      'Implemented a user and role management system: superuser for managing products and orders, and end-users for browsing, filtering, and purchasing products.',
    description2: 'Developed a reactive frontend with modular components, faceted filters, pagination, and detailed product views.',
    description3:
      'Designed and implemented unit and functional tests on both backend and frontend to ensure reliability, quality, and security of features.',
    description4: 'Used Docker and Docker Compose to create a consistent, portable, and reproducible development and deployment environment.',
    description5:
      'Integrated advanced features including secure JWT authentication, access and refresh token management, web vulnerability protection, and user data security.',
    description6: 'Optimized user experience through flexible search, interactive filters, and intuitive site navigation.',
  },

  sell: {
    title: 'SellWhatYouDon’tNeed App',
    subtitle: 'Mobile E-commerce Application with Multi-layer Architecture and Secure Data Persistence',

    description0:
      "Developed a cross-platform mobile e-commerce application 'SellWhatYouDon’tNeed' using React Native for fast and efficient development.",

    description1: 'Designed the Conceptual Data Model (MCD) with JMerise to ensure a robust and secure database structure in MySQL.',

    description2: 'Created the backend with Node.js and Sequelize to manage database interactions and implement secure data persistence.',

    description3: 'Developed the frontend with React Native, ensuring a responsive and intuitive user interface compatible with iOS and Android.',

    description4:
      'Produced application mock-ups in Figma and Use Case Diagrams in Visual Paradigm to validate functionality and design before development.',

    description5: 'Integrated security best practices throughout the multi-layer architecture to protect user data and ensure safe transactions.',

    description6:
      'Worked independently across the full project lifecycle, consulting trainers for diagram validation, and demonstrating strong autonomy and technical skills.',
  },

  devOps: {
    title: 'DevOps Project - Morning News',
    subtitle: 'Setup of a complete infrastructure including CI/CD pipelines, containerization, automation, monitoring, and cloud best practices.',
    description0:
      'Automated cloud infrastructure deployment using Terraform, Ansible, and Docker to provision servers and manage services consistently across multiple platforms.',
    description1:
      'Implemented CI/CD pipelines with GitLab CI/CD for continuous integration, automated testing, and seamless deployment to pre-production and production environments.',
    description2:
      'Secured cloud instances with SSH keys, AWS security groups, and automated MongoDB backups, ensuring data integrity and protection against potential threats.',
    description3:
      'Containerized applications using Docker and orchestrated multi-service deployments with Docker Compose and Docker Swarm, improving portability, version control, and high availability.',
    description4:
      'Monitored system performance and application health using Prometheus, Grafana, and Alertmanager, providing real-time metrics and interactive dashboards.',
    description5:
      'Managed domains with OVH, integrated Nginx as a reverse proxy with SSL via Certbot, and deployed applications on Google Cloud and Linode for accessibility, scalability, and reliability.',
  },

  contactPage: {
    title: 'Contact Me',
    sendMessage: 'Send me a message using the form below:',
    findMeOn: 'You can also find me on LinkedIn',
    dwnloadCV: 'Download my CV',
    sendButton: 'Send',
  },
} as const;

// // locales/en.ts
// export default {
//   hello: 'Hello',
//   'hello.world': 'Hello world!',
//   welcome: 'Hello {name}!',
//   aboutMe: 'About me',
//   profil: 'Profil',
//   contact: 'Contact',
//   scrollDown: 'Scroll down',
//   homePage: {
//     title: 'Welcome to my personal website',
//     dev: 'FullStack Developer',
//     devOps: 'DevOps Engineer',
//     description:
//       "I'm Cristina Ghinda, a passionate Full-Stack Developer and DevOps Engineer. Explore my portfolio to see my projects and skills in web development and infrastructure management.",
//   },
//   about: {
//     paragraph1:
//       'I was born and raised in Romania, where I completed advanced studies in Mathematics and Computer Science. Throughout my academic journey, I consistently ranked among the top students of my class and was awarded a merit-based scholarship in recognition of my academic excellence. These studies strengthened my analytical thinking and provided a solid foundation in logic, problem-solving, and algorithms.',

//     paragraph2:
//       'In 2020, I moved to France to pursue new academic and professional challenges. I continued my studies in France and successfully obtained all my diplomas with honors and congratulations from the jury, confirming my strong academic performance in an international context.',

//     paragraph3:
//       'During this period, I discovered web development and quickly specialized in full-stack JavaScript and DevOps. I completed a full-stack bootcamp, a JavaScript developer apprenticeship, and a DevOps engineering program, standing out for both technical rigor and autonomy.',

//     paragraph4:
//       'For every major project I delivered, evaluation panels and juries highlighted the quality, depth, and completeness of my work, recognizing my ability to carry out complex projects from design to production.',

//     paragraph5:
//       'Today, as a full-stack web developer and DevOps engineer, I design responsive and intuitive front-end interfaces, build secure and scalable RESTful APIs, and automate deployments using modern DevOps practices.',

//     paragraph6:
//       'My journey — from Romania to France, from academic excellence to production-ready applications — reflects my ability to adapt quickly, learn continuously, and perform at a high level. I am passionate about building elegant, reliable solutions that transform complex ideas into impactful digital products.',
//   },

//   portfolio: {
//     title: 'Portfolio',
//     introTitle:
//       'Over time, I have participated in numerous projects, both in academic and professional settings. This selection features complex projects that I independently designed, developed, and delivered from start to finish.',
//     introDescription1:
//       ' There are also other projects, either completed solo or collaboratively, that are not showcased here. If you would like more details, please feel free to contact me; there is a dedicated page for this a little further down.',
//     introDescription2:
//       'Here, you will find an overview of projects, including both web development and a DevOps project. They demonstrate my proficiency with the technologies used and the skills I developed while tackling the challenges of each project.',
//   },
//   ecodb: {
//     title: 'Eco DB',
//     subtitle: 'Secure Web Application for Economic Data Management and Distribution',
//     description0:
//       'Design and development of a web application used by employees and partners to view, filter, create, update, and delete economic data.',
//     description1: 'Implementation of role- and category-based access control, securing all requests with SSO Keycloak tokens.',
//     description2: 'Creation of a centralized backend with REST APIs, used by multiple internal applications and supporting dynamic data filtering.',
//     description3: 'Processing and transformation of Excel data into structured SQL/NoSQL databases using Pandas.',
//     description4: 'Development of a SPA with Vue.js + Vuetify, state management with Vuex, and dynamic data filtering on the frontend.',
//     description5:
//       'Deployment and DevOps management with Docker, Traefik, and GitLab CI/CD, following an Agile methodology and iterative user feedback.',
//   },

//   jam: {
//     title: 'JAM ',
//     subtitle: 'Web Application for Jam Sales with User and Product Management',
//     description0:
//       'Complete overhaul of the Jam application, an e-commerce site for jams, into a modern API architecture using Django REST Framework for the backend and Vue.js/TypeScript for the frontend.',
//     description1:
//       'Implemented a user and role management system: superuser for managing products and orders, and end-users for browsing, filtering, and purchasing products.',
//     description2: 'Developed a reactive frontend with modular components, faceted filters, pagination, and detailed product views.',
//     description3:
//       'Designed and implemented unit and functional tests on both backend and frontend to ensure reliability, quality, and security of features.',
//     description4: 'Used Docker and Docker Compose to create a consistent, portable, and reproducible development and deployment environment.',
//     description5:
//       'Integrated advanced features: secure JWT authentication, access and refresh token management, web vulnerability protection, and user data security.',
//     description6: 'Optimized user experience through flexible search, interactive filters, and intuitive site navigation.',
//   },

//   sell: {
//     title: 'SellWhatYouDon’tNeed App',
//     subtitle: 'Mobile E-commerce Application with Multi-layer Architecture and Secure Data Persistence',

//     description0:
//       "Developed a cross-platform mobile e-commerce application 'SellWhatYouDon’tNeed' using React Native for fast and efficient development.",

//     description1: 'Designed the Conceptual Data Model (MCD) with JMerise to ensure a robust and secure database structure in MySQL.',

//     description2: 'Created the backend with Node.js and Sequelize to manage database interactions and implement secure data persistence.',

//     description3: 'Developed the frontend with React Native, ensuring a responsive and intuitive user interface compatible with iOS and Android.',

//     description4:
//       'Produced application mock-ups in Figma and Use Case Diagrams in Visual Paradigm to validate functionality and design before development.',

//     description5: 'Integrated security best practices throughout the multi-layer architecture to protect user data and ensure safe transactions.',

//     description6:
//       'Worked independently on the full project lifecycle while consulting trainers for diagrams, demonstrating strong self-management and technical skills.',
//   },

//   devOps: {
//     title: 'DevOps Project - Morning News',
//     subtitle: 'Setup of a complete infrastructure: CI/CD pipeline, containerization, automation, monitoring and cloud best practices.',
//     description0:
//       'Automated cloud infrastructure deployment using Terraform, Ansible, and Docker to provision servers and manage services consistently across multiple platforms.',
//     description1:
//       'Implemented CI/CD pipelines with GitLab CI/CD for continuous integration, automated testing, and seamless deployment to pre-production and production environments.',
//     description2:
//       'Secured cloud instances with SSH keys, AWS security groups, and automated MongoDB backups, ensuring data integrity and protection against potential threats.',
//     description3:
//       'Containerized applications using Docker and orchestrated multi-service deployments with Docker Compose and Docker Swarm, improving portability, version control, and high availability.',
//     description4:
//       'Monitored system performance and application health using Prometheus, Grafana, and Alertmanager, providing real-time metrics and interactive dashboards.',
//     description5:
//       'Managed domains with OVH, integrated Nginx as a reverse proxy with SSL via Certbot, and deployed applications on Google Cloud and Linode for accessibility, scalability, and reliability.',
//   },

//   contactPage: {
//     title: 'Contact Me',
//     sendMessage: 'Send me a message using the form below :',
//     findMeOn: 'You can also find me on LinkedIn',
//     dwnloadCV: 'Download my CV',
//     sendButton: 'Send',
//   },
// } as const;
