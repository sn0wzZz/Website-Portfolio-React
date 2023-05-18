import React from 'react'
import { Box } from '@mui/system'
import SkillCard from '../skill-card/skill-card.component'
import { Typography } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2' // Grid version 2


const skills = [
  {
    technology: 'HTML',
    logo: 'logo',
  },
  {
    technology: 'CSS',
    logo: 'logo',
  },
  {
    technology: 'JavaScript',
    logo: 'logo',
  },
  {
    technology: 'jQuery',
    logo: 'logo',
  },
  {
    technology: 'React',
    logo: 'logo',
  },
  {
    technology: 'React Native',
    logo: 'logo',
  },
]

export default function CardContainer() {
  return (

      <Box paddingTop={'1rem'}>
        <Typography sx={{
                fontSize: {
                    lg: '2.5rem',
                    md: '2rem',
                    sm: '1.5rem',
                    xs: '2rem',
                }}}
                fontWeight={'bold'} gutterBottom color={'white'}>
          What I use
        </Typography>
        <Grid2
          container
          rowSpacing={2}
          columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 2 }}
        >
          {skills.map((skill) => {
            return (
              <Grid2 key={skill.technology}  xs={6} sm={6} md={4} lg={3}>
                <SkillCard skill={skill} />
              </Grid2>
            )
          })}
        </Grid2>
      </Box>
  )
}
