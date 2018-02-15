import React, { Component } from 'react'

import styled, { injectGlobal } from 'styled-components'
import styledNormalize from 'styled-normalize'

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
      </div>
    )
  }
}

export default App
