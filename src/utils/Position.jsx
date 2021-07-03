import { css } from "styled-components"

// CSS Helper (useful for mixins)
// The css function is not necessary if we're using just a string. But it do is necessary when using props or functions in mixins.
export const fixedTop = css`
  position: fixed;
  top: ${({ top }) => top + 'px'};
  left: 0;
`
