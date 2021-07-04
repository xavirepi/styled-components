import React from 'react'
import GlobalStyle from './Global'
import Header from './layouts/Header'
import { Button, Card } from './elements'

// Cancel button
function App () {
  return (
    <div>
      <Header />
      <GlobalStyle />
      <main>
        <Card>
          <h2>Card Heading</h2>
          <Card.Button >Say Hello</Card.Button> 
          <Card.Button modifiers="cancel">Don't Say Hello</Card.Button>
        </Card>
        {/* <Button modifiers='cancel'>Don't Say Hello</Button>
        <Button modifiers='small'>Say Hello</Button>
        <Button modifiers={['small', 'cancel']}>Don't Say Hello</Button> */}
        {/* Modifiers accept an array of properties so we can add more than one of them to a component */}
      </main>
    </div>
  )
}

export default App
