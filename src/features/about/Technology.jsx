import { Card, CardContent, Typography } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'

export default function Technology({ skill, i }) {
  const { logo, color } = skill

  const Icon = logo
  return (
    <Grid2 xs={4} sm={3} md={2} lg={2}>
      <Card
        variant='outlined'
        component={'div'}
        sx={{ borderRadius: 7, color: 'Black', backgroundColor: 'primary',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',}}
      >
        <CardContent>
          <Typography
            variant='body'
            component='div'
            sx={{
              paddingTop: '.6rem',
              // paddingInline: '1rem',
              fontSize: {
                lg: '3rem',
                md: '3rem',
                sm: '3rem',
                xs: '3rem',
              },
              filter: `drop-shadow(0px 0px 15px ${color})`,
            }}
          >
            <Icon
              color={color}
            />
          </Typography>
        </CardContent>
      </Card>
    </Grid2>
  )
}
