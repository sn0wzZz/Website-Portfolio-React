import { skills } from '../../data/data'

import Grid2 from '@mui/material/Unstable_Grid2' // Grid version 2
import { Container, Box, Typography } from '@mui/material'
import { Slide } from 'react-reveal'
import Technology from './Technology'


export const headingFontStyle = {
  fontSize: {
    lg: '2.5rem',
    md: '2rem',
    sm: '2rem',
    xs: '2rem',
  },
  fontWeight: 'bold',
}

export default function About() {
  

  return (
      <Slide bottom>
        <Container
          id='about'
          maxWidth={'md'}
          sx={{
            border: '2px solid white',
            borderRadius: '30px',
            marginBottom: { xs: '2rem', sm: '3rem', md: '4rem', lg: '7rem' },
            padding: { xs: '2rem', sm: '3rem', md: '3rem', lg: '3rem' },
            zIndex: '999999',
          }}
        >
          <Box color={'primary.white'}>
            <Typography sx={headingFontStyle} paddingBlock='1.5rem'>
              About Me
            </Typography>

            <Typography
              sx={{
                fontSize: {
                  lg: '1.5rem',
                  md: '1.5rem',
                  sm: '1.5rem',
                  xs: '1.2rem',
                },
              }}
            >
              Hi, my name is Martin. I design and develop stunning digital
              experiences which live on the web. My hobby to play around with
              CSS and HTML quickly turned into a passoin! Now I always try to
              make the next project I'm working on better than the one before!
            </Typography>
          </Box>
          <Box paddingTop={'1rem'}>
            <Typography sx={headingFontStyle} gutterBottom color={'white'}>
              What I use
            </Typography>
            <Grid2
              container
              rowSpacing={2}
              columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 2 }}
            >
              {skills.map((skill, i) => {
                return <Technology skill={skill} key={skill.technology} i={i} />
              })}
            </Grid2>
          </Box>
        </Container>
      </Slide>
  )
}
