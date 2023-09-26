//prettier-ignore
import {Container, Box, IconButton,Typography, useMediaQuery} from '@mui/material'
import LaunchIcon from '@mui/icons-material/Launch'
import GitHubIcon from '@mui/icons-material/GitHub'
import styled from '@emotion/styled'
import VizSensor from 'react-visibility-sensor'
import { Slide } from 'react-reveal'
import { useState } from 'react'

const IcoBtn = styled(IconButton)`
  color: rgba(255, 255, 255, 0.8);
  transition: color 0.3s, border 0.3s;
  :hover {
    color: white;
  }
`

const Image = styled(Box)`
  position: absolute;
  width: 70vw;
  height: 60vw;
  max-width: 100%;
  max-height: 150%;
  z-index: -1;
  background-size: cover;
  border-radius: 30px;
`

const Card = styled(Box)`
  background-position: center;
  background-size: cover;
  border-radius: 30px;
  position: relative;
  box-shadow: 0px 10px 40px;
`

export default function ProjectCard({ projectData }) {
  const {
    id,
    title,
    description,
    technologies,
    img,
    color,
    gradient,
    linkLive,
    linkGit,
  } = projectData
  const midScreen = useMediaQuery('(min-width:840px)')
  const smallScreen = useMediaQuery('(min-width:540px)')
  const [active, setActive] = useState(false)
  return (
    <VizSensor onChange={(isVisible) => setActive(isVisible)}>
      <Slide bottom>
        <Container
          maxWidth='lg'
          sx={{
            display: 'flex',
            justifyContent: midScreen
              ? id % 2
                ? 'flex-end'
                : 'flex-start'
              : 'center',
            marginBlock: midScreen ? '12.5rem' : '2.5rem',
            ':nth-of-type(n)': {
              marginBottom: midScreen ? '7.5rem' : '',
            },
          }}
        >
          <Card
            sx={{
              width: midScreen ? '60%' : '100%',
              padding: midScreen ? '2rem' : '1.5rem',
              background: midScreen
                ? color
                : `linear-gradient(rgba(${gradient},0.9), rgba(${gradient},0.9)), url(${img})`,
            }}
          >
            <Image
              sx={{
                display: midScreen ? 'block' : 'none',
                transform:
                  id % 2 ? 'translate(-70%, -22%)' : 'translate(63%, -22%)',
                backgroundImage: `linear-gradient(rgba(${gradient},0.2), rgba(${gradient},0.2)), url(${img})`,
              }}
            />

            <Box color={'primary.main'}>
              <Typography
                sx={{
                  fontSize: {
                    lg: '2.5rem',
                    md: '2.2rem',
                    sm: '2rem',
                    xs: '1.5rem',
                  },
                  color: 'rgba(255,255,255,0.8)',
                }}
                fontWeight={'bold'}
                paddingBottom={3}
              >
                {title}
              </Typography>
              <Typography
                sx={{
                  fontSize: {
                    lg: '1.1rem',
                    md: '1rem',
                    sm: '1.2rem',
                    xs: '1.2rem',
                  },
                }}
                fontWeight='bold'
              >
                {description}
              </Typography>
            </Box>
            <Box
              sx={{
                marginTop: 3,
                borderRadius: smallScreen ? 30 : 7,
                display: 'flex',
                flexWrap: 'wrap',
                // flexDirection: smallScreen ? 'row' : 'column',
                // alignItems: 'flex-end',
              }}
            >
              <Typography
                sx={{
                  fontSize: {
                    lg: '1rem',
                    md: '1rem',
                    sm: '1.2rem',
                    xs: '1rem',
                  },
                }}
                color='black'
              >
                {technologies.map((technology, i) => {
                  return (
                    <span
                      key={i}
                      style={{
                        marginRight: '.5rem',
                        marginBottom: '.5rem',
                        background: 'rgba(255,255,255,0.8)',
                        color: 'black',
                        padding: ' .5rem 1rem',
                        display: 'inline-block',
                        borderRadius: '2rem',
                      }}
                    >
                      {technology}
                    </span>
                  )
                })}
              </Typography>
              <Box
                sx={{
                  float: 'right',
                  marginLeft: 'auto',
                  marginTop: !smallScreen ? '0.5rem' : '1rem',
                }}
              >
                <IcoBtn
                  href={linkGit}
                  target='_blank'
                  disableRipple
                  disableTouchRipple
                >
                  <GitHubIcon fontSize='large' />
                </IcoBtn>
                {linkLive && (
                  <IcoBtn
                    href={linkLive}
                    target='_blank'
                    disableRipple
                    disableTouchRipple
                  >
                    <LaunchIcon fontSize='large' sx={{ marginLeft: '1rem' }} />
                  </IcoBtn>
                )}
              </Box>
            </Box>
          </Card>
        </Container>
      </Slide>
    </VizSensor>
  )
}
