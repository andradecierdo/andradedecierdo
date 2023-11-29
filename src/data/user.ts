import {
  EducationLevel,
  IAward,
  ICompany,
  IEducation,
  IExperience,
  IProject,
  ISkill,
  ISocialMedia,
  IUserDetails,
} from '../models'

const awards: IAward[] = [
  {
    id: 1,
    userId: 1,
    title: 'Kudos Awardee',
    description: '',
    address: '',
    date: new Date(2021, 1),
  },
  {
    id: 2,
    userId: 1,
    title: 'ITO Client Service Delivery',
    description: '',
    address: '',
    date: new Date(2019, 6),
  },
  {
    id: 3,
    userId: 1,
    title: 'Client Satisfaction Award',
    description: '',
    address: '',
  },
  {
    id: 4,
    userId: 1,
    title: 'Sustainability Award',
    description: '',
    address: '',
  },
  {
    id: 5,
    userId: 1,
    title: 'Project Manager Recognition',
    description: '',
    address: '',
  },
  {
    id: 6,
    userId: 1,
    title: 'Top 10 Peer-to-Peer Awardee',
    description: '',
    address: '',
  }
]

const education: IEducation[] = [
  {
    id: 1,
    userId: 1,
    degree: 'BS in Information Technology',
    school: 'Silliman University',
    level: EducationLevel.tertiary,
    address: 'Dumaguete City, Philippines',
    startDate: new Date(2011, 3, 1),
    endDate: new Date(2015, 3, 1),
    website: 'https://su.edu.ph/',
  }
]

const mainSkills: ISkill[] = [
  {
    id: 1,
    name: 'React',
    level: 90,
  },
  {
    id: 2,
    name: 'Angular',
    level: 90,
  },
  {
    id: 4,
    name: 'Node',
    level: 90,
  },
  {
    id: 5,
    name: 'Laravel',
    level: 90,
  },
  {
    id: 6,
    name: 'GraphQL',
    level: 80,
  },
  {
    id: 8,
    name: 'MySQL',
    level: 80,
  },
  {
    id: 9,
    name: 'Postgres',
    level: 80,
  },
  {
    id: 11,
    name: 'Docker',
    level: 70,
  },
]

const skills: ISkill[] = [
  {
    id: 3,
    name: 'Typescript',
    level: 90,
  },
  {
    id: 3,
    name: 'Javascript',
    level: 90,
  },
  {
    id: 3,
    name: 'PHP',
    level: 90,
  },
  {
    id: 10,
    name: 'MongoDB',
    level: 90,
  },

  {
    id: 12,
    name: 'Git',
    level: 80,
  },
  {
    id: 7,
    name: 'HTML & CSS',
    level: 90,
  },
]

const sprobeCompany: ICompany = {
  id: 1,
  userId: 1,
  name: 'Sprobe',
  address: 'Cebu, Philippines',
  logo: '/portfolio/company/sprobe-logo.jpg', // logo path
  details: 'A Japan-affiliated company that provides software solutions globally. Caters both ITO Services (Software Development and Programming) and BPO Services (Creative Designs)',
  website: 'https://sprobe.com/',
  email: '',
  phone: '',
}

