import { Card, CardContent, Typography } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'

export default function Technology({ skill, i }) {
  const { logo, color } = skill

  const Icon = logo
  return (
    <Grid2 xs={6} sm={6} md={4} lg={3}>
      <Card
        key={skill.technology}
        variant='outlined'
        sx={{ borderRadius: 7, color: 'Black', backgroundColor: 'primary' }}
      >
        <CardContent>
          <Typography
            variant='body'
            component='div'
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: {
                lg: '3rem',
                md: '3rem',
                sm: '3rem',
                xs: '3rem',
              },
            }}
          >
            <Icon color={color} />
          </Typography>
        </CardContent>
      </Card>
    </Grid2>
  )
}
