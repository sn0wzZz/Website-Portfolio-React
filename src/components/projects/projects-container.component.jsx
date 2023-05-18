import React from 'react'
import { useState } from 'react'
import { Box, Container } from '@mui/system'
import { Link, useMediaQuery ,Typography} from '@mui/material'
import styled from '@emotion/styled'
import ProjectCard from '../project-card/project-card'
import VizSensor from 'react-visibility-sensor'
import { Slide } from 'react-reveal'
import png1 from '../../assets/site.png'
import png2 from '../../assets/mapi.png'
import png3 from '../../assets/crud.png'

// title description color gradient technologies linklive linkgit

const MoreButton = styled(Link)(
  ({ theme }) => `
    background: transparent;
    color: #d9d9d9;
    border: none;
    font-weight: bold;
    // margin-inline: 0.7rem;
    cursor: pointer;
    padding: 0.5em 0.7em;
    border-radius: 2em;
    border: 3px solid #fff;
    font-size: 2rem;
    margin-bottom: 4rem;
    text-decoration: none;

    &:hover{
      color: #1f1f1f;
      background-color: #fff;
      opacity: 0.8;
      transition: color 500ms, background-color 500ms, opacity 500ms;
    }
    &:not(:hover) {
      color: #d9d9d9;
      transition: color 500ms, background 500ms, opacity 500ms;
    }
  `
)

const projects = [
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

export default function ProjectsContainer() {
  const midScreen = useMediaQuery('(min-width:840px)')
  const smallScreen = useMediaQuery('(min-width:540px)')
  const [active, setActive] = useState(false)

  return (
    <VizSensor
      onChange={(isVisible) => setActive(isVisible)}
    >
      <Slide bottom>
        <Box
          id="work"
          position={'relative'}
          bgcolor={'background.default'}
          zIndex={-2}
        >
          <Container maxWidth="lg">
            <Typography
              variant={'h2'}
              color={'primary'}
              sx={{
                paddingTop: smallScreen? '7rem': '3rem',
                fontWeight: 'bold',
                fontSize: {
                  lg: '4rem',
                  md: '3rem',
                  sm: '3rem',
                  xs: '3rem',
                },
              }}
            >
              Some things I've built
            </Typography>
          </Container>
          {projects.map((project) => {
            return <ProjectCard key={project.id} projectData={project} />
          })}
          <Container
            maxWidth="lg"
            sx={{ display: 'flex', justifyContent: 'center' }}
          >
            <MoreButton
              href="https://github.com/sn0wzZz"
              sx={{
                fontSize: {
                  lg: '1.5rem',
                  md: '1.5rem',
                  sm: '1.5rem',
                  xs: '1.5rem',
                },
              }}
              target="_blank"
            >
              See more
            </MoreButton>
          </Container>
        </Box>
      </Slide>
    </VizSensor>
  )
}
