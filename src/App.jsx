import * as React from 'react'
import Container from '@mui/material/Container'
import Navbar from './components/navbar/navbar.component'
import Header from './components/header/header.component'
import Experience from './components/tab-panel/tab-panel.component'
import About from './components/about/about.component'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { GlobalStyles } from '@mui/material'
import ProjectsContainer from './components/projects/projects-container.component'
import Contact from './components/contact/contact.component'
import Footer from './components/footer/footer.component'
import { useMediaQuery } from '@mui/material'

export default function App() {
  // const alignCenter = { display: 'flex', alignItems: 'center' }
  const lgScreen = useMediaQuery('(min-width:1245px)')


  function handleClick() {
    cardRef.current.scrollIntoView({ behavior: 'smooth', block:'start', inline: 'start' })
  }


  if (!lgScreen) {
    return (
      <Container maxWidth="fluid" overflowX={'hidden'}>
        <GlobalStyles styles={styles} />
        <Header />
        <Navbar />
        <About />
        <Experience />
        <ProjectsContainer />
        <Contact />
        <Footer />
      </Container>
    )
  } else {
    return (
      <Container maxWidth="fluid">
        <GlobalStyles styles={styles} />
        <Navbar />
        <Header />
        <About />
        <Experience />
        <ProjectsContainer />
        <Contact />
        <Footer />
      </Container>
      // <>
      //   <GlobalStyles styles={styles} />
      //   <Navbar />
      //   <Parallax pages={2.7}>
      //     <ParallaxLayer
      //       offset={0}
      //       speed={3}
      //       factor={0.5}
      //       // style={{ ...alignCenter, justifyContent: 'center' }}
      //     >
      //       <Header />
      //     </ParallaxLayer>

      //     <ParallaxLayer
      //       offset={0.9}
      //       speed={3}
      //       factor={0.5}
      //       // style={{ ...alignCenter, justifyContent: 'center' }}
      //     >
      //       <About />
      //     </ParallaxLayer>

      //     <ParallaxLayer
      //       offset={0.9999999999999999}
      //       speed={.4}
      //       factor={0.01}
      //       // style={{ ...alignCenter, justifyContent: 'center' }}
      //       >
      //       <Experience />
      //     </ParallaxLayer>

      //     <ParallaxLayer
      //       offset={1}
      //       speed={2}
      //       factor={0.0001}

      //       // style={{ ...alignCenter, justifyContent: 'flex-end' }}
      //     >
      //       <ProjectsContainer />
      //     </ParallaxLayer>
      //     <ParallaxLayer
      //       offset={1.8999}
      //       speed={0.3}
      //       factor={0.01}
      //       style={{ zIndex: -1 }}
      //     >
      //       <Contact />
      //     </ParallaxLayer>
      //     <ParallaxLayer
      //       offset={2.25}
      //       speed={0.9}
      //       factor={0.01}
      //       // style={{ ...alignCenter, justifyContent: 'flex-end' }}
      //     >
      //       <Footer />
      //     </ParallaxLayer>
      //   </Parallax>
      // </>
    )
  }
}

const styles = {
  '::-webkit-scrollbar': {
    width: '1.1em',
    background: 'black',
  },
  '::-webkit-scrollbar-track': {
    backgroundColor: '#1f1f1f',
    borderRadius: '30px',
  },
  '::-webkit-scrollbar-thumb': {
    backgroundColor: 'white',
    opacity: '0.5',
    outline: 'none',
    borderRadius: '30px',
  },
  overflowX: 'hidden',
  scrollBehavior: 'smooth'
}
