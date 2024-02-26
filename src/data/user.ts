import {
  EducationLevel,
  IAward,
  ICompany,
  IEducation,
  IExperience,
  IProject,
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
  // CM STUDIO
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
    skills: [1, 3, 4, 6, 10, 8, 11, 13],
    responsibilities: [
      'Developed a user-centric assistant feature designed to streamline the video template selection process based on user-provided information and purpose',
      'Improved database tables through strategic refactoring, enhancing structure and optimizing associations for greater efficiency',
      'Pioneered the development of the application\'s core feature, enabling seamless creation and editing of videos with the incorporation of text, video clips, photos, and background music',
      'Innovated a custom resizable and draggable video clip trimmer, providing users with precise control over selecting desired timeframes for inclusion in the final video, enhancing overall editing flexibility',
      'Introduced process improvements and implemented design patterns and coding standards, resulting in a more organized, clean, and maintainable codebase, optimizing overall development efficiency',
      'Demonstrated leadership by guiding a team and mentoring junior engineers, fostering skill enhancement through coaching and guidance in various tasks',
    ],
    website: 'https://cmstudio.jp/',
    logo: '/portfolio/company/cmstudio-logo.png',
    address: 'Tokyo, Japan'
  },
  // PHRONTIER
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
    skills: [1, 4, 6, 10, 8, 11, 13],
    responsibilities: [
      'Orchestrated the implementation of a crucial function, streamlining communication with the API and presenting responses in an intuitive, user-friendly interface tailored for non-technical users',
      'Ensured quality output by conducting code reviews and comprehensive functional testing, maintaining a high standard of code reliability and performance',
      'Configured and fine-tuned the API to align with frontend specifications, ensuring seamless integration and alignment with desired behavior and requirements',
      'Engineered client-side modules with a focus on mobile responsiveness, enhancing accessibility and user experience across various devices',
      'Played a key role in continuous integration and continuous delivery processes, contributing to the seamless and efficient deployment of software updates and enhancements',
    ],
    website: '',
    logo: '/portfolio/company/default-company-logo.png',
    address: 'Tokyo, Japan'
  },
  // AUTOMATCHING
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
    skills: [4, 6, 10, 8, 11, 13],
    responsibilities: [
      'Implemented a robust automatching algorithm, optimizing and enhancing efficiency in matching and scheduling companies based on their unique needs and availability',
      'Designed, developed, and proficiently managed a comprehensive database from inception, ensuring seamless functionality and optimal data management',
      'Collaborated closely with project managers and clients, actively participating in requirement identification and solution analysis, ensuring alignment with project objectives',
      'Played a vital role in project planning, conducted thorough code reviews, performed rigorous testing, and showcased project progress through client demonstrations, ensuring a comprehensive and transparent development process',
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
    skills: [2, 3, 5, 7, 8, 9, 13],
    responsibilities: [
      'Developed a pivotal feature instrumental in financial analysis by creating an advanced algorithm that computes the company\'s retained earnings and accrual net income',
      'Designed and integrated a comprehensive page capable of generating critical accounting reports such as the accrual balance sheet and its supporting schedule',
      'Enhanced the user experience by creating a cutting-edge feature utilizing Javascript interactive map library (leaflet). This feature empowers users in agronomy operations by enabling the creation of resizable, rotatable, and draggable grids on a multipolygon layer. The addition of markers at the center of each grid facilitates precision in tasks like collecting soil samples',
      'Implemented the core functions of the agronomy module that let you create field boundaries through leaflet or upload a shapefile which will be saved as geojson in the database',
      'Demonstrated exceptional versatility by actively participating in the entire software development lifecycle. Contributed significantly to sprint planning, design processes, unit testing, code reviewing, and presenting of sprint progress to the client',
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
    skills: [1, 3, 5, 12, 8, 9, 13],
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
  skills: [4, 11, 13],
  responsibilities: [
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
  mainSkills: [1, 2, 3, 4, 5, 6, 7, 8],
  skills: [9, 10, 11, 12, 13, 14],
  socialMedia,
  overview: 'A full stack engineer with over 7 years of experience with ' +
    'a strong focus on web development in the Software as a ' +
    'Service (SaaS) industry. Has successfully delivered ' +
    'robust and scalable software solutions for international ' +
    'clients like Japan, America, and New Zealand.',
}
