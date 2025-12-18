// locales/fr.ts
export default {
  hello: 'Bonjour',
  'hello.world': 'Bonjour le monde !',
  welcome: 'Bonjour {name} !',
  aboutMe: 'À propos de moi',
  profil: 'Profil',
  contact: 'Contact',
  scrollDown: 'Faire défiler',

  homePage: {
    title: 'Bienvenue sur mon site personnel',
    dev: 'Développeuse Full Stack',
    devOps: 'Ingénieure DevOps',
    description:
      'Je suis Cristina Ghinda, développeuse Full Stack et ingénieure DevOps passionnée. Découvrez mon portfolio pour explorer mes projets et mon expertise en développement web et en gestion d’infrastructures.',
  },

  about: {
    paragraph1:
      'Je suis née et j’ai grandi en Roumanie, où j’ai suivi des études approfondies en Mathématiques et Informatique. Tout au long de mon parcours académique, je me suis classée parmi les meilleurs étudiants de ma promotion et j’ai bénéficié d’une bourse d’excellence fondée sur le mérite. Ces études ont renforcé ma capacité d’analyse et m’ont apporté des bases solides en logique, algorithmique et résolution de problèmes.',

    paragraph2:
      'En 2020, j’ai décidé de m’installer en France afin de relever de nouveaux défis académiques et professionnels. J’y ai poursuivi mes études et obtenu l’ensemble de mes diplômes avec mentions et félicitations du jury, confirmant ainsi mon excellent niveau dans un contexte académique international.',

    paragraph3:
      'C’est durant cette période que j’ai découvert le développement web et que je me suis rapidement spécialisée en JavaScript full stack et en DevOps. J’ai suivi un bootcamp full stack, une alternance en tant que développeuse JavaScript, ainsi qu’une formation d’ingénieure DevOps, en me distinguant par ma rigueur technique et mon autonomie.',

    paragraph4:
      'Pour chacun des projets majeurs que j’ai réalisés, les jurys et commissions d’évaluation ont salué la qualité, la profondeur et la complétude de mon travail, reconnaissant ma capacité à mener des projets complexes de la conception jusqu’à la mise en production.',

    paragraph5:
      'Aujourd’hui, en tant que développeuse full stack et ingénieure DevOps, je conçois des interfaces front-end responsives et intuitives, je développe des API REST sécurisées et scalables, et j’automatise les déploiements à l’aide de pratiques DevOps modernes.',

    paragraph6:
      'Mon parcours — de la Roumanie à la France, de l’excellence académique à des applications prêtes pour la production — reflète ma capacité à m’adapter rapidement, à apprendre en continu et à maintenir un haut niveau d’exigence. Je suis passionnée par la création de solutions élégantes et fiables, capables de transformer des idées complexes en produits numériques à fort impact.',
  },

  portfolio: {
    title: 'Portfolio',
    introTitle:
      'Au fil du temps, j’ai participé à de nombreux projets, aussi bien académiques que professionnels. Cette sélection présente des projets complexes que j’ai conçus, développés et livrés de manière autonome, de bout en bout.',
    introDescription1:
      'D’autres projets, réalisés seule ou en collaboration, ne sont pas présentés ici. N’hésitez pas à me contacter si vous souhaitez plus de détails ; une page dédiée est disponible un peu plus bas.',
    introDescription2:
      'Vous trouverez ici un aperçu de projets en développement web ainsi qu’un projet DevOps. Ils illustrent ma maîtrise des technologies utilisées et les compétences développées face aux défis propres à chaque projet.',
  },

  ecodb: {
    title: 'Eco DB',
    subtitle: 'Application web sécurisée pour la gestion et la distribution de données économiques',
    description0:
      'Conception et développement d’une application web utilisée par des employés et partenaires pour consulter, filtrer, créer, modifier et supprimer des données économiques.',
    description1:
      'Mise en place d’un contrôle d’accès basé sur les rôles et les catégories, avec sécurisation des requêtes via des tokens SSO Keycloak.',
    description2:
      'Création d’un backend centralisé exposant des API REST, utilisé par plusieurs applications internes et supportant des filtres dynamiques.',
    description3: 'Traitement et transformation de fichiers Excel vers des bases de données SQL et NoSQL structurées à l’aide de Pandas.',
    description4: 'Développement d’une SPA avec Vue.js et Vuetify, gestion d’état avec Vuex et filtrage dynamique côté front-end.',
    description5:
      'Déploiement et gestion DevOps avec Docker, Traefik et GitLab CI/CD, en suivant une méthodologie Agile et des retours utilisateurs itératifs.',
  },

  jam: {
    title: 'JAM',
    subtitle: 'Application web de vente de confitures avec gestion des utilisateurs et des produits',
    description0:
      'Refonte complète de l’application JAM, un site e-commerce de confitures, vers une architecture API moderne avec Django REST Framework pour le backend et Vue.js avec TypeScript pour le frontend.',
    description1:
      'Implémentation d’un système de gestion des utilisateurs et des rôles : super-administrateur pour la gestion des produits et commandes, utilisateurs finaux pour la navigation, le filtrage et l’achat.',
    description2: 'Développement d’un frontend réactif avec composants modulaires, filtres à facettes, pagination et vues détaillées des produits.',
    description3:
      'Conception et mise en place de tests unitaires et fonctionnels côté backend et frontend afin de garantir la fiabilité, la qualité et la sécurité des fonctionnalités.',
    description4:
      'Utilisation de Docker et Docker Compose pour créer un environnement de développement et de déploiement cohérent, portable et reproductible.',
    description5:
      'Intégration de fonctionnalités avancées : authentification JWT sécurisée, gestion des tokens d’accès et de rafraîchissement, protection contre les vulnérabilités web et sécurisation des données utilisateurs.',
    description6: 'Optimisation de l’expérience utilisateur grâce à une recherche flexible, des filtres interactifs et une navigation intuitive.',
  },

  sell: {
    title: 'SellWhatYouDon’tNeed App',
    subtitle: 'Application mobile e-commerce avec architecture multi-couches et persistance sécurisée des données',

    description0:
      'Développement d’une application mobile e-commerce multiplateforme « SellWhatYouDon’tNeed » avec React Native pour un développement rapide et efficace.',
    description1:
      'Conception du Modèle Conceptuel de Données (MCD) avec JMerise afin d’assurer une structure de base de données MySQL robuste et sécurisée.',
    description2:
      'Création du backend avec Node.js et Sequelize pour gérer les interactions avec la base de données et assurer une persistance sécurisée.',
    description3:
      'Développement du frontend avec React Native, garantissant une interface utilisateur responsive et intuitive compatible iOS et Android.',
    description4:
      'Réalisation de maquettes applicatives sur Figma et de diagrammes de cas d’utilisation avec Visual Paradigm afin de valider le design et les fonctionnalités en amont.',
    description5:
      'Intégration de bonnes pratiques de sécurité à tous les niveaux de l’architecture pour protéger les données utilisateurs et sécuriser les transactions.',
    description6:
      'Gestion autonome de l’ensemble du cycle de vie du projet, avec validation des diagrammes auprès des formateurs, démontrant une forte autonomie et de solides compétences techniques.',
  },

  devOps: {
    title: 'Projet DevOps – Morning News',
    subtitle: 'Mise en place d’une infrastructure complète incluant CI/CD, conteneurisation, automatisation, supervision et bonnes pratiques cloud.',
    description0:
      'Automatisation du déploiement d’infrastructures cloud à l’aide de Terraform, Ansible et Docker pour un provisionnement cohérent des serveurs et services.',
    description1:
      'Implémentation de pipelines CI/CD avec GitLab CI/CD pour l’intégration continue, les tests automatisés et les déploiements fluides en préproduction et production.',
    description2:
      'Sécurisation des instances cloud avec clés SSH, groupes de sécurité AWS et sauvegardes automatisées MongoDB afin de garantir l’intégrité des données.',
    description3:
      'Conteneurisation des applications avec Docker et orchestration multi-services via Docker Compose et Docker Swarm pour améliorer la portabilité et la haute disponibilité.',
    description4:
      'Supervision des performances système et applicatives avec Prometheus, Grafana et Alertmanager, fournissant des métriques en temps réel et des tableaux de bord interactifs.',
    description5:
      'Gestion des domaines avec OVH, intégration de Nginx comme reverse proxy avec SSL via Certbot et déploiement sur Google Cloud et Linode pour une infrastructure fiable et scalable.',
  },

  contactPage: {
    title: 'Me contacter',
    sendMessage: 'Envoyez-moi un message via le formulaire ci-dessous :',
    findMeOn: 'Vous pouvez également me retrouver sur LinkedIn',
    dwnloadCV: 'Télécharger mon CV',
    sendButton: 'Envoyer',
  },
} as const;
