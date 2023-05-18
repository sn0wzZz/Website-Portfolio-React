import React from 'react'
import { Container, Box } from '@mui/material'
import Typography from '@mui/material/Typography'
import VizSensor from 'react-visibility-sensor'
import { useState } from 'react'
import { Slide } from 'react-reveal'
import CardContainer from '../skill-card-container/skill-card-container.component'

export default function About() {
  const [active, setActive] = useState(false)

  return (
    <VizSensor
      partialVisibility={'bottom'}
      offset={{ top: 1 }}
      minTopValue={1}
      onChange={(isVisible) => setActive(isVisible)}
      >
      <Slide bottom>
        <Container
          id='about'
          maxWidth={'md'}
          sx={{
            // bgcolor: 'background.main',
            border: '2px solid white',
            borderRadius: '30px',
            marginBottom: { xs: '2rem', sm: '3rem', md: '4rem', lg: '7rem' },
            padding: { xs: '2rem', sm: '3rem', md: '3rem', lg: '3rem' },
            zIndex: '-9999999999',
          }}
        >
          <Box>
            <Typography
              color={'white'}
              sx={{
                fontSize: {
                  lg: '1.5rem',
                  md: '1.5rem',
                  sm: '1.5rem',
                  xs: '1.2rem',
                },
              }}
            >
              <Typography
                sx={{
                  fontSize: {
                    lg: '2.5rem',
                    md: '2rem',
                    sm: '1.5rem',
                    xs: '2rem',
                  },
                }}
                fontWeight={'bold'}
                paddingBlock="1.5rem"
              >
                About Me
              </Typography>
              Hi, my name is Martin. I design and develop stunning digital
              experiences which live on the web. My hobby to play around with
              CSS and HTML quickly turned into a passoin! Now I always try to
              make the next project I'm working on better than the one before!
            </Typography>
            <CardContainer />
          </Box>
        </Container>
      </Slide>
    </VizSensor>
  )
}
