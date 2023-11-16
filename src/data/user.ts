import {
  EducationLevel,
  IAward,
  ICompany,
  IEducation,
  IExperience,
  IPosition,
  IProject,
  ISkill,
  IUser,
  IUserDetails,
  SkillType
} from '../models'

const awards: IAward[] = [
  {
    id: 1,
    title: 'Kudos Awardee',
    description: '',
    address: '',
    date: new Date(2021, 1),
  },
  {
    id: 2,
    title: 'ITO Client Service Delivery',
    description: '',
    address: '',
    date: new Date(2019, 6),
  },
  {
    id: 3,
    title: 'Client Satisfaction Award',
    description: '',
    address: '',
  },
  {
    id: 4,
    title: 'Sustainability Award',
    description: '',
    address: '',
  },
  {
    id: 5,
    title: 'Project Manager Recognition',
    description: '',
    address: '',
  },
  {
    id: 6,
    title: 'Top 10 Peer-to-Peer Awardee',
    description: '',
    address: '',
  }
]

const education: IEducation[] = [
  {
    id: 1,
    // userId: number
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

// TODO change id and types accordingly
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
  name: 'Sprobe',
  address: 'Cebu, Philippines',
  logo: '/portfolio/company/sprobe-logo.jpg', // logo path
  details: 'A Japan-affiliated company that provides software solutions globally. Caters both ITO Services (Software Development and Programming) and BPO Services (Creative Designs)',
  website: 'https://sprobe.com/',
  email: '',
  phone: '',
}

// TODO
const codevProjects: IProject[] = [
  {
    id: 1,
    name: 'Traction Ag',
    description: 'A farm management solution software built for the cloud.\n' +
      'Integrates actual accounting numbers with field operations,\n' +
      'resulting in real-time financial analysis for timely and informed\n' +
      'decision making',
    startDate: new Date(),
    endDate: new Date(),
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
    ],
    responsibilities: [
      'Sample responsibility',
      'Sample responsibility 2',
      'Sample responsibility 3',
    ],
    website: 'https://www.tractionag.com/',
    logo: '/portfolio/company/traction-logo.jpg',
    address: 'Indiana, USA'
  }
]

const codevCompany: ICompany = {
  id: 2,
  name: 'CoDev',
  address: 'Cebu, Philippines',
  logo: '/portfolio/company/codev-logo.jpg', // logo path
  details: 'A software-focused outsourcing and consulting company. Connects highly-skilled developers from emerging nations such as the Philippines with small and medium-sized businesses in the US and Canada',
  website: 'https://www.codev.com/',
  email: '',
  phone: '',
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
      // description?: string
    },
    startDate: new Date(2020, 6, 18),
    endDate: new Date(2023, 4, 5),
  },
  {
    id: 2,
    userId: 1,
    companyId: 1,
    company: sprobeCompany,
    projects: [],
    position: {
      id: 1,
      name: 'Full Stack Engineer',
      // description?: string
    },
    startDate: new Date(2016, 3, 1),
    endDate: new Date(2020, 6, 17),
  },
]

// TODO add social media
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
  photo: '/portfolio/profile.jpg',
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
  overview: 'A full stack engineer with over 7 years of experience with ' +
    'a strong focus on web development in the Software as a ' +
    'Service (SaaS) industry. Has successfully delivered ' +
    'robust and scalable software solutions for international ' +
    'clients like Japan, America, and New Zealand.',
}