// Sprobe Projects
const sprobeProjects: IProject[] = [
  // CM Studio
  {
    id: 3,
    companyId: 1,
    name: 'CM Studio',
    description: 'A cloud video generation service that allows you to create and edit videos used for advertisements',
    startDate: new Date(2018, 8, 18), // TODO dates
    endDate: new Date(2020, 6, 18),
    position: {
      id: 1,
      name: 'Full Stack Engineer',
      description: '',
    },
    skills: [
      {
        id: 1,
        name: 'React',
        level: 90,
      },
      {
        id: 5,
        name: 'Laravel',
        level: 90,
      },
      {
        id: 4,
        name: 'Node',
        level: 90,
      },
      {
        id: 3,
        name: 'PHP',
        level: 90,
      },
      {
        id: 3,
        name: 'Javascript',
        level: 90,
      },
      {
        id: 8,
        name: 'MySQL',
        level: 80,
      },
      {
        id: 11,
        name: 'Docker',
        level: 70,
      },
    ],
    responsibilities: [
      'Created a user-friendly assistant feature that helps you choose a video template based on purpose and information you provide',
      'Refactored database tables to have better structure and optimized association',
      'Implemented core features of the application that allow you to create and edit a video by adding texts, video clip, photos and background music',
      'Developed a custom resizable and draggable video clip trimmer that enables users to select the desired timeframe to be added to the final video',
      'Introduced process improvements, design patterns, and coding standards to have more organized, clean and maintainable codes',
      'Led the team and mentored junior engineers to enhance their skills by coaching and guiding them in their tasks',
    ],
    website: 'https://cmstudio.jp/',
    logo: '/portfolio/company/cmstudio-logo.png',
    address: 'Tokyo, Japan'
  },
  // Phrontier
  {
    id: 3,
    companyId: 1,
    name: 'Phrontier',
    description: 'An internal system dedicated to sales team to have a simpler view and easier project management which is integrated to Phabricator that allows the system to utilize its APIs',
    startDate: new Date(2018, 4, 18), // TODO dates
    endDate: new Date(2018, 8, 18),
    position: {
      id: 1,
      name: 'Full Stack Engineer',
      description: '',
    },
    skills: [
      {
        id: 1,
        name: 'React',
        level: 90,
      },
      {
        id: 5,
        name: 'Laravel',
        level: 90,
      },
      {
        id: 3,
        name: 'PHP',
        level: 90,
      },
      {
        id: 3,
        name: 'Javascript',
        level: 90,
      },
      {
        id: 8,
        name: 'MySQL',
        level: 80,
      },
      {
        id: 11,
        name: 'Docker',
        level: 70,
      },
      {
        id: 12,
        name: 'Git',
        level: 80,
      },
    ],
    responsibilities: [
      'Implemented the core functions that send requests to the API and processes the response in a simpler and user-friendly view for non-tech users',
      'Ensured quality output by thoroughly reviewing codes and testing functionalities',
      'Setup and modified the API to meet the desired behavior and requirements for the frontend',
      'Built client-side modules with mobile responsiveness',
      'Involved in continuous integration and continuous delivery',
    ],
    website: '',
    logo: '/portfolio/company/default-company-logo.png',
    address: 'Tokyo, Japan'
  },

  // Automatching
  {
    id: 3,
    companyId: 1,
    name: 'BizMatch',
    description: 'A business automatching system dedicated for Japanese companies. Automatches companies based on their interests and needs',
    startDate: new Date(2016, 3, 1), // TODO dates
    endDate: new Date(2018, 4, 18),
    position: {
      id: 1,
      name: 'Full Stack Engineer',
      description: '',
    },
    skills: [
      {
        id: 5,
        name: 'Laravel',
        level: 90,
      },
      {
        id: 3,
        name: 'PHP',
        level: 90,
      },
      {
        id: 3,
        name: 'Javascript',
        level: 90,
      },
      {
        id: 8,
        name: 'MySQL',
        level: 80,
      },
      {
        id: 11,
        name: 'Docker',
        level: 70,
      },
      {
        id: 12,
        name: 'Git',
        level: 80,
      },
    ],
    responsibilities: [
      'Implemented the main automatching algorithm that matches and schedules companies based on their needs and availability with optimization and efficiency',
      'Designed, developed, and managed well-functioning database from scratch',
      'Worked closely with project managers and clients in identifying requirements and analyzing solutions',
      'Involved in planning, code reviewing, testing, and demonstrating the progress to the clients',
    ],
    website: '',
    logo: '/portfolio/company/default-company-logo.png',
    address: 'Tokyo, Japan'
  },
]

const codevProjects: IProject[] = [
  // TRACTION
  {
    id: 1,
    companyId: 2,
    name: 'Traction Ag',
    description: 'A farm management solution software built for the cloud.\n' +
      'Integrates actual accounting numbers with field operations,\n' +
      'resulting in real-time financial analysis for timely and informed\n' +
      'decision making',
    startDate: new Date(2020, 10, 18),
    endDate: new Date(2023, 4, 5),
    position: {
      id: 1,
      name: 'Full Stack Engineer',
      description: '',
    },
    skills: [
      {
        id: 2,
        name: 'Angular',
        level: 90,
      },
      {
        id: 4,
        name: 'Node',
        level: 90,
      },
      {
        id: 3,
        name: 'Typescript',
        level: 90,
      },
      {
        id: 6,
        name: 'GraphQL',
        level: 80,
      },
      {
        id: 9,
        name: 'Postgres',
        level: 80,
      },
      {
        id: 11,
        name: 'Docker',
        level: 70,
      },
      {
        id: 12,
        name: 'Git',
        level: 80,
      },
    ],
    responsibilities: [
      'Developed a feature that calculates the company’s retained earnings and accrual net income based on its accounts and transactions',
      'Implemented a page that generates accounting reports like accrual balance sheet and its supporting schedule',
      'Created a leaflet (Javascript interactive map library) feature that creates resizable, rotatable and draggable grids based on a multipolygon layer and drops a marker at the center of each box which is a helpful feature when dealing with agronomy operations like getting soil samples',
      'Implemented the core functions of the agronomy module that let you create field boundaries through leaflet or upload a shapefile which will be saved as geojson in the database',
      'Involved in sprint planning, designing, unit testing, code reviewing and presenting of the sprint progress to the client',
    ],
    website: 'https://www.tractionag.com/',
    logo: '/portfolio/company/traction-logo.jpg',
    address: 'Indiana, USA'
  },
  // ADALLY
  {
    id: 1,
    companyId: 2,
    name: 'Adally',
    description: 'A tool for scanning website’s compliance to ADA (Americans with Disabilities Act) based on WCAG (Web Content Accessibility Guidelines). Scans the website’s pages and returns a list of accessibility issues with solution reference',
    startDate: new Date(2020, 6, 18),
    endDate: new Date(2020, 9, 28),
    position: {
      id: 1,
      name: 'Full Stack Engineer',
      description: '',
    },
    skills: [
      {
        id: 1,
        name: 'React',
        level: 90,
      },
      {
        id: 4,
        name: 'Node',
        level: 90,
      },
      {
        id: 3,
        name: 'Typescript',
        level: 90,
      },
      {
        id: 6,
        name: 'GraphQL',
        level: 80,
      },
      {
        id: 10,
        name: 'MongoDB',
        level: 80,
      },
      {
        id: 11,
        name: 'Docker',
        level: 70,
      },
      {
        id: 12,
        name: 'Git',
        level: 80,
      },
    ],
    responsibilities: [
      'Maintained and enhanced the microservice responsible for creating requests to the accessibility APIs and processing the response for better analysis',
      'Introduced process improvements and coding standards to have readable and maintainable codes',
      'Contributed to resolving technical debts and bug fixing',
    ],
    website: 'https://adally.com/',
    logo: '/portfolio/company/adally-logo.jpg',
    address: 'Utah, USA'
  }
]

