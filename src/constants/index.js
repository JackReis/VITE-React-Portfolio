import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
  armory,
  armorywhite,
  corteva,
  cortevawhite,
  ebay,
  ebaywhite,
  facebookwhite,
  google,
  googlewhite,
  kahuna,
  kahunawhite,
  sendgrid,
  sendgridwhite,
  salesforce,
  salesforcewhite,
  tastingroom,
  tastingroomwhite,
  unicorn,
  unicornwhite,
  novelshot,
  nestshot,
  pegasusshot,
  sendgridshot,
  tastingrmshot,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'UI/UX Design',
    icon: ux,
  },
  {
    title: 'Software Prototyping',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'graphql',
    icon: graphql,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  }
];

const experiences = [
  {
    title: 'Principal Product Designer · Lead, Data Visualization',
    company_name: 'Corteva Agriscience',
    icon: cortevawhite,
    iconBg: '#333333',
    date: 'Aug 2021 - Mar 2023',
  },
  {
    title: 'Interaction Designer IV',
    company_name: 'Google',
    icon: googlewhite,
    iconBg: '#333333',
    date: 'Jan 2020 - Jun 2021',
  },
  {
    title: 'Product Designer',
    company_name: 'Facebook',
    icon: facebookwhite,
    iconBg: '#333333',
    date: 'Jul 2018 - Aug 2018',
  },
  {
    title: 'Senior UX Designer',
    company_name: 'Armory',
    icon: armorywhite,
    iconBg: '#333333',
    date: 'Apr 2018 - Jun 2018',
  },
  {
    title: 'Senior UX Designer · Labs',
    company_name: 'SendGrid',
    icon: sendgridwhite,
    iconBg: '#333333',
    date: 'Jun 2017 - Mar 2018',
  },
  {
    title: 'Senior UX Designer',
    company_name: 'Kahuna',
    icon: kahunawhite,
    iconBg: '#333333',
    date: 'Jan 2015 - Dec 2016',
  },
  {
    title: 'UX Lead, Lead UX Designer',
    company_name: 'Salesforce',
    icon: salesforcewhite,
    iconBg: '#333333',
    date: 'Oct 2014 - Dec 2014',
  },
  {
    title: 'Lead Product Designer',
    company_name: 'eBay for Charity, eBay Careers',
    icon: ebaywhite,
    iconBg: '#333333',
    date: 'Jan 2013 - Oct 2014',
  },
  {
    title: 'UX Designer',
    company_name: 'TastingRoom.com',
    icon: tastingroomwhite,
    iconBg: '#333333',
    date: 'Jan 2011 - Dec 2012',
  }
];
  
const projects = [
  {
    id: 'project-1',
    name: 'Novel',
    description: 'WYSIWYG Tiptap based editor using Vercel AI SDK',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'TipTap',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: novelshot,
    repo: 'https://github.com/JackReis/novel',
    demo: 'https://novel-rouge.vercel.app/',
  },
  {
    id: 'project-2',
    name: 'Google Home App',
    description:
      'Google Home App interaction patterns on iOS, Android, Nest Hub and Nest Hub Max devices, including voice commands, stereo speaker pair setup and adaptive assistant volume configuration. Cross-platform (and cross-organizational) collaboration to improve discovery of media types like Meditations and Podcasts',
    tags: [
      {
        name: 'AfterEffects',
        color: 'blue-text-gradient',
      },
      {
        name: 'iOS',
        color: 'green-text-gradient',
      },
      {
        name: 'Material Design System',
        color: 'pink-text-gradient',
      },
    ],
    image: nestshot,
    repo: 'https://github.com/android/nowinandroid',
    demo: 'https://jack.digital/projects/google/',
  },
  {
    id: 'project-3',
    name: 'Pegasus',
    description: 'Kahuna UI System designed from scratch',
    tags: [
      {
        name: 'webpack',
        color: 'blue-text-gradient',
      },
      {
        name: 'react',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: pegasusshot,
    repo: 'https://jack.digital/projects/kahuna/',
    demo: 'https://jack.digital/projects/kahuna/',
  },
  {
    id: 'project-4',
    name: 'TastingRm',
    description: `A single-page application that allows users to review any of the prototypes I created for TastingRoom.com internal review with version details.`,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'webpack',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: tastingrmshot,
    repo: 'https://github.com/JackReis/tastingrm',
    demo: 'https://vermillion-fenglisu-d6bc46.netlify.app/welcome.html',
  },
  {
    id: 'project-5',
    name: 'SendGrid Multichannel Ads',
    description:
      'Quadrupled (400%) pilot enrollment and achieved executive greenlight for Ads product later acquired by Twilio.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'Facebook Ad Network',
        color: 'green-text-gradient',
      },
      {
        name: 'Google Ad Network',
        color: 'pink-text-gradient',
      },
    ],
    image: sendgridshot,
    repo: 'https://jack.digital/projects/sendgrid/',
    demo: 'https://jack.digital/projects/sendgrid/',
  },
];

export { services, technologies, experiences, projects };
