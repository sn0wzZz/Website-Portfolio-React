import React, { useState } from 'react'
import { Box} from '@mui/system'
import { Container, Typography } from '@mui/material'

export default function Footer() {
  const [message,setMessage] = useState(`Designed 'n' Built by Martin Stanchev`)
  const [clicked, setClicked] = useState(false)

  const handleClick = () =>{
    if(!clicked)
    setMessage(message + ' a.k.a. sn0wzZz')
    setClicked(true)
  }

  return (
    <Container maxWidth='xl' height={'100px'} sx={{textAlign: 'center', bgcolor: 'background.default'}}>
      <Typography onClick={handleClick} color={'secondary.light'} padding={2} fontWeight={'bold'}>
        {message}
      </Typography>
    </Container>
  )
}
