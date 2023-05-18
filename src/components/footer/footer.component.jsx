import React from 'react'
import { Box} from '@mui/system'
import { Container, Typography } from '@mui/material'

export default function Footer() {
  return (
    <Container maxWidth='xl' height={'100px'} sx={{textAlign: 'center', bgcolor: 'background.default'}}>
      <Typography color={'secondary.light'} padding={2} fontWeight={'bold'}>
        Designed 'n' Built by Martin Stanchev a.k.a. sn0wzZz
      </Typography>
    </Container>
  )
}
