import * as React from 'react'
//prettier-ignore
import { List,ListItem,IconButton,ListItemButton,ListItemText,
          Drawer,CssBaseline,Box,AppBar,Toolbar,Link as Lnk,} from '@mui/material'
import ButtonUnstyled from '@mui/base/ButtonUnstyled'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import styled from '@emotion/styled'
import { Link, animateScroll as scroll } from 'react-scroll'
import Resume from '../../assets/Martin_Stanchev_Resume.pdf'
import Logo from '../../assets/logo.png'

const drawerWidth = 240
const navItems = ['About', 'Experience', 'Work', 'Contact']

export default function Navbar(props) {
  const { window } = props
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState)
  }

  const MenuButton = styled(Lnk)`
    background: transparent;
    color: #d9d9d9;
    border: none;
    font-weight: bold;
    // font-size: 1.2rem;
    margin-inline: 0.7rem;
    cursor: pointer;
    padding: 0.5em 0.7em;
    border-radius: 30px;
    textdecoration: none;

    &:hover {
      color: #1f1f1f;
      background-color: white;
      opacity: 0.8;
      transition: color 500ms, background-color 500ms, opacity 500ms;
    }
    &:not(:hover) {
      color: #d9d9d9;
      transition: color 500ms, background 500ms, opacity 500ms;
    }
  `
  const ResumeButton = styled(Lnk)(
    ({ theme }) => `
    background: transparent;
    color: #d9d9d9;
    border: none;
    font-weight: bold;
    // font-size: 1.2rem;
    margin-inline: 0.01rem;
    cursor: pointer;
    padding: 0.3em 0.7em;
    border-radius: 30px;
    border: 3px solid #d9d9d9;
    textDecoration: none;

    &:hover {
      color: #1f1f1f;
      background-color: #d9d9d9;
      opacity: 0.8;
      transition: color 500ms, background-color 500ms, opacity 500ms;
    }
    &:not(:hover) {
      color: #d9d9d9;
      transition: color 500ms, background 500ms, opacity 500ms;
    }
  `
  )

  const MenuLogoButton = styled(ButtonUnstyled)`
    background: transparent;
    border: none;
    width: 45px;
    cursor: pointer;

    img:hover {
      opacity: 0.8;
      transition: opacity 0.25s;
    }
    img:not(:hover) {
      opacity: 1;
      transition: opacity 0.25s;
    }
  `

  function handleDownload() {
    const link = document.createElement('a')
    link.href = Resume
    link.download = 'Martin_Stanchev_Resume.pdf'
    link.click()
  }

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: 'center',
        color: 'primary.main',
      }}
    >
      <IconButton
        sx={{
          float: 'right',
          color: 'secondary.light',
          fontSize: '30px',
          bgcolor: 'rgba(255,255,255,0.7)',
          margin: '.5rem 1rem 30% 1rem',
        }}
      >
        <CloseIcon />
      </IconButton>
      <List>
        {navItems.map((item) => (
          <ListItem key={item}>
            <Link
              activeClass="active"
              to={`${item.toLocaleLowerCase()}`}
              spy={true}
              smooth={true}
              offset={-110}
              duration={500}
              style={{ width: '100%' }}
              onClick={handleDrawerToggle}
            >
              <ListItemButton
                disableTouchRipple
                disableRipple
                behavior={'smooth'}
                sx={{
                  textAlign: 'center',
                  paddingInline: 0,
                }}
              >
                <ListItemText
                  primary={item}
                  sx={{
                    bgcolor: 'rgba(255,255,255,0.7)',
                    padding: '.5em',
                    // marginBlock: 1,
                    borderRadius: 30,
                    color: 'secondary.light',
                    fontWeight: 'bold',
                  }}
                />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
        <ListItem>
          <ListItemButton
            disableTouchRipple
            disableRipple
            onClick={handleDownload}
            sx={{
              textAlign: 'center',
              paddingInline: 0,
            }}
          >
            <ListItemText
              primary={'Resume'}
              sx={{
                padding: '.5em',
                color: 'rgba(255,255,255,0.7)',
                borderRadius: 30,
                margin: 0,
                border: '2px solid rgba(255,255,255,0.7)',
                fontWeight: 'bold',
              }}
            />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  )

  const container =
    window !== undefined ? () => window().document.body : undefined

  return (
    <Box>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          bgcolor: 'transparent',
          backdropFilter: 'blur(20px) saturate(180%)',
          webkitBackdropFilter: 'blur(20px) saturate(180%)',
          borderBottom: { lg: 'none',md:'none',sm:'none',xs: '.5px solid grey',  },
          boxShadow: 'none',
          height: { lg: '65px' },
          display: 'flex',
          alingItems: 'center',
        }}
      >
        <Toolbar sx={{ height: '100%', marginInline: { sm: 0, lg: '10%' } }}>
          <MenuLogoButton>
            <img src={Logo} alt="logo" />
          </MenuLogoButton>
          <IconButton
            color="primary"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: 'none' }, marginLeft: 'auto' }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            sx={{
              display: { xs: 'none', sm: 'block' },
              marginLeft: 'auto',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              {navItems.map((item) => (
                <Link
                  activeClass="active"
                  to={`${item.toLocaleLowerCase()}`}
                  spy={true}
                  smooth={true}
                  offset={-110}
                  duration={500}
                  key={item}
                >
                  <MenuButton underline="none">{item}</MenuButton>
                </Link>
              ))}
              <ResumeButton underline="none" onClick={handleDownload}>
                Resume
              </ResumeButton>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          anchor="right"
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              backgroundColor: 'transparent',
              // backgroundColor: 'rgba(9,8,8,0.5)',
              webkitBackdropFilter: 'saturate(180%) blur(20px)',
              backdropFilter: 'saturate(180%) blur(20px)',
              borderRadius: '30px 0 0 30px',
              height: '100vh',
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  )
}
