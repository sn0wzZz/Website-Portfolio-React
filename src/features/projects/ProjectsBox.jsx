import React from 'react'
import { useState } from 'react'
import { Link, useMediaQuery, Typography } from '@mui/material'
import styled from '@emotion/styled'
import VizSensor from 'react-visibility-sensor'
import { Slide } from 'react-reveal'

import { Box, Container } from '@mui/system'
import ProjectCard from './ProjectCard'
import { projects } from '../../data/data'

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

export default function ProjectsBox() {
  const midScreen = useMediaQuery('(min-width:840px)')
  const smallScreen = useMediaQuery('(min-width:540px)')
  const [active, setActive] = useState(false)

  return (
    <VizSensor onChange={(isVisible) => setActive(isVisible)}>
      <Slide bottom>
        <Box
          id='work'
          position={'relative'}
          bgcolor={'background.default'}
          zIndex={-2}
        >
          <Container maxWidth='lg'>
            <Typography
              variant={'h2'}
              color={'primary'}
              sx={{
                paddingTop: smallScreen ? '7rem' : '3rem',
                paddingBottom: smallScreen ? '3rem' : '1rem',
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
            maxWidth='lg'
            sx={{ display: 'flex', justifyContent: 'center' }}
          >
            <MoreButton
              href='https://github.com/sn0wzZz'
              sx={{
                fontSize: {
                  lg: '1.5rem',
                  md: '1.5rem',
                  sm: '1.5rem',
                  xs: '1.5rem',
                },
              }}
              target='_blank'
            >
              See more
            </MoreButton>
          </Container>
        </Box>
      </Slide>
    </VizSensor>
  )
}
