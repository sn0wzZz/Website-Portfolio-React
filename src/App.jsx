import Container from '@mui/material/Container'
import { GlobalStyles } from '@mui/material'

import Navbar from './ui/Navbar'
import Header from './ui/Header'
import Main from './ui/Main'
import About from './features/about/About'
import Experience from './features/experience/Experience'
import ProjectsBox from './features/projects/ProjectsBox'
import Contact from './features/contact/Contact'
import Footer from './ui/Footer'

export default function App() {
  return (
    <Container maxWidth='fluid'>
      <GlobalStyles styles={styles} />
      <Navbar />
      <Header />
      <Main>
        <About />
        <Experience />
        <ProjectsBox />
        <Contact />
      </Main>
      <Footer />
    </Container>
  )
}

const styles = {
  '*': {
    transition: ' background-color 0.3s',
  },
  body: {
    background: '#0f0f0f',
  },

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
  scrollBehavior: 'smooth',
}
