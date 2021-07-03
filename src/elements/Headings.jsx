import styled from "styled-components";
import { above } from '../utils/Breakpoints'; // Using export * from './Breakpoints' there's no need to write '../utils/Breakpoints';

export const Heading = styled.h1`
  font-size: 2rem;
  ${above.med`
    color: blue;
  `}
`
