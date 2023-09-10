import { useState } from 'react'

import { Container, Typography, Link, css } from '@mui/material'
import styled from '@emotion/styled'
import VizSensor from 'react-visibility-sensor'
import { Slide } from 'react-reveal'
import StyledButton from '../../ui/Button'


export default function Contact() {
  const [active, setActive] = useState(false)
  return (
    <VizSensor
      partialVisibility={'bottom'}
      offset={{ top: 10000 }}
      minTopValue={10}
      onChange={(isVisible) => setActive(isVisible)}
    >
      <Slide bottom>
        <Container
          id='contact'
          maxWidth={'md'}
          sx={{
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginBlock: { lg: '5rem', md: '2.5rem', xs: '6rem' },
            bgcolor: 'background.default',
          }}
        >
          <Typography
            variant='h2'
            sx={{
              fontSize: {
                lg: '4rem',
                md: '3rem',
                sm: '3rem',
                xs: '3rem',
              },
            }}
            color={'secondary.light'}
            fontWeight={'bold'}
          >
            Get in touch
          </Typography>
          <Typography
            color={'primary.main'}
            sx={{
              fontSize: {
                lg: '1.5rem',
                md: '1.5rem',
                sm: '1.2rem',
                xs: '1.2rem',
              },
              maxWidth: '750px',
              marginTop: '1rem',
              marginBottom: '5rem',
            }}
            paddingBlock='1.5rem'
          >
            I'm always looking forward to hearing from you about any projects
            you may have in mind so don't hesitate to get in touch with me. I'll
            try to get back at you as quickly as I can!
          </Typography>
          <StyledButton
          type='mail'
            sx={{
              fontSize: {
                lg: '1.5rem',
                md: '1.75rem',
                sm: '1.5rem',
                xs: '1.5rem',
              },
            }}
            href='mailto:sn0wzzz.dev@gmail.com'
            underline='none'
          >Say hello</StyledButton>
        </Container>
      </Slide>
    </VizSensor>
  )
}
