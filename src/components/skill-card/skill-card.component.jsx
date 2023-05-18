import React from 'react'
import {Card,CardContent,Typography} from '@mui/material'



export default function SkillCard({ skill }) {
  const { technology, logo } = skill
  return (
    <Card
      key={skill.technology}
      variant="outlined"
      sx={{ borderRadius: 7, color: 'Black', backgroundColor: 'primary'}}
    >
      <React.Fragment>
        <CardContent>
          <Typography variant="body2">
          </Typography>
          <Typography variant="h5" component="div" sx={{display:'flex', justifyContent: 'center',fontSize: {
                  lg: '1.5rem',
                  md: '1.5rem',
                  sm: '1rem',
                  xs: '1rem',
                },}}>
            {skill.technology}
          </Typography>
        </CardContent>
      </React.Fragment>
    </Card>
  )
}
