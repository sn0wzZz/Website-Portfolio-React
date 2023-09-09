import png1 from '../assets/site.png'
import png2 from '../assets/mapi.png'
import png3 from '../assets/crud.png'

import { FaReact } from 'react-icons/fa'
import { FaNodeJs } from 'react-icons/fa'
import { FaCss3Alt } from 'react-icons/fa'
import { FaHtml5 } from 'react-icons/fa'
import { DiJqueryLogo } from 'react-icons/di'
import { IoLogoJavascript } from 'react-icons/io5'

export const projects = [
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
    title: 'Mapi',
    description:
      'A simple mobile application which allows you to save and navigate to GPS coordinates in a database. I built this one for a university course and it taught me a few things about creating native apps.',
    img: png2,
    color: '#1f1f1f',
    gradient: '58, 131, 151',
    technologies: ['React Native', 'SQLite', 'Expo'],
    linkLive: '',
    linkGit: 'https://github.com/sn0wzZz/mapi',
  },
  {
    id: 3,
    title: 'GuitarDB',
    description:
      'A CRUD application I built for another course I had at university. It allows you to perform CRUD operations on a guitar database. This one aquainted me with Express and I learned a lot about backend developement.',
    img: png3,
    color: '#0d1a35',
    gradient: '13, 26, 53',
    technologies: ['Node.js','Express','Axios','MongoDB'],
    linkLive: '',
    linkGit: 'https://github.com/sn0wzZz/GuitarDB-DAproject',
  },
] 

export const skills  = [
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