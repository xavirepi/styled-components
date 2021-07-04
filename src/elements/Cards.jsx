import styled from 'styled-components'
import { elevation } from '../utils'
import { Button } from './Buttons'

export const Card = styled.div`
  border-radius: 6px;
  padding: 10px;
  ${elevation[1]};
`;

const CardButton = styled(Button)`
    width: 100%;
`;

Card.Button = CardButton;
