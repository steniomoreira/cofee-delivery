import styled from 'styled-components'

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  background: ${(props) => props.theme.background};
`

export const HeaderWrapper = styled.div`
  width: 100%;
  max-width: 72rem;
  padding: 2rem 1rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > a {
    box-shadow: none;

    :focus {
      box-shadow: none;
    }
  }
`

export const LocationContainer = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

  background: ${(props) => props.theme.purpleLight};
  color: ${(props) => props.theme.purpleDark};
  border-radius: 6px;

  padding: 0.5rem;
  height: 38px;

  font-size: 0.875rem;
  line-height: 18.2px;
`

export const ActionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.75rem;

  a {
    position: relative;
    width: 38px;
    height: 38px;

    display: flex;
    justify-content: center;
    align-items: center;

    background: ${(props) => props.theme.yellowLight};
    color: ${(props) => props.theme.yellowDark};
    border-radius: 6px;
  }
`
