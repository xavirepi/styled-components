import { css } from 'styled-components'

// We can create a mixin to position elements dinamically using this function.
export const fixed = ( { x = 0, y = 0 } = {} ) => (// We give a default value of 0, 0 and then an empty object is specified whenever the function fixed is called.
  // And the default value of x and y is going to be an empty object
  css`
    position: fixed;
    top: ${y};
    left: ${x};
  `
);

export const absolute = ({ x = 0, y = 0 } = {}) => css`
    position: absolute;
    top: ${y};
    left: ${x};
  `;
