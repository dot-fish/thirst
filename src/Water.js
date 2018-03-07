import React, { Component } from 'react'
import styled from 'styled-components'

const __water = styled.svg``

class Water extends Component {
  render() {
    return (
      <__water>
        <svg width="70px" height="70px" viewBox="0 0 70 70">
          <circle fill="DeepSkyBlue" cx="45" cy="45" r="25" />
        </svg>
      </__water>
    )
  }
}

export default Water
