import React, { Component } from 'react'

import styled, { injectGlobal } from 'styled-components'
import styledNormalize from 'styled-normalize'

import Africa from './Africa'
import CountDown from './CountDown'

/**
 * globally injected style scripts. will eventually replace App/index.css
 * @see https://www.styled-components.com/docs/api#injectglobal
 */
injectGlobal`
  ${styledNormalize}

  body {
    background: black;
  }
`

class App extends Component {
  render() {
    return (
      <div>
        <Africa />
        <CountDown />
      </div>
    )
  }
}

export default App
