import { Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import styled from '@emotion/styled'
import VizSensor from 'react-visibility-sensor'
import { Slide } from 'react-reveal'
import { useState } from 'react'
import { Link } from '@mui/material'

const MailButton = styled(Link)(
  ({ theme }) => `
    background: transparent;
    color: #d9d9d9;
    border: none;
    font-weight: bold;
    // margin-inline: 0.7rem;
    cursor: pointer;
    padding: 0.5em 0.7em;
    border-radius: 2em;
    border: 3px solid #fff;
    // font-size: 2rem;
    margin-bottom: 4rem;
    text-decoration: none;

    &:hover {
      color: #1f1f1f;
      background-color: #fff;
      box-shadow: cyan 0 0 40px;
      transform: translateY(-10%);
      opacity: 0.8;
      transition: color 500ms, background-color 500ms, opacity 500ms, transform 500ms, box-shadow 500ms;
    }

    &:not(:hover) {
      color: #d9d9d9;
      transition: color 500ms, background 500ms, opacity 500ms, transform 500ms, box-shadow 500ms;
    }
  `
)

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
          id="contact"
          maxWidth={'md'}
          sx={{
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginBlock: { lg: '5rem', md: '2.5rem', xs: '6rem' },
          }}
        >
          <Typography
            variant="h2"
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
            paddingBlock="1.5rem"
          >
            I'm always looking forward to hearing from you about any projects
            you may have in mind so don't hesitate to get in touch with me. I'll
            try to get back at you as quickly as I can!
          </Typography>
          <MailButton
            sx={{
              fontSize: {
                lg: '1.5rem',
                md: '1.75rem',
                sm: '1.5rem',
                xs: '1.5rem',
              },
            }}
            href="mailto:sn0wzzz.dev@gmail.com"
            underline="none"
          >
            Say Hello
          </MailButton>
        </Container>
      </Slide>
    </VizSensor>
  )
}
