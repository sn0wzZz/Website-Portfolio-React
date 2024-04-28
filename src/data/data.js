import png0 from '../assets/wild-oasis-poster.png'
import png1 from '../assets/site.png'
import png2 from '../assets/fast-react-pizza.png'
import png3 from '../assets/mapi.png'
import png4 from '../assets/crud.png'

import { FaReact } from 'react-icons/fa'
import { FaNodeJs } from 'react-icons/fa'
import { FaCss3Alt } from 'react-icons/fa'
import { FaHtml5 } from 'react-icons/fa'
import { DiJqueryLogo } from 'react-icons/di'
import { IoLogoJavascript } from 'react-icons/io5'

export const projects = [
  {
    id: 0,
    title: 'The Wild Oasis',
    description:
      'The main project of a React course I recently took. It taught me a lot about various useful development patterns and libraries common in modern applications. The project implements a management system of a resort.',
    img: png0,
    color: '#4f46e5',
    gradient: '79, 70, 229',
    technologies: ['React', 'React Query', 'Supabase', 'Recharts'],
    linkLive: 'https://the-wild-oasis-sn0wzzz.netlify.app/',
    linkGit: 'https://github.com/sn0wzZz/the-wild-oasis',
  },
  {
    id: 1,
    title: 'TMDB Application',
    description:
      'A project I recently built for an interview. It accepts a file which contains a list of movie titles separated by commas. The application allows you to select titles from the imported list, after that it fetches information for them and then it renders cards which show the information.',
    img: png1,
    color: 'darkcyan',
    gradient: '12,140,150',
    technologies: ['React', 'Material UI', 'Axios'],
    linkLive: 'https://tmdb-interview-project.netlify.app/',
    linkGit: 'https://github.com/sn0wzZz/TMDB-project',
  },
  {
    id: 2,
    title: 'Fast React Pizza Co.',
    description:
      'An application which allows users to order pizzas from a fictional restaurant. A user can add a number of pizzas to the cart and then increase or decrease their quantity. After an order has been made the user can search for it via the provided order number.',
    img: png2,
    color: '#b68b06',
    gradient: '182, 139, 6',
    technologies: ['React', 'Tailwind', 'Redux'],
    linkLive: 'https://fast-react-pizza-sn0wzzz.netlify.app/',
    linkGit: 'https://github.com/sn0wzZz/fast-react-pizza',
  },
  {
    id: 3,
    title: 'Mapi',
    description: `My final project for university. An application which offers the common functionalities of most GPS applications with the addition of social media capabilities.`,
    img: png3,
    color: '#0f2f33',
    gradient: '15, 47, 51',
    technologies: ['Expo', 'SQLite', 'Supabase', 'React Query'],
    linkLive: '',
    linkGit: 'https://github.com/sn0wzZz/mapi-plus',
  },
  {
    id: 4,
    title: 'GuitarDB',
    description:
      'A CRUD application I built for another course I had at university. It allows you to perform CRUD operations on a guitar database. This one aquainted me with Express and I learned a lot about backend developement.',
    img: png4,
    color: '#0d1a35',
    gradient: '13, 26, 53',
    technologies: ['Node.js', 'Express', 'Axios', 'MongoDB'],
    linkLive: '',
    linkGit: 'https://github.com/sn0wzZz/GuitarDB-DAproject',
  },
]

export const skills = [
  {
    technology: 'HTML',
    logo: FaHtml5,
    color: '#fb4a0b',
  },
  {
    technology: 'CSS',
    logo: FaCss3Alt,
    color: '#437ad4',
  },
  {
    technology: 'JavaScript',
    logo: IoLogoJavascript,
    color: '#f0dc55',
  },
  {
    technology: 'jQuery',
    logo: DiJqueryLogo,
    color: '#106dae',
  },
  {
    technology: 'React',
    logo: FaReact,
    color: '#66dbfb',
  },
  {
    technology: 'Node',
    logo: FaNodeJs,
    color: '#8fc708',
  },
]
