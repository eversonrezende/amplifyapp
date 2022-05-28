import React from 'react'
import logo from './logo.svg'
import './App.css'
//import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react-v1' //usar esse import para corrigir o AmplifySignOut

function App() {
  return (
    <div className="App">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>We now have Auth!</h1>
      </header>
      <AmplifySignOut />
    </div>
  )
}

export default withAuthenticator(App)