const codevCompany: ICompany = {
  id: 2,
  userId: 1,
  name: 'CoDev',
  address: 'Cebu, Philippines',
  logo: '/portfolio/company/codev-logo.jpg', // logo path
  details: 'A software-focused outsourcing and consulting company. Connects highly-skilled developers from emerging nations such as the Philippines with small and medium-sized businesses in the US and Canada',
  website: 'https://www.codev.com/',
  email: '',
  phone: '',
}

const snowballEffectCompany: ICompany = {
  id: 3,
  userId: 1,
  name: 'Snowballeffect',
  address: 'Auckland, New Zealand',
  logo: '/portfolio/company/snowballeffect-logo.jpg', // logo path
  details: 'New Zealand’s leading equity crowdfunding platform',
  website: 'https://www.snowballeffect.co.nz/',
  email: '',
  phone: '',
  skills: [
    {
      id: 5,
      name: 'Laravel',
      level: 90,
    },
    {
      id: 3,
      name: 'PHP',
      level: 90,
    },
    {
      id: 12,
      name: 'Git',
      level: 80,
    },
  ],
  responsibilities: [
    'Reported directly to the engineering team',
    'Created a script for automated autoloading of an internal dependency through composer',
    'Enhanced model configuration and dependencies',
  ]
}

const experiences: IExperience[] = [
  {
    id: 1,
    userId: 1,
    companyId: 2,
    company: codevCompany,
    projects: codevProjects,
    position: {
      id: 1,
      name: 'Full Stack Engineer',
    },
    startDate: new Date(2020, 6, 18),
    endDate: new Date(2023, 4, 5),
  },
  {
    id: 2,
    userId: 1,
    companyId: 3,
    company: snowballEffectCompany,
    projects: [],
    position: {
      id: 1,
      name: 'Laravel Developer',
    },
    startDate: new Date(2019, 8, 5),
    endDate: new Date(2019, 10, 5),
  },
  {
    id: 3,
    userId: 1,
    companyId: 1,
    company: sprobeCompany,
    projects: sprobeProjects,
    position: {
      id: 1,
      name: 'Full Stack Engineer',
    },
    startDate: new Date(2016, 3, 1),
    endDate: new Date(2020, 6, 17),
  },
]

const socialMedia: ISocialMedia[] = [
  {
    name: 'Github',
    link: 'https://github.com/andradecierdo',
    iconClass: 'fa fa-github',
  },
  {
    name: 'Linkedin',
    link: 'https://www.linkedin.com/in/andrade-chris-decierdo/',
    iconClass: 'fa fa-linkedin-square',
  }
]

export const myProfile: IUserDetails = {
  id: 1,
  address: '3 Hornsey Avenue, Henderson',
  city: 'Auckland',
  country: 'New Zealand',
  email: 'andradechrisdecierdo@gmail.com',
  firstName: 'Andrade Chris',
  lastName: 'Decierdo',
  phone: '+64 204 0265304',
  title: 'Full Stack Engineer',
  photo: '/portfolio/profile-small.jpg',
  bannerPhoto: '/portfolio/banner-pic.png',
  bannerCover: '/portfolio/banner-bg.jpg',
  resume: {
    path: '/portfolio/my-cv.pdf',
    fileName: 'Andrade Chris Decierdo - CV',
  },
  awards,
  certificates: [],
  education,
  experiences,
  references: [],
  mainSkills,
  skills,
  socialMedia,
  overview: 'A full stack engineer with over 7 years of experience with ' +
    'a strong focus on web development in the Software as a ' +
    'Service (SaaS) industry. Has successfully delivered ' +
    'robust and scalable software solutions for international ' +
    'clients like Japan, America, and New Zealand.',
}
