import React from 'react'
import GlobalStyle from './Global'
import Header from './layouts/Header'
import { Button, CancelButton } from './elements'

function App () {
  return (
    <div>
      <Header />
      <GlobalStyle />
      <Button>Say Hello</Button>
      <Button type="cancel">Don't Say Hello</Button>
      <CancelButton>Don't Say Hello</CancelButton>
      <Button size="small">Say Hello</Button>
      <CancelButton size="small">Don't Say Hello</CancelButton>
    </div>
  )
}

export default App
