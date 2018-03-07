import React, { Component } from 'react'

import styled, { injectGlobal } from 'styled-components'
import styledNormalize from 'styled-normalize'

import Africa from './Africa'
import Water from './Water'

/**
 * globally injected style scripts. will eventually replace App/index.css
 * @see https://www.styled-components.com/docs/api#injectglobal
 */
injectGlobal`
  ${styledNormalize}
`

class App extends Component {
  render() {
    return (
      <div>
        <Africa />
        <Water />
      </div>
    )
  }
}

export default App
