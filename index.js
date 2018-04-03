// @flow
import React from 'react'
import ReactDOM from 'react-dom'
import { SideEffectProvider } from 'react-stateful-component'
import App from './src/App'

const mount = document.getElementById('app')
if (!mount) {
  throw new Error('There is nowhere for React to mount to.')
}

ReactDOM.render(
  React.createElement(SideEffectProvider, null,
    React.createElement(App)
  ),
  mount
)
