import React from 'react'
import styled, { ThemeProvider } from 'styled-components/macro'
import GlobalStyle from './Global'
import Header from './layouts/Header'
import { Button, Card } from './elements'

const theme = {
  colors: {
    primary: '#E54B4B',
    secondary: '#DBDE61'
  }
}

const themeTwo = {
  colrs: {
    primary: '#82D8D8',
    secondary: '#524763'
  }
}

// Cancel button
function App () {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Header />
        <GlobalStyle />
        <main
          css={`
            background: red;

            h2 {
              font-size: 100px;
            }
          `}
        >
          <Button>Say Hello</Button>
          <ThemeProvider theme={themeTwo}>
            <Card>
              <h2>Card Heading</h2>
              <Card.Button>Say Hello</Card.Button>
              <Card.Button modifiers='cancel'>Don't Say Hello</Card.Button>
            </Card>
          </ThemeProvider>
          {/* <Button modifiers='cancel'>Don't Say Hello</Button>
          <Button modifiers='small'>Say Hello</Button>
          <Button modifiers={['small', 'cancel']}>Don't Say Hello</Button> */}
          {/* Modifiers accept an array of properties so we can add more than one of them to a component */}
        </main>
      </div>
    </ThemeProvider>
  )
}

export default App

// const Fake = styled.main`
//   background: red;

//   h2 {
//     font-size: 100px;
//   }
// `
