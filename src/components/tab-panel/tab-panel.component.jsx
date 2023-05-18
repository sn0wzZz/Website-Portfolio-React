import * as React from 'react'
import PropTypes from 'prop-types'
import {Tab,Tabs,Typography,Box,useMediaQuery} from '@mui/material'
import {  Container, useTheme } from '@mui/system'
import VizSensor from 'react-visibility-sensor'
import { Slide } from 'react-reveal'
import { useState } from 'react'

function TabPanel(props) {
  const { children, value, index, ...other } = props
  const smallScreen = useMediaQuery('(min-width:768px)')
  const theme = useTheme()

  return (
    <div
      role="tabpanel"
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
  const [value, setValue] = React.useState(0)

  const smallScreen = useMediaQuery('(min-width:768px)')
  const theme = useTheme()

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

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
          fixed
          id="experience"
          maxWidth={'md'}
          sx={{
            bgcolor: 'secondary.dark',
            borderRadius: '30px',
            zIndex: 99999,
            // paddingBottom: { s: '5rem', lg: '10rem' },
          }}
        >
          <Box>
            <Typography
              variant="h2"
              fontWeight={'bold'}
              color={'white'}
              paddingTop="1.5rem"
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
                // justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Tabs
                orientation={!smallScreen ? 'horizontal' : 'vertical'}
                value={value}
                textColor="secondary"
                indicatorColor="secondary"
                TabIndicatorProps={{ background: 'green', padding: 11 }}
                onChange={handleChange}
                variant="fullWidth"
                aria-label="Vertical tabs example"
                sx={{
                  bgcolor: 'primary.main',
                  borderRadius: '30px',
                  boxShadow: '0px 10px 40px rgb(0 0 0 / 50%)',
                  paddingBlock: !smallScreen ? 0 : 4,
                  color: 'green',
                }}
              >
                <Tab disableTouchRipple label="Timag" {...a11yProps(0)} />
                <Tab disableTouchRipple label="Item Two" {...a11yProps(1)} />
                <Tab disableTouchRipple label="Item Three" {...a11yProps(2)} />
                {/* <Tab disableTouchRipple label="Item Four" {...a11yProps(4)} /> */}
              </Tabs>
              <TabPanel value={value} index={1}>
                <Typography
                  sx={{
                    fontSize: {
                      lg: '2rem',
                      md: '2.2rem',
                      sm: '2rem',
                      xs: '1.5rem',
                    },
                  }}
                  fontWeight="bold"
                >
                  Timag, Plovdiv — Designer/Developer
                </Typography>
                <Typography
                  sx={{
                    opacity: '.8',
                    fontSize: {
                      lg: '1rem',
                      md: '1rem',
                      sm: '1.5rem',
                      xs: '1.5rem',
                    },
                  }}
                >
                  January 2022 - March 2022
                </Typography>
                <Typography
                  sx={{
                    fontSize: {
                      lg: '1.5rem',
                      md: '1.5rem',
                      sm: '1.5rem',
                      xs: '1.5rem',
                    },
                  }}
                >
                  Mon Student Practices
                </Typography>
                <Typography
                  sx={{
                    fontSize: {
                      lg: '1rem',
                      md: '1rem',
                      sm: '1.2rem',
                      xs: '1.2rem',
                    },
                  }}
                >
                  • Design of banners, logos etc.
                </Typography>
                <Typography
                  sx={{
                    fontSize: {
                      lg: '1rem',
                      md: '1rem',
                      sm: '1.2rem',
                      xs: '1.2rem',
                    },
                  }}
                >
                  • Making websites (HTML,CSS,JavaScript)
                </Typography>
              </TabPanel>
              <TabPanel value={value} index={0}>
                <Typography
                  sx={{
                    fontSize: {
                      lg: '2rem',
                      md: '2.2rem',
                      sm: '2rem',
                      xs: '1.5rem',
                    },
                  }}
                  fontWeight="bold"
                >
                  DummyTab — Designer/Developer
                </Typography>
                <Typography
                  sx={{
                    opacity: '.8',
                    fontSize: {
                      lg: '1rem',
                      md: '1rem',
                      sm: '1.5rem',
                      xs: '1.5rem',
                    },
                  }}
                >
                  January 2022 - March 2022
                </Typography>
                <Typography
                  sx={{
                    fontSize: {
                      lg: '1.5rem',
                      md: '1.5rem',
                      sm: '1.5rem',
                      xs: '1.5rem',
                    },
                  }}
                >
                  Mon Student Practices
                </Typography>
                <Typography
                  sx={{
                    fontSize: {
                      lg: '1rem',
                      md: '1rem',
                      sm: '1.2rem',
                      xs: '1.2rem',
                    },
                  }}
                >
                  • Design of banners, logos etc.
                </Typography>
                <Typography
                  sx={{
                    fontSize: {
                      lg: '1rem',
                      md: '1rem',
                      sm: '1.2rem',
                      xs: '1.2rem',
                    },
                  }}
                >
                  • Making websites (HTML,CSS,JavaScript)
                </Typography>
              </TabPanel>
              <TabPanel value={value} index={2}>
                <Typography
                  sx={{
                    fontSize: {
                      lg: '2rem',
                      md: '2.2rem',
                      sm: '2rem',
                      xs: '1.5rem',
                    },
                  }}
                  fontWeight="bold"
                >
                  DummyTab — Designer/Developer
                </Typography>
                <Typography
                  sx={{
                    opacity: '.8',
                    fontSize: {
                      lg: '1rem',
                      md: '1rem',
                      sm: '1.5rem',
                      xs: '1.5rem',
                    },
                  }}
                >
                  January 2022 - March 2022
                </Typography>
                <Typography
                  sx={{
                    fontSize: {
                      lg: '1.5rem',
                      md: '1.5rem',
                      sm: '1.5rem',
                      xs: '1.5rem',
                    },
                  }}
                >
                  Mon Student Practices
                </Typography>
                <Typography
                  sx={{
                    fontSize: {
                      lg: '1rem',
                      md: '1rem',
                      sm: '1.2rem',
                      xs: '1.2rem',
                    },
                  }}
                >
                  • Design of banners, logos etc.
                </Typography>
                <Typography
                  sx={{
                    fontSize: {
                      lg: '1rem',
                      md: '1rem',
                      sm: '1.2rem',
                      xs: '1.2rem',
                    },
                  }}
                >
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
