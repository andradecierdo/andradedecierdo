import {EducationLevel, IAward, IEducation, ISkill, IUser, IUserDetails, SkillType} from '../models'

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
    types: [SkillType.frontend],
  },
  {
    id: 2,
    name: 'Angular',
    level: 90,
    types: [SkillType.frontend],
  },
  {
    id: 4,
    name: 'Node',
    level: 90,
    types: [SkillType.frontend],
  },
  {
    id: 5,
    name: 'Laravel',
    level: 90,
    types: [SkillType.frontend],
  },
  {
    id: 6,
    name: 'GraphQL',
    level: 80,
    types: [SkillType.frontend],
  },
  {
    id: 8,
    name: 'MySQL',
    level: 80,
    types: [SkillType.frontend],
  },
  {
    id: 9,
    name: 'Postgres',
    level: 80,
    types: [SkillType.frontend],
  },
  {
    id: 11,
    name: 'Docker',
    level: 70,
    types: [SkillType.frontend],
  },
]

// TODO change id and types accordingly
const skills: ISkill[] = [
  {
    id: 3,
    name: 'Typescript',
    level: 90,
    types: [SkillType.frontend],
  },
  {
    id: 3,
    name: 'Javascript',
    level: 90,
    types: [SkillType.frontend],
  },
  {
    id: 3,
    name: 'PHP',
    level: 90,
    types: [SkillType.frontend],
  },
  {
    id: 10,
    name: 'MongoDB',
    level: 90,
    types: [SkillType.frontend],
  },

  {
    id: 12,
    name: 'Git',
    level: 80,
    types: [SkillType.frontend],
  },
  {
    id: 7,
    name: 'HTML & CSS',
    level: 90,
    types: [SkillType.frontend],
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
  title: 'Full Stack Developer',
  photo: '/profile.jpg',
  awards,
  certificates: [],
  education,
  experiences: [],
  references: [],
  mainSkills,
  skills,
  overview: 'A full stack engineer with over 7 years of experience with ' +
    'a strong focus on web development in the Software as a ' +
    'Service (SaaS) industry. Has successfully delivered ' +
    'robust and scalable software solutions for international ' +
    'clients like Japan, America, and New Zealand.',
}
