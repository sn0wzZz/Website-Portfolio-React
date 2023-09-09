import  React , {Suspense} from 'react';
import { createRoot } from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import LoadingScreen from './ui/LoadingScreen';
const App = React.lazy(() => {

  return new Promise(resolve => {
      setTimeout(() => resolve(import('./App')), 2000)
    })
})



const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <Suspense fallback={<LoadingScreen/>}>
      <App />
      </Suspense>
    </ThemeProvider>
  </React.StrictMode>,
);
