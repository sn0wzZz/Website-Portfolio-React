import styled from '@emotion/styled'
import { Link, css } from '@mui/material'
import theme from '../theme'

const styles = {
  menu: ' margin-right: 0.7rem;',
  resume: ` 
  border: 3px solid ${theme.palette.primary.main};`,

  git: ` border: 3px solid ${theme.palette.primary.main}; 
  margin-bottom: 4rem;  
  margin-top: 2rem;`,
  mail: `border: 3px solid ${theme.palette.primary.main}; 
    margin-bottom: 4rem; 
    &:hover{ 
      box-shadow: cyan 0 0 40px;
      transform: translateY(-10%);
    }`,
}

const StyledButton = styled(Link)`
  background: transparent;
  color: ${theme.palette.primary.main};
  border: none;
  font-weight: bold;
  cursor: pointer;
  padding: 0.5em 0.7em;
  border-radius: 2em;
  text-decoration: none;

  &:hover {
    color: ${theme.palette.background.default};
    background-color: ${theme.palette.primary.main};
    opacity: 0.8;
    transition: all 500ms;
  }
  &:not(:hover) {
    color: #d9d9d9;
    transition: all 500ms;
  }
  ${(props) => styles[props.type]}
`

export default StyledButton
