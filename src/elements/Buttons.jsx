import styled from 'styled-components'
import { applyStyleModifiers } from 'styled-components-modifiers'
import { teal, elevation } from '../utils'

const BUTTON_MODIFIERS = {
  small: () => `  
    font-size: 1rem;
    padding: 3px 10px;
  `,
  cancel: ({theme}) => `
    background: ${theme.colors.secondary};
  `
}

// We can choose either to have a less components with more props or have more components to export them.
// It all depends on the styling strategy choosed.
export const Button = styled.button`
  padding: 5px 20px;
  border-radius: 4px;
  color: white;
  font-size: 2rem;
  border: none;
  transition: 0.3s ease box-shadow background;
  background: ${teal};
  ${elevation[1]};
  &:hover {
    ${elevation[2]};
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)}; 
`
// applyStyleModifiers function must be called at the bottom of the CSS for the properties to be overwritten.

// The button style is extended
export const CancelButton = styled(Button)`
  background: tomato;
`
