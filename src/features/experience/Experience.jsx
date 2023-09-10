import { useRef, useState } from 'react'
import { Tab, Tabs, Typography, Box, useMediaQuery, Container } from '@mui/material'
import PropTypes from 'prop-types'
import VizSensor from 'react-visibility-sensor'
import { Slide } from 'react-reveal'


const tabbedComponentFonts = {
  title: {
    fontSize: {
      lg: '2rem',
      md: '2.2rem',
      sm: '2rem',
      xs: '1.5rem',
    },
    fontWeight: 'bold',
    display: 'block',
  },
  duration: {
    opacity: '.8',
    fontSize: {
      lg: '1rem',
      md: '1rem',
      sm: '1.5rem',
      xs: '1.2rem',
    },
    display: 'block',
  },
  description: {
    fontSize: {
      lg: '1.5rem',
      md: '1.5rem',
      sm: '1.5rem',
      xs: '1.5rem',
    },
    display: 'block',
  },
  bullets: {
    fontSize: {
      lg: '1rem',
      md: '1rem',
      sm: '1.2rem',
      xs: '1.2rem',
    },
    display: 'block',
  },
}

function TabPanel(props) {
  const { children, value, index, ...other } = props
  const smallScreen = useMediaQuery('(min-width:768px)')

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: !smallScreen ? 2 : 5, width: '100%', height: '100%' }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
}

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  }
}

export default function Experience() {
  const [value, setValue] = useState(0)
  const [active, setActive] = useState(false)

  const smallScreen = useMediaQuery('(min-width:768px)')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <VizSensor
      partialVisibility={'bottom'}
      offset={{ top: 10000 }}
      minTopValue={10}
      onChange={(isVisible) => setActive(isVisible)}
    >
      <Slide bottom>
        <Container
          fixed
          id='experience'
          maxWidth={'md'}
          sx={{
            bgcolor: 'secondary.dark',
            borderRadius: '30px',
            zIndex: 99999,
          }}
        >
          <Box>
            <Typography
              variant='h2'
              fontWeight={'bold'}
              color={'white'}
              paddingBlock='1.5rem .5rem'
              sx={{
                fontSize: {
                  lg: '3.5rem',
                  md: '2.75rem',
                  sm: '2rem',
                  xs: '2rem',
                },
              }}
            >
              Where I've worked
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                display: 'flex',
                flexDirection: !smallScreen ? 'column' : 'row',
                paddingBlock: '.5rem',
                width: 'auto',
                color: 'white',
                alignItems: 'center',
              }}
            >
              <Tabs
                orientation={!smallScreen ? 'horizontal' : 'vertical'}
                value={value}
                textColor='secondary'
                indicatorColor='secondary'
                TabIndicatorProps={{ background: 'green', padding: 11 }}
                onChange={handleChange}
                variant='fullWidth'
                aria-label='Vertical tabs example'
                sx={{
                  bgcolor: 'primary.main',
                  borderRadius: '30px',
                  boxShadow: '0px 10px 40px rgb(0 0 0 / 50%)',
                  paddingBlock: !smallScreen ? 0 : 4,
                  color: 'green',
                }}
              >
                <Tab disableTouchRipple label='Timag' {...a11yProps(0)} />
                <Tab disableTouchRipple label='Item Two' {...a11yProps(1)} />
                <Tab disableTouchRipple label='Item Three' {...a11yProps(2)} />
              </Tabs>

              <TabPanel value={value} index={0}>
                <Typography
                  component={'span'}
                  sx={tabbedComponentFonts.title}
                  fontWeight='bold'
                >
                  Timag, Plovdiv — Designer/Developer{' '}
                </Typography>
                <Typography
                  component={'span'}
                  sx={tabbedComponentFonts.duration}
                >
                  January 2022 - March 2022
                </Typography>
                <Typography
                  component={'span'}
                  sx={tabbedComponentFonts.description}
                >
                  Mon Student Practices
                </Typography>
                <Typography
                  component={'span'}
                  sx={tabbedComponentFonts.bullets}
                >
                  • Design of banners, logos etc.
                </Typography>
                <Typography
                  component={'span'}
                   sx={tabbedComponentFonts.bullets}
                >
                  • Making websites (HTML,CSS,JavaScript)
                </Typography>
              </TabPanel>
              <TabPanel value={value} index={1}>
                <Typography sx={tabbedComponentFonts.title} fontWeight='bold'>
                  DummyTab — Designer/Developer
                </Typography>
                <Typography sx={tabbedComponentFonts.duration}>
                  January 2022 - March 2022
                </Typography>
                <Typography sx={tabbedComponentFonts.description}>
                  Mon Student Practices
                </Typography>
                <Typography sx={tabbedComponentFonts.bullets}>
                  • Design of banners, logos etc.
                </Typography>
                <Typography sx={tabbedComponentFonts.bullets}>
                  • Making websites (HTML,CSS,JavaScript)
                </Typography>
              </TabPanel>
              <TabPanel value={value} index={2}>
                <Typography sx={tabbedComponentFonts.title} fontWeight='bold'>
                  DummyTab — Designer/Developer
                </Typography>
                <Typography sx={tabbedComponentFonts.duration}>
                  January 2022 - March 2022
                </Typography>
                <Typography sx={tabbedComponentFonts.description}>
                  Mon Student Practices
                </Typography>
                <Typography sx={tabbedComponentFonts.bullets}>
                  • Design of banners, logos etc.
                </Typography>
                <Typography sx={tabbedComponentFonts.bullets}>
                  • Making websites (HTML,CSS,JavaScript)
                </Typography>
              </TabPanel>
            </Box>
          </Box>
        </Container>
      </Slide>
    </VizSensor>
  )
}
