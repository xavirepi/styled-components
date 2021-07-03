import styled from "styled-components";
import { fixedTop } from '../utils';

const color = 'white'

export const Button = styled.button`
  padding: 5px 20px;
  border-radius: 4px;
  color: ${color};
  font-size: 2rem;
  border: none;
  background: indigo;
`

export const CancelButton = styled(Button)`
  background: tomato;
  ${fixedTop};
`
