import React from 'react'
import { Box, keyframes } from '@mui/system'
import styled from '@emotion/styled'
import { Typography, useMediaQuery } from '@mui/material'
import Grid from '@mui/material/Grid' // Grid version 1
import LogoBig from '../assets/logoBig.png'

const HeaderBox = styled(Box)`
  max-width: 100%;
  display: flex;
  justify-content: space-evenly;
  margin-block: 10vw;
  max-height: 100vh;
`
const ContainerBox = styled(Box)`
  max-width: 100%;
  padding: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
`

const gradient = keyframes`
0% {
    background-position: 0 50%;
}
50% {
    background-position: 100% 50%;
}
100% {
    background-position: 0 50%;
}
`

export default function Header() {
  const smallScreen = useMediaQuery('(min-width: 764px)')
  return (
    <HeaderBox
      component='header'
      paddingTop={!smallScreen ? '1rem' : 0}
      sx={{ paddingTop: { md: 0, sm: 0, xs: '4rem' } }}
    >
      <Grid container spacing={0}>
        <Grid item xs={12} sm={6} lg={6} order={{ xs: 2, sm: 1, lg: 1 }}>
          <ContainerBox>
            <Box>
              <Typography
                sx={{
                  fontSize: {
                    xs: '3rem',
                    sm: '4rem',
                    md: '4rem',
                    lg: '5rem',
                    xl: '5rem',
                  },
                  lineHeight: { lg: '4.5rem', xs: '3.5rem', sm: '4rem' },
                }}
                color='white'
                fontWeight={'bold'}
              >
                Hi, I'm Martin Stanchev
              </Typography>
              <Typography
                sx={{
                  fontSize: {
                    xs: '1.5rem',
                    sm: '2rem',
                    md: '2rem',
                    lg: '2rem',
                    xl: '3rem',
                  },
                  background: 'linear-gradient(45deg, #004bbc, #00e3bc)',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundSize: '150% 150%',
                  animation: `${gradient} 3s linear infinite`,
                  lineHeight: { lg:'3rem', md: '2rem', xs: '2.25rem' },
                }}
                // color="grey"
              >
                UX/UI DESIGNER AND DEVELOPER
              </Typography>
            </Box>
          </ContainerBox>
        </Grid>
        <Grid item xs={12} sm={6} lg={6} order={{ sx: 1, sm: 1, lg: 2 }}>
          <ContainerBox>
            <Box
              sx={{
                width: !smallScreen ? '65%' : '60%',
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <img src={LogoBig} alt='logo' />
              <img
                src={LogoBig}
                alt='logo'
                style={{
                  position: 'absolute',
                  zIndex: -99,
                  filter: !smallScreen
                    ? 'blur(5rem) saturate(250%)'
                    : 'blur(9rem) saturate(250%)',
                }}
              />
            </Box>
          </ContainerBox>
        </Grid>
      </Grid>
    </HeaderBox>
  )
}
