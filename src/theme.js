import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';


// Create a theme instance.
let theme = createTheme({
  palette: {
    primary: {
      main: '#d9d9d9',
      white: '#fff',
    },
    secondary: {
      main: '#00a3bc',
      shadow: 'rgba(0, 163, 188, .75)',
      dark: '#007689',
      darker: '#00606f',
    },
    error: {
      main: red.A400,
    },
    background: {
      main: '#242424',
      default: '#0f0f0f',
      secondary: '#2f2f2f',
    },
  },
})


export default theme;
