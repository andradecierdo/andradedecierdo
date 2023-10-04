import { IAward, IUser, IUserDetails } from '../models'

const awards: IAward[] = [
  {
    id: 1,
    title: '',
    description: '',
    address: '',
    // date: ,
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
  title: 'Full Stack Developer',
  photo: '/profile.jpg',
  awards: [],
  certificates: [],
  education: [],
  experiences: [],
  references: [],
  skills: [],
  overview: 'A full stack engineer with over 7 years of experience with ' +
    'a strong focus on web development in the Software as a ' +
    'Service (SaaS) industry. Has successfully delivered ' +
    'robust and scalable software solutions for international ' +
    'clients like Japan, America, and New Zealand.',
}
