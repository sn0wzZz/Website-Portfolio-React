import React from 'react'
import { useState } from 'react'
import { Link, useMediaQuery, Typography, css } from '@mui/material'
import styled from '@emotion/styled'
import VizSensor from 'react-visibility-sensor'
import { Slide } from 'react-reveal'

import { Box, Container } from '@mui/system'
import ProjectCard from './ProjectCard'
import { projects } from '../../data/data'
import StyledButton from '../../ui/Button'


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
            <StyledButton
            type='git'
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
            </StyledButton>
          </Container>
        </Box>
      </Slide>
    </VizSensor>
  )
}
