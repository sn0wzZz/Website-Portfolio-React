import styled from '@emotion/styled'
import { Box, css } from '@mui/material'

const Loader = styled.div(
  ({ theme }) => `

    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 6rem;
    margin-top: 3rem;
    margin-bottom: 3rem;
  
  &::before,
  &::after {
    content: "";
    position: absolute;
    border-radius: 50%;
    animation: pulsOut 1.8s ease-in-out infinite;
    filter: drop-shadow(0 0 1rem ${theme.palette.secondary.shadow});
  }
  &::before {
    width: 100%;
    padding-bottom: 100%;
    box-shadow: inset 0 0 0 1rem ${theme.palette.secondary.main};
    animation-name: pulsIn;
  }
  &::after {
    width: calc(100% - 2rem);
    padding-bottom: calc(100% - 2rem);
    box-shadow: 0 0 0 0 ${theme.palette.secondary.main};
  }

  @keyframes pulsIn {
    0% {
      box-shadow: inset 0 0 0 1rem ${theme.palette.secondary.main};
      opacity: 1;
    }
    50%, 100% {
      box-shadow: inset 0 0 0 0 ${theme.palette.secondary.main};
      opacity: 0;
    }
  }

  @keyframes pulsOut {
    0%, 50% {
      box-shadow: 0 0 0 0 ${theme.palette.secondary.main};
      opacity: 0;
    }
    100% {
      box-shadow: 0 0 0 1rem ${theme.palette.secondary.main};
      opacity: 1;
    }
  }
      
`
)
// const Loader = styled.div(
//   ({ theme }) => `

//   width: 8px;
//   height: 40px;
//   border-radius: 4px;
//   display: block;
//   margin: 20px auto;
//   position: relative;
//   background: currentColor;
//   color: ${theme.palette.secondary.main};
//   box-sizing: border-box;
//   animation: animloader 0.3s 0.3s linear infinite alternate;


// &::after, ::before {
//   content: '';
//   width: 8px;
//   height: 40px;
//   border-radius: 4px;
//   background: currentColor;
//   position: absolute;
//   top: 50%;
//   transform: translateY(-50%);
//   left: 20px;
//   box-sizing: border-box;
//   animation: animloader 0.3s  0.45s  linear infinite alternate;
// }
// &::before {
//   left: -20px;
//   animation-delay: 0s;
// }

// @keyframes animloader {
//   0%   { height: 48px} 
//   100% { height: 4px}
// }
// `
// )

// const Loader = styled.div(
//   ({ theme }) => `
//     width: 45px;
//     aspect-ratio: 0.75;
//     --c: no-repeat linear-gradient(${theme.palette.secondary.main} 0 0);
//     background: var(--c) 0% 50%, var(--c) 50% 50%, var(--c) 100% 50%;
//     background-size: 20% 50%;
//     animation: loading 1s infinite linear;

//   @keyframes loading {
//     20% {
//       background-position: 0% 0%, 50% 50%, 100% 50%;
//     }
//     40% {
//       background-position: 0% 100%, 50% 0%, 100% 50%;
//     }
//     60% {
//       background-position: 0% 50%, 50% 100%, 100% 0%;
//     }
//     80% {
//       background-position: 0% 50%, 50% 50%, 100% 100%;
//     }
//   }
// `)

export default function LoadingScreen() {
  return (
    <Box bgcolor={'background.default'}  sx={{width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Loader />
    </Box>
  )
}
