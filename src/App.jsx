import React from 'react';
import GlobalStyle from './Global';
import Header from './layouts/Header';
import { Button } from './elements';

// Cancel button
function App () {
  return (
    <div>
      <Header />
      <GlobalStyle />
      <Button>Say Hello</Button>
      <Button modifiers="cancel">Don't Say Hello</Button>
      <Button modifiers="small">Say Hello</Button>
      <Button modifiers={["small", "cancel"]}>Don't Say Hello</Button>
      {/* Modifiers accept an array of properties so we can add more than one of them to a component */}
    </div>
  )
}

export default App
