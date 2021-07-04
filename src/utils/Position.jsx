import { css } from 'styled-components'

// We can create a mixin to position elements dinamically using this function.
export const fixed = ( { x = 0, y = 0, yProp = 'top', xProp = 'left' } = {} ) => (// We give a default value of 0, 0 and then an empty object is specified whenever the function fixed is called.
  // And the default value of x and y is going to be an empty object
  css`
    position: fixed;
    ${yProp}: ${y};
    ${xProp}: ${x};
  `
);

export const absolute = ({ x = 0, y = 0, yProp = 'top', xProp = 'left' } = {}) => css`
    position: absolute;
    ${yProp}: ${y};
    ${xProp}: ${x};
  `;
