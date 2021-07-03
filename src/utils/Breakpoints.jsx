import { css } from 'styled-components'


const size = {
  small: 400,
  med: 960,
  large: 1140
}

// Above media queries (pixels)
// const above = Object.keys(size).reduce((acc, label) => {
//   acc[label] = (...args) => css`
//     @media (min-width: ${size[label]}px) {
//       ${css(...args)}
//     }
//   `;
//   return acc;
// }, {});

// Above media queries (rem)
export const above = Object.keys(size).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${size[label] / 16}rem) {
      ${css(...args)}
    }
  `
  return acc
}, {})

// Below media queries (rem)
export const below = Object.keys(size).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${size[label] / 16}rem) {
      ${css(...args)}
    }
  `
  return acc
}, {})
