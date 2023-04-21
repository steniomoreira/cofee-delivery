import styled from 'styled-components'
import * as RadioGroup from '@radix-ui/react-radio-group'

export const RadioContainer = styled(RadioGroup.Root)`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem 0.75rem;

  :focus {
    box-shadow: none;
  }
`
